import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const [stats, setStats] = useState({
        totalUsers: 0,
        totalDonations: 0,
        totalRequests: 0,
        totalMessages: 0
    });

    const [donations, setDonations] = useState([]);
    const [users, setUsers] = useState([]);
    const [requests, setRequests] = useState([]);
    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [updatingId, setUpdatingId] = useState(null);

    const token = localStorage.getItem("token");
    const API_URL = import.meta.env.VITE_API_URL;

    const logoutAndLogin = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.dispatchEvent(new Event("userUpdated"));
        navigate("/login");
    };

    const fetchData = async () => {
        if (!token) {
            navigate("/login");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const headers = {
                Authorization: `Bearer ${token}`
            };

            const [
                statsResponse,
                donationsResponse,
                usersResponse,
                requestsResponse,
                messagesResponse
            ] = await Promise.all([
                fetch(`${API_URL}/api/admin/stats`, { headers }),
                fetch(`${API_URL}/api/admin/donations`, { headers }),
                fetch(`${API_URL}/api/admin/users`, { headers }),
                fetch(`${API_URL}/api/admin/requests`, { headers }),
                fetch(`${API_URL}/api/admin/messages`, { headers })
            ]);

            if (
                statsResponse.status === 401 ||
                statsResponse.status === 403
            ) {
                logoutAndLogin();
                return;
            }

            if (
                !statsResponse.ok ||
                !donationsResponse.ok ||
                !usersResponse.ok ||
                !requestsResponse.ok ||
                !messagesResponse.ok
            ) {
                throw new Error("Failed to load admin data");
            }

            const statsData = await statsResponse.json();
            const donationsData = await donationsResponse.json();
            const usersData = await usersResponse.json();
            const requestsData = await requestsResponse.json();
            const messagesData = await messagesResponse.json();

            setStats(statsData);
            setDonations(donationsData.donations || []);
            setUsers(usersData.users || []);
            setRequests(requestsData.requests || []);
            setMessages(messagesData.messages || []);

        } catch (err) {
            console.error(err);
            setError("Unable to load admin dashboard.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const updateRequestStatus = async (id, status) => {
        try {
            setUpdatingId(id);

            const response = await fetch(
                `${API_URL}/api/admin/requests/${id}/status`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({ status })
                }
            );

            const data = await response.json();

            if (response.status === 401 || response.status === 403) {
                logoutAndLogin();
                return;
            }

            if (!response.ok) {
                alert(data.message || "Failed to update request");
                return;
            }

            alert(data.message || "Request updated successfully");

            await fetchData();

        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        } finally {
            setUpdatingId(null);
        }
    };

    const getStatusStyle = (status) => {
        if (status === "accepted") {
            return "bg-green-100 text-green-700";
        }

        if (status === "rejected") {
            return "bg-red-100 text-red-700";
        }

        if (status === "completed") {
            return "bg-blue-100 text-blue-700";
        }

        return "bg-yellow-100 text-yellow-700";
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

                    <p className="mt-4 text-gray-600">
                        Loading Admin Dashboard...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">

            {/* Header */}

            <div className="max-w-7xl mx-auto">

                <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>

                        <p className="text-green-600 font-semibold">
                            FoodBridge
                        </p>

                        <h1 className="text-3xl font-bold text-gray-800">
                            Admin Dashboard
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Manage users, donations, requests and messages.
                        </p>

                    </div>

                    <button
                        onClick={logoutAndLogin}
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold transition"
                    >
                        Logout
                    </button>

                </div>

                {/* Error */}

                {error && (
                    <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                {/* Stats */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

                    <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-green-500">

                        <p className="text-gray-500 text-sm">
                            Total Users
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            {stats.totalUsers}
                        </h2>

                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-orange-500">

                        <p className="text-gray-500 text-sm">
                            Total Donations
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            {stats.totalDonations}
                        </h2>

                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-blue-500">

                        <p className="text-gray-500 text-sm">
                            Food Requests
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            {stats.totalRequests}
                        </h2>

                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-purple-500">

                        <p className="text-gray-500 text-sm">
                            Contact Messages
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            {stats.totalMessages}
                        </h2>

                    </div>

                </div>

                {/* Donations */}

                <div className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden">

                    <div className="p-6 border-b">

                        <h2 className="text-xl font-bold text-gray-800">
                            All Food Donations
                        </h2>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[800px]">

                            <thead className="bg-gray-50">

                                <tr>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Food
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Quantity
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Category
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Location
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Donor
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Status
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {donations.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan="6"
                                            className="p-6 text-center text-gray-500"
                                        >
                                            No donations found.
                                        </td>

                                    </tr>

                                ) : (

                                    donations.map((food) => (

                                        <tr
                                            key={food._id}
                                            className="border-t hover:bg-gray-50"
                                        >

                                            <td className="p-4 font-semibold text-gray-800">
                                                {food.foodName}
                                            </td>

                                            <td className="p-4 text-gray-600">
                                                {food.quantity} {food.unit}
                                            </td>

                                            <td className="p-4 text-gray-600">
                                                {food.category}
                                            </td>

                                            <td className="p-4 text-gray-600">
                                                {food.location}
                                            </td>

                                            <td className="p-4">

                                                <p className="font-medium">
                                                    {food.donor?.name || "Unknown"}
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    {food.donor?.email || ""}
                                                </p>

                                            </td>

                                            <td className="p-4">

                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                                                        food.status
                                                    )}`}
                                                >
                                                    {food.status}
                                                </span>

                                            </td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Requests */}

                <div className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden">

                    <div className="p-6 border-b">

                        <h2 className="text-xl font-bold text-gray-800">
                            Food Requests
                        </h2>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[900px]">

                            <thead className="bg-gray-50">

                                <tr>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Food
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Requester
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Message
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Status
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {requests.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan="5"
                                            className="p-6 text-center text-gray-500"
                                        >
                                            No requests found.
                                        </td>

                                    </tr>

                                ) : (

                                    requests.map((request) => (

                                        <tr
                                            key={request._id}
                                            className="border-t hover:bg-gray-50"
                                        >

                                            <td className="p-4">

                                                <p className="font-semibold text-gray-800">
                                                    {request.food?.foodName || "Food deleted"}
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    {request.food?.location || ""}
                                                </p>

                                            </td>

                                            <td className="p-4">

                                                <p className="font-medium">
                                                    {request.requester?.name || "Unknown"}
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    {request.requester?.email || ""}
                                                </p>

                                            </td>

                                            <td className="p-4 text-gray-600 max-w-xs">
                                                {request.message || "No message"}
                                            </td>

                                            <td className="p-4">

                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                                                        request.status
                                                    )}`}
                                                >
                                                    {request.status}
                                                </span>

                                            </td>

                                            <td className="p-4">

                                                {request.status === "pending" && (

                                                    <div className="flex gap-2">

                                                        <button
                                                            disabled={
                                                                updatingId === request._id
                                                            }
                                                            onClick={() =>
                                                                updateRequestStatus(
                                                                    request._id,
                                                                    "accepted"
                                                                )
                                                            }
                                                            className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-3 py-2 rounded-lg text-sm font-medium"
                                                        >
                                                            Accept
                                                        </button>

                                                        <button
                                                            disabled={
                                                                updatingId === request._id
                                                            }
                                                            onClick={() =>
                                                                updateRequestStatus(
                                                                    request._id,
                                                                    "rejected"
                                                                )
                                                            }
                                                            className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white px-3 py-2 rounded-lg text-sm font-medium"
                                                        >
                                                            Reject
                                                        </button>

                                                    </div>

                                                )}

                                                {request.status === "accepted" && (

                                                    <button
                                                        disabled={
                                                            updatingId === request._id
                                                        }
                                                        onClick={() =>
                                                            updateRequestStatus(
                                                                request._id,
                                                                "completed"
                                                            )
                                                        }
                                                        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-3 py-2 rounded-lg text-sm font-medium"
                                                    >
                                                        Complete
                                                    </button>

                                                )}

                                                {request.status === "rejected" && (

                                                    <span className="text-red-500 text-sm font-medium">
                                                        Rejected
                                                    </span>

                                                )}

                                                {request.status === "completed" && (

                                                    <span className="text-blue-600 text-sm font-medium">
                                                        Completed
                                                    </span>

                                                )}

                                            </td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Users */}

                <div className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden">

                    <div className="p-6 border-b">

                        <h2 className="text-xl font-bold text-gray-800">
                            Registered Users
                        </h2>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[700px]">

                            <thead className="bg-gray-50">

                                <tr>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Name
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Email
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Phone
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Role
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Joined
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {users.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan="5"
                                            className="p-6 text-center text-gray-500"
                                        >
                                            No users found.
                                        </td>

                                    </tr>

                                ) : (

                                    users.map((user) => (

                                        <tr
                                            key={user._id}
                                            className="border-t hover:bg-gray-50"
                                        >

                                            <td className="p-4 font-semibold">
                                                {user.name}
                                            </td>

                                            <td className="p-4 text-gray-600">
                                                {user.email}
                                            </td>

                                            <td className="p-4 text-gray-600">
                                                {user.phone || "Not provided"}
                                            </td>

                                            <td className="p-4">

                                                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold">
                                                    {user.role}
                                                </span>

                                            </td>

                                            <td className="p-4 text-gray-500">

                                                {user.createdAt
                                                    ? new Date(
                                                        user.createdAt
                                                    ).toLocaleDateString()
                                                    : "-"}

                                            </td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Messages */}

                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                    <div className="p-6 border-b">

                        <h2 className="text-xl font-bold text-gray-800">
                            Contact Messages
                        </h2>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[800px]">

                            <thead className="bg-gray-50">

                                <tr>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Name
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Email
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Subject
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Message
                                    </th>

                                    <th className="text-left p-4 text-sm text-gray-600">
                                        Date
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {messages.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan="5"
                                            className="p-6 text-center text-gray-500"
                                        >
                                            No messages found.
                                        </td>

                                    </tr>

                                ) : (

                                    messages.map((message) => (

                                        <tr
                                            key={message._id}
                                            className="border-t hover:bg-gray-50"
                                        >

                                            <td className="p-4 font-semibold">
                                                {message.name}
                                            </td>

                                            <td className="p-4 text-gray-600">
                                                {message.email}
                                            </td>

                                            <td className="p-4 text-gray-600">
                                                {message.subject || "No subject"}
                                            </td>

                                            <td className="p-4 text-gray-600 max-w-md">
                                                {message.message}
                                            </td>

                                            <td className="p-4 text-gray-500">

                                                {message.createdAt
                                                    ? new Date(
                                                        message.createdAt
                                                    ).toLocaleDateString()
                                                    : "-"}

                                            </td>

                                        </tr>

                                    ))

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;