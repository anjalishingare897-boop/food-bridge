import React, { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setSuccess("");
        setError("");
        setLoading(true);

        try {

            const response = await fetch(
                `${API_URL}/api/contact`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {

                setError(
                    data.message ||
                    "Failed to send message"
                );

                return;
            }

            setSuccess(
                "Your message has been sent successfully! ✅"
            );

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        } catch (error) {

            console.error(error);

            setError(
                "Unable to connect to server."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gray-50 py-12 px-6">

            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-10">

                    <h1 className="text-4xl font-bold text-green-900">
                        Contact Us
                    </h1>

                    <p className="text-gray-600 mt-3">
                        Have a question? We would love to hear from you.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* CONTACT INFO */}

                    <div className="bg-green-900 text-white rounded-2xl p-8">

                        <h2 className="text-3xl font-bold mb-6">
                            Get in Touch
                        </h2>

                        <p className="text-green-100 mb-8">
                            FoodBridge connects surplus food with people and organizations who need it.
                        </p>

                        <div className="space-y-5">

                            <div>

                                <p className="font-semibold">
                                    📧 Email
                                </p>

                                <p className="text-green-100">
                                    support@foodbridge.com
                                </p>

                            </div>

                            <div>

                                <p className="font-semibold">
                                    📞 Phone
                                </p>

                                <p className="text-green-100">
                                    +91 98765 43210
                                </p>

                            </div>

                            <div>

                                <p className="font-semibold">
                                    📍 Location
                                </p>

                                <p className="text-green-100">
                                    Maharashtra, India
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* FORM */}

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        {success && (

                            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-5">
                                {success}
                            </div>

                        )}

                        {error && (

                            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-5">
                                {error}
                            </div>

                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full border rounded-lg p-3"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full border rounded-lg p-3"
                            />

                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full border rounded-lg p-3"
                            />

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="6"
                                required
                                className="w-full border rounded-lg p-3"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-green-700 text-white py-3 rounded-lg font-bold hover:bg-green-800 disabled:opacity-50"
                            >
                                {loading
                                    ? "Sending..."
                                    : "Send Message"}
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Contact;