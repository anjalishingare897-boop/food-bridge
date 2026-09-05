import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FoodRequests = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchFood = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/food`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Food load nahi ho raha");
      }

      setFoodItems(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  const handleRequest = async (foodId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first!");
      return;
    }

    const message = prompt(
      "Request ke saath message enter kare:"
    );

    if (message === null) {
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/api/requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            foodId,
            message
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Food request sent successfully!");

      fetchFood();

    } catch (error) {
      console.error(error);
      alert("Server se connect nahi ho pa raha.");
    }
  };

  return (
    <div className="bg-green-50 min-h-screen py-12 px-5">

      {/* ================= HEADER ================= */}

      <div className="text-center mb-12">

        <h1 className="text-4xl md:text-5xl font-bold text-green-900">
          Food Requests
        </h1>

        <p className="text-gray-600 mt-3">
          Available food can be requested for people who need support.
        </p>

      </div>


      {/* ================= FOOD CARDS ================= */}

      {loading ? (

        <div className="text-center py-10">

          <p className="text-green-800 text-lg font-semibold">
            Loading available food...
          </p>

        </div>

      ) : foodItems.length === 0 ? (

        <div className="text-center bg-white max-w-xl mx-auto p-10 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold text-green-800">
            No Food Available
          </h2>

          <p className="text-gray-600 mt-3">
            Currently there are no available food donations.
          </p>

          <Link
            to="/donate-food"
            className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Donate Food
          </Link>

        </div>

      ) : (

        <div className="flex flex-wrap justify-center gap-8">

          {foodItems.map((food) => (

            <div
              key={food._id}
              className="bg-white p-7 rounded-2xl shadow-md w-full sm:w-80 hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              {/* Food Name */}

              <div className="flex justify-between items-center gap-3">

                <h2 className="text-2xl font-bold text-green-800">
                  {food.foodName}
                </h2>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                  Available
                </span>

              </div>


              {/* Food Details */}

              <div className="mt-5 space-y-3 text-gray-700">

                <p>
                  <b>Quantity:</b>{" "}
                  {food.quantity} {food.unit}
                </p>

                <p>
                  <b>Category:</b>{" "}
                  {food.category}
                </p>

                <p>
                  <b>Location:</b>{" "}
                  {food.location}
                </p>

                <p>
                  <b>Expiry:</b>{" "}
                  {new Date(food.expiryDate).toLocaleDateString()}
                </p>

                {food.description && (
                  <p>
                    <b>Details:</b>{" "}
                    {food.description}
                  </p>
                )}

              </div>


              {/* Request Button */}

              <button
                onClick={() => handleRequest(food._id)}
                className="w-full bg-green-700 text-white px-5 py-3 rounded-lg mt-6 font-semibold hover:bg-green-800 transition"
              >
                Request Food
              </button>

            </div>

          ))}

        </div>

      )}


      {/* ================= DONATE SECTION ================= */}

      <div className="bg-green-900 text-white max-w-4xl mx-auto mt-16 p-8 rounded-2xl text-center shadow-lg">

        <h2 className="text-3xl font-bold">
          Have Extra Food?
        </h2>

        <p className="mt-3 text-green-100">
          Your extra food can help someone in need.
        </p>

        <Link
          to="/donate-food"
          className="inline-block mt-6 bg-white text-green-900 px-7 py-3 rounded-lg font-bold hover:bg-green-100 transition"
        >
          Donate Food
        </Link>

      </div>

    </div>
  );
};

export default FoodRequests;