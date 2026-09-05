import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const response = await fetch(
        `${API_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {

        setError(
          data.message || "Login failed"
        );

        return;
      }

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      // Update Navbar immediately
      window.dispatchEvent(
        new Event("userUpdated")
      );

      if (data.user.role === "admin") {

        navigate("/admin");

      } else {

        navigate("/dashboard");

      }

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
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your FoodBridge account
          </p>

        </div>

        {error && (

          <div className="bg-red-100 border border-red-200 text-red-700 p-3 rounded-lg mb-5">
            {error}
          </div>

        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block font-semibold text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          <div>

            <div className="flex justify-between items-center mb-2">

              <label className="font-semibold text-gray-700">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-sm text-green-700 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 disabled:bg-gray-400 transition"
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>

        </form>

        <p className="text-center text-gray-600 mt-6">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-green-700 font-semibold hover:underline"
          >
            Sign Up
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Login;