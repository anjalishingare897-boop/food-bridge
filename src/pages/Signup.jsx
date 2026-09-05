import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {

      const response = await fetch(
        `${API_URL}/api/users/register`,
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
          data.message || "Registration failed"
        );

        return;
      }

      setSuccess(
        "Account created successfully! Redirecting to login..."
      );

      setFormData({
        name: "",
        email: "",
        password: ""
      });

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (error) {

      setError(
        "Unable to connect to server."
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-green-900">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join FoodBridge and make a difference.
          </p>

        </div>

        {error && (

          <div className="bg-red-100 border border-red-200 text-red-700 p-3 rounded-lg mb-5">
            {error}
          </div>

        )}

        {success && (

          <div className="bg-green-100 border border-green-200 text-green-800 p-3 rounded-lg mb-5">
            {success}
          </div>

        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          <div>

            <label className="block font-semibold text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          <div>

            <label className="block font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
              minLength="6"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 disabled:bg-gray-400 transition"
          >

            {loading
              ? "Creating Account..."
              : "Create Account"}

          </button>

        </form>

        <p className="text-center text-gray-600 mt-6">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-green-700 font-semibold hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Signup;