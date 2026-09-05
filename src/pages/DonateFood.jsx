import React, { useState } from "react";

const DonateFood = () => {

  const [formData, setFormData] = useState({
    foodName: "",
    description: "",
    quantity: "",
    unit: "kg",
    category: "",
    image: "",
    location: "",
    expiryDate: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
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

    setMessage("");
    setError("");

    const token = localStorage.getItem("token");

    if (!token) {
      setError("Please login first to donate food.");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(
        `${API_URL}/api/food`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {

        if (response.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        setError(
          data.message || "Failed to add food donation."
        );

        return;
      }

      setMessage(
        "Food donation added successfully!"
      );

      setFormData({
        foodName: "",
        description: "",
        quantity: "",
        unit: "kg",
        category: "",
        image: "",
        location: "",
        expiryDate: ""
      });

    } catch (error) {

      setError(
        "Unable to connect to FoodBridge server."
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen bg-gray-50 py-12 px-4">

      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">

          <div className="text-center mb-8">

            <h1 className="text-3xl sm:text-4xl font-bold text-green-900">
              Donate Food
            </h1>

            <p className="text-gray-500 mt-2">
              Share surplus food with people who need it.
            </p>

          </div>

          {message && (

            <div className="mb-6 bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              {message}
            </div>

          )}

          {error && (

            <div className="mb-6 bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>

          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Food Name
              </label>

              <input
                type="text"
                name="foodName"
                value={formData.foodName}
                onChange={handleChange}
                placeholder="Example: Rice and Dal"
                required
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the food..."
                rows="4"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div>

                <label className="block font-semibold text-gray-700 mb-2">
                  Quantity
                </label>

                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  required
                  placeholder="10"
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />

              </div>

              <div>

                <label className="block font-semibold text-gray-700 mb-2">
                  Unit
                </label>

                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                >

                  <option value="kg">
                    Kg
                  </option>

                  <option value="litre">
                    Litre
                  </option>

                  <option value="plates">
                    Plates
                  </option>

                  <option value="packets">
                    Packets
                  </option>

                  <option value="pieces">
                    Pieces
                  </option>

                </select>

              </div>

            </div>

            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              >

                <option value="">
                  Select category
                </option>

                <option value="Cooked Food">
                  Cooked Food
                </option>

                <option value="Raw Food">
                  Raw Food
                </option>

                <option value="Fruits & Vegetables">
                  Fruits & Vegetables
                </option>

                <option value="Bakery">
                  Bakery
                </option>

                <option value="Packaged Food">
                  Packaged Food
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>

            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Image URL
              </label>

              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/food.jpg"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Example: Pune, Maharashtra"
                required
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Expiry Date
              </label>

              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3.5 rounded-lg font-bold hover:bg-green-700 disabled:bg-gray-400 transition"
            >

              {loading
                ? "Adding Donation..."
                : "Donate Food"}

            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default DonateFood;