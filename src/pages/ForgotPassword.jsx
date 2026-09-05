import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    setMessage(
      "Password reset is not configured yet. Please contact FoodBridge support."
    );

    setEmail("");
  };

  return (

    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-green-900">
            Forgot Password?
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your registered email address.
          </p>

        </div>

        {message && (

          <div className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-4 mb-5 text-sm">
            {message}
          </div>

        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block font-semibold text-gray-700 mb-2">
              Email Address
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

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            Continue
          </button>

        </form>

        <div className="text-center mt-6">

          <Link
            to="/login"
            className="text-green-700 font-semibold hover:underline"
          >
            ← Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;