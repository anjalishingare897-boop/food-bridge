
import React from 'react'
import { Link } from "react-router-dom";

import {
  FaHotel,
  FaUtensils,
  FaClock,
  FaHandsHelping,
  FaCheckCircle,
  FaLeaf,
  FaHeart,
  FaBell,
  FaTruck,
  FaArrowRight
} from "react-icons/fa";

const ForHotels = () => {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <div className="bg-green-900 text-white px-6 md:px-20 py-20">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="md:w-3/5">

            <p className="text-green-300 font-semibold tracking-widest uppercase">
              For Hotels & Restaurants
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Don't Let Good Food Go To Waste
            </h1>

            <p className="text-green-100 text-lg mt-6 leading-8 max-w-xl">
              Have extra food after a meal or event? Share the
              information with nearby NGOs and help make sure
              surplus food can reach people who need it.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              {/* Inform Extra Food */}
              <Link
                to="/donate-food"
                className="bg-white text-green-900 px-7 py-3 rounded-xl font-bold
                hover:bg-green-100 hover:scale-105 transition duration-300 shadow-lg"
              >
                Inform Extra Food
              </Link>

              {/* Learn More */}
              <Link
                to="/how-it-works"
                className="border border-green-300 text-white px-7 py-3 rounded-xl font-semibold
                hover:bg-green-800 hover:scale-105 transition duration-300"
              >
                Learn More
              </Link>

            </div>

          </div>

          <div className="md:w-2/5 flex justify-center">

            <div className="bg-green-800 w-72 h-72 rounded-full flex items-center justify-center
            shadow-2xl hover:scale-105 transition duration-500">

              <FaHotel className="text-[150px] text-green-200" />

            </div>

          </div>

        </div>

      </div>


      {/* Introduction */}
      <div className="py-20 px-6 md:px-20 text-center">

        <p className="text-green-700 font-semibold uppercase tracking-widest">
          Make A Difference
        </p>

        <h2 className="text-4xl font-bold text-green-950 mt-2">
          Your Extra Food Can Have A Purpose
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-5 leading-8">
          Hotels and restaurants often have safe extra food after
          events, meals or daily operations. Instead of letting it
          go unused, our platform helps connect you with NGOs
          that can coordinate collection and distribution.
        </p>

      </div>


      {/* Why Join Us */}
      <div className="bg-green-50 py-20 px-6 md:px-20">

        <div className="text-center">

          <p className="text-green-700 font-semibold uppercase tracking-widest">
            Benefits
          </p>

          <h2 className="text-4xl font-bold text-green-950 mt-2">
            Why Join Us?
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A simple way for hotels and restaurants to turn
            surplus food into meaningful community support.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-6xl mx-auto mt-14">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-md
          hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto">
              <FaUtensils className="text-4xl text-green-800" />
            </div>

            <h3 className="text-xl font-bold text-green-950 mt-6">
              Reduce Food Waste
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Give extra food a useful purpose instead of
              letting it go to waste.
            </p>

          </div>


          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-md
          hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto">
              <FaHandsHelping className="text-4xl text-green-800" />
            </div>

            <h3 className="text-xl font-bold text-green-950 mt-6">
              Help People
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Support NGOs in getting food to people and
              communities who need help.
            </p>

          </div>


          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-md
          hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto">
              <FaClock className="text-4xl text-green-800" />
            </div>

            <h3 className="text-xl font-bold text-green-950 mt-6">
              Easy Process
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Share food information quickly through a
              simple and easy process.
            </p>

          </div>


          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-8 text-center shadow-md
          hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto">
              <FaHotel className="text-4xl text-green-800" />
            </div>

            <h3 className="text-xl font-bold text-green-950 mt-6">
              Build Goodwill
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Show your commitment towards your community
              and responsible food practices.
            </p>

          </div>

        </div>

      </div>


      {/* How Hotels Can Help */}
      <div className="py-20 px-6 md:px-20">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

          <div className="md:w-1/2">

            <p className="text-green-700 font-semibold uppercase tracking-widest">
              Simple Steps
            </p>

            <h2 className="text-4xl font-bold text-green-950 mt-2">
              How Your Hotel Can Help
            </h2>

            <p className="text-gray-600 text-lg mt-5 leading-8">
              Donating extra food doesn't have to be complicated.
              Just follow a few simple steps and let NGOs handle
              the collection process.
            </p>


            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-green-700 text-xl mt-1" />

                <div>
                  <h3 className="font-bold text-green-950">
                    Inform About Extra Food
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Enter basic information about the available food.
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-green-700 text-xl mt-1" />

                <div>
                  <h3 className="font-bold text-green-950">
                    Wait For NGO Response
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Nearby NGOs can view the available donation.
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-green-700 text-xl mt-1" />

                <div>
                  <h3 className="font-bold text-green-950">
                    Coordinate Collection
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Coordinate with the NGO for convenient collection.
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-green-700 text-xl mt-1" />

                <div>
                  <h3 className="font-bold text-green-950">
                    Make A Difference
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Your extra food can become valuable support.
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* Right Card */}
          <div className="md:w-1/2">

            <div className="bg-green-900 rounded-3xl p-10 text-white shadow-2xl">

              <div className="bg-green-800 w-20 h-20 rounded-2xl flex items-center justify-center">
                <FaHandsHelping className="text-4xl text-green-200" />
              </div>

              <h2 className="text-3xl font-bold mt-7">
                Every Donation Matters
              </h2>

              <p className="text-green-100 mt-4 leading-8">
                Whether you have food left after a large event
                or extra meals at the end of the day, sharing
                information about it can help connect that food
                with an NGO.
              </p>

              <div className="border-t border-green-700 mt-7 pt-7">

                <div className="flex items-center gap-3">
                  <FaLeaf className="text-green-300 text-xl" />

                  <span>
                    Reduce unnecessary food waste
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <FaHeart className="text-green-300 text-xl" />

                  <span>
                    Support your local community
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Process Section */}
      <div className="bg-gray-50 py-20 px-6">

        <div className="text-center">

          <p className="text-green-700 font-semibold uppercase tracking-widest">
            Donation Flow
          </p>

          <h2 className="text-4xl font-bold text-green-950 mt-2">
            From Your Kitchen To The Community
          </h2>

        </div>


        <div className="max-w-5xl mx-auto mt-14 flex flex-col md:flex-row items-center justify-between gap-7">

          <div className="text-center">

            <div className="bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <FaHotel className="text-3xl text-white" />
            </div>

            <h3 className="font-bold text-green-950 mt-4">
              Hotel
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Shares food
            </p>

          </div>


          <FaArrowRight className="hidden md:block text-green-700 text-2xl" />


          <div className="text-center">

            <div className="bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <FaBell className="text-3xl text-white" />
            </div>

            <h3 className="font-bold text-green-950 mt-4">
              Notification
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              NGO gets notified
            </p>

          </div>


          <FaArrowRight className="hidden md:block text-green-700 text-2xl" />


          <div className="text-center">

            <div className="bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <FaTruck className="text-3xl text-white" />
            </div>

            <h3 className="font-bold text-green-950 mt-4">
              Collection
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Food is collected
            </p>

          </div>


          <FaArrowRight className="hidden md:block text-green-700 text-2xl" />


          <div className="text-center">

            <div className="bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <FaHeart className="text-3xl text-white" />
            </div>

            <h3 className="font-bold text-green-950 mt-4">
              Community
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Food is distributed
            </p>

          </div>

        </div>

      </div>


      {/* Responsibility Section */}
      <div className="py-20 px-6 md:px-20">

        <div className="max-w-5xl mx-auto bg-green-50 rounded-3xl p-10 md:p-14 text-center">

          <FaLeaf className="text-5xl text-green-700 mx-auto" />

          <h2 className="text-4xl font-bold text-green-950 mt-6">
            Be A Responsible Food Partner
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto leading-8">
            Your hotel or restaurant can become part of a
            community that believes food should be valued,
            shared and used responsibly.
          </p>

          <div className="flex justify-center flex-wrap gap-4 mt-8">

            <div className="bg-white px-6 py-3 rounded-full shadow-sm font-semibold text-green-900
            hover:scale-105 transition duration-300">
              Save Food
            </div>

            <div className="bg-white px-6 py-3 rounded-full shadow-sm font-semibold text-green-900
            hover:scale-105 transition duration-300">
              Help People
            </div>

            <div className="bg-white px-6 py-3 rounded-full shadow-sm font-semibold text-green-900
            hover:scale-105 transition duration-300">
              Build Community
            </div>

          </div>

        </div>

      </div>


      {/* Final CTA */}
      <div className="bg-green-900 text-white text-center py-20 px-6">

        <div className="max-w-3xl mx-auto">

          <FaHandsHelping className="text-5xl text-green-300 mx-auto" />

          <h1 className="text-4xl md:text-5xl font-bold mt-6">
            Ready To Share Your Extra Food?
          </h1>

          <p className="text-green-100 text-lg mt-5 leading-8">
            Join us today and help turn surplus food into
            meaningful support for your community.
          </p>

          {/* Active Button */}
          <Link
            to="/donate-food"
            className="inline-flex items-center justify-center gap-3
            bg-white text-green-900 px-9 py-4 rounded-xl
            font-bold text-lg mt-8 shadow-xl
            hover:bg-green-100 hover:scale-105 transition duration-300"
          >
            Inform Extra Food
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </div>
  )
}

export default ForHotels
