import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import {
  FaUserCircle,
  FaUtensils,
  FaClipboardList,
  FaMapMarkerAlt,
  FaCalendarAlt
} from "react-icons/fa";

const Dashboard = () => {

  const [user, setUser] = useState(null);
  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }

  }, []);

  useEffect(() => {

    if (!token) {
      setLoading(false);
      return;
    }

    const fetchDashboardData = async () => {

      try {

        const [donationResponse, requestResponse] =
          await Promise.all([

            fetch(
              `${API_URL}/api/food/my/donations`,
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            ),

            fetch(
              `${API_URL}/api/requests/my`,
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            )

          ]);

        if (
          donationResponse.status === 401 ||
          requestResponse.status === 401
        ) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);
          return;
        }

        const donationData = await donationResponse.json();
        const requestData = await requestResponse.json();

        setDonations(
          Array.isArray(donationData)
            ? donationData
            : donationData.food || []
        );

        setRequests(
          Array.isArray(requestData)
            ? requestData
            : requestData.requests || []
        );

      } catch (error) {

        console.error(
          "Dashboard error:",
          error
        );

      } finally {

        setLoading(false);

      }
    };

    fetchDashboardData();

  }, [token, API_URL]);

  if (!token || !user) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center">

        <div className="text-green-700 text-xl font-semibold">
          Loading Dashboard...
        </div>

      </div>
    );

  }

  return (

    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* Welcome */}

        <div className="bg-green-700 text-white rounded-2xl p-6 sm:p-8 shadow-lg mb-8">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

            <div>

              <p className="text-green-100 mb-1">
                Welcome back
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold">
                {user.name}
              </h1>

              <p className="text-green-100 mt-2">
                Thank you for helping reduce food waste.
              </p>

            </div>

            <FaUserCircle className="text-7xl text-green-200" />

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <FaUtensils className="text-green-700 text-xl" />
              </div>

              <div>

                <p className="text-gray-500">
                  My Donations
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {donations.length}
                </h2>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <FaClipboardList className="text-blue-700 text-xl" />
              </div>

              <div>

                <p className="text-gray-500">
                  My Requests
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {requests.length}
                </h2>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <FaUserCircle className="text-purple-700 text-xl" />
              </div>

              <div>

                <p className="text-gray-500">
                  Account Type
                </p>

                <h2 className="text-xl font-bold text-gray-800 capitalize">
                  {user.role}
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Profile */}

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            My Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div>
              <p className="text-sm text-gray-500">
                Name
              </p>
              <p className="font-semibold text-gray-800 mt-1">
                {user.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Email
              </p>
              <p className="font-semibold text-gray-800 mt-1 break-all">
                {user.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Role
              </p>
              <p className="font-semibold text-gray-800 mt-1 capitalize">
                {user.role}
              </p>
            </div>

          </div>

        </div>

        {/* Donations */}

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            My Food Donations
          </h2>

          {donations.length === 0 ? (

            <div className="text-center py-10 text-gray-500">
              <FaUtensils className="mx-auto text-4xl mb-3 text-gray-300" />
              <p>You have not added any food donations yet.</p>
            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[700px]">

                <thead>

                  <tr className="border-b">

                    <th className="text-left p-3">
                      Food
                    </th>

                    <th className="text-left p-3">
                      Quantity
                    </th>

                    <th className="text-left p-3">
                      Location
                    </th>

                    <th className="text-left p-3">
                      Expiry
                    </th>

                    <th className="text-left p-3">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {donations.map((food) => (

                    <tr
                      key={food._id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-3 font-semibold">
                        {food.foodName}
                      </td>

                      <td className="p-3">
                        {food.quantity} {food.unit}
                      </td>

                      <td className="p-3">
                        <span className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-green-600" />
                          {food.location}
                        </span>
                      </td>

                      <td className="p-3">
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt className="text-gray-500" />
                          {food.expiryDate
                            ? new Date(
                                food.expiryDate
                              ).toLocaleDateString()
                            : "N/A"}
                        </span>
                      </td>

                      <td className="p-3">

                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold capitalize">
                          {food.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

        {/* Requests */}

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            My Food Requests
          </h2>

          {requests.length === 0 ? (

            <div className="text-center py-10 text-gray-500">

              <FaClipboardList className="mx-auto text-4xl mb-3 text-gray-300" />

              <p>You have not requested any food yet.</p>

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[700px]">

                <thead>

                  <tr className="border-b">

                    <th className="text-left p-3">
                      Food
                    </th>

                    <th className="text-left p-3">
                      Quantity
                    </th>

                    <th className="text-left p-3">
                      Location
                    </th>

                    <th className="text-left p-3">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {requests.map((request) => (

                    <tr
                      key={request._id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-3 font-semibold">
                        {request.food?.foodName || "Food unavailable"}
                      </td>

                      <td className="p-3">
                        {request.food?.quantity || "-"}{" "}
                        {request.food?.unit || ""}
                      </td>

                      <td className="p-3">
                        {request.food?.location || "-"}
                      </td>

                      <td className="p-3">

                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold capitalize">
                          {request.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;