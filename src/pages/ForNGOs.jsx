
import React from "react";
import { Link } from "react-router-dom";

import {
  FaHandsHelping,
  FaBell,
  FaMapMarkerAlt,
  FaTruck,
  FaHeart,
  FaSearch,
  FaUsers,
  FaArrowRight
} from "react-icons/fa";

const ForNGOs = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}

      <div className="bg-green-900 text-white px-5 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-16 lg:py-20">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row
        items-center justify-between gap-10 lg:gap-14">

          <div className="w-full md:w-3/5 text-center md:text-left">

            <p className="text-green-300 font-semibold tracking-widest uppercase text-sm sm:text-base">
              For NGOs
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Help Good Food Reach People
            </h1>

            <p className="text-green-100 text-base sm:text-lg mt-6 leading-7 sm:leading-8 max-w-xl mx-auto md:mx-0">
              Connect with hotels and restaurants that have extra food,
              collect available donations and help distribute them
              to people and communities who need support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8
            justify-center md:justify-start">

              <Link
                to="/signup"
                className="bg-white text-green-900 px-6 sm:px-7 py-3
                rounded-xl font-bold shadow-lg
                hover:bg-green-100 hover:scale-105
                transition duration-300
                flex items-center justify-center gap-2
                w-full sm:w-auto"
              >
                Register Your NGO
                <FaArrowRight />
              </Link>

              <Link
                to="/donate-food"
                className="border border-green-300 text-white px-6 sm:px-7 py-3
                rounded-xl font-semibold hover:bg-green-800
                hover:scale-105 transition duration-300
                flex items-center justify-center gap-2
                w-full sm:w-auto"
              >
                Find Donations
                <FaSearch />
              </Link>

            </div>

          </div>


          <div className="w-full md:w-2/5 flex justify-center">

            <div className="bg-green-800
            w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72
            rounded-full flex items-center justify-center
            shadow-2xl hover:scale-105 hover:rotate-3
            transition duration-500">

              <FaHandsHelping
                className="text-[100px] sm:text-[125px] md:text-[150px]
                text-green-200"
              />

            </div>

          </div>

        </div>

      </div>


      {/* ================= INTRODUCTION ================= */}

      <div className="py-14 sm:py-16 lg:py-20
      px-5 sm:px-8 md:px-12 lg:px-20 text-center">

        <p className="text-green-700 font-semibold uppercase tracking-widest text-sm">
          Work Together
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-green-950 mt-2">
          Your NGO Can Make A Difference
        </h2>

        <p className="text-gray-600 text-base sm:text-lg max-w-3xl
        mx-auto mt-5 leading-7 sm:leading-8">
          Our platform helps NGOs discover food donations from nearby
          hotels and restaurants. By connecting donors and organizations,
          the process of finding and collecting available food becomes
          easier and more organized.
        </p>

      </div>


      {/* ================= BENEFITS ================= */}

      <div className="bg-green-50 py-14 sm:py-16 lg:py-20
      px-5 sm:px-8 md:px-12 lg:px-20">

        <div className="text-center">

          <p className="text-green-700 font-semibold uppercase tracking-widest text-sm">
            NGO Benefits
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-green-950 mt-2">
            Everything You Need To Get Started
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Simple features that help NGOs find available donations
            and coordinate food collection.
          </p>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-5 sm:gap-7 lg:gap-8 max-w-6xl mx-auto mt-10 sm:mt-14">


          {/* CARD 1 */}

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md
          hover:-translate-y-2 hover:shadow-2xl
          transition duration-500">

            <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20
            rounded-2xl flex items-center justify-center">

              <FaBell className="text-3xl sm:text-4xl text-green-800" />

            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-green-950 mt-6">
              Get Notifications
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Receive information when hotels and restaurants
              make extra food available for donation.
            </p>

          </div>


          {/* CARD 2 */}

          <Link
            to="/donate-food"
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-md
            hover:-translate-y-2 hover:shadow-2xl
            transition duration-500 block"
          >

            <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20
            rounded-2xl flex items-center justify-center">

              <FaMapMarkerAlt className="text-3xl sm:text-4xl text-green-800" />

            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-green-950 mt-6">
              Find Nearby Food
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Discover available food donations from
              nearby hotels and restaurants.
            </p>

            <div className="text-green-700 font-semibold mt-5
            flex items-center gap-2">
              Explore Donations
              <FaArrowRight />
            </div>

          </Link>


          {/* CARD 3 */}

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md
          hover:-translate-y-2 hover:shadow-2xl
          transition duration-500">

            <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20
            rounded-2xl flex items-center justify-center">

              <FaTruck className="text-3xl sm:text-4xl text-green-800" />

            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-green-950 mt-6">
              Easy Collection
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Coordinate with donors and arrange collection
              of available food.
            </p>

          </div>


          {/* CARD 4 */}

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md
          hover:-translate-y-2 hover:shadow-2xl
          transition duration-500">

            <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20
            rounded-2xl flex items-center justify-center">

              <FaUsers className="text-3xl sm:text-4xl text-green-800" />

            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-green-950 mt-6">
              Connect With Donors
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Build connections with hotels and restaurants
              that want to donate extra food.
            </p>

          </div>


          {/* CARD 5 */}

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md
          hover:-translate-y-2 hover:shadow-2xl
          transition duration-500">

            <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20
            rounded-2xl flex items-center justify-center">

              <FaHeart className="text-3xl sm:text-4xl text-green-800" />

            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-green-950 mt-6">
              Help Communities
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Help connect donated food with people and
              communities who need support.
            </p>

          </div>


          {/* CARD 6 */}

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md
          hover:-translate-y-2 hover:shadow-2xl
          transition duration-500">

            <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20
            rounded-2xl flex items-center justify-center">

              <FaHandsHelping className="text-3xl sm:text-4xl text-green-800" />

            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-green-950 mt-6">
              Create Impact
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              Turn food donations into meaningful community
              support through your NGO.
            </p>

          </div>

        </div>

      </div>


      {/* ================= HOW IT WORKS ================= */}

      <div className="py-14 sm:py-16 lg:py-20
      px-5 sm:px-8 md:px-12 lg:px-20">

        <div className="text-center">

          <p className="text-green-700 font-semibold uppercase tracking-widest text-sm">
            Simple Process
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-green-950 mt-2">
            How NGOs Can Use Our Platform
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Four simple steps to discover and collect available
            food donations.
          </p>

        </div>


        <div className="max-w-6xl mx-auto mt-10 sm:mt-14
        grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 lg:gap-8">


          {/* STEP 1 */}

          <Link
            to="/donate-food"
            className="flex gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl
            bg-gray-50 hover:bg-green-50 hover:shadow-lg
            hover:-translate-y-1 transition duration-300"
          >

            <div className="bg-green-900 text-white min-w-[56px]
            sm:min-w-16 h-14 sm:h-16 rounded-2xl
            flex items-center justify-center text-xl sm:text-2xl font-bold">
              01
            </div>

            <div>

              <div className="flex items-start gap-3">

                <FaSearch className="text-green-700 mt-1 shrink-0" />

                <h3 className="text-lg sm:text-xl font-bold text-green-950">
                  Check Available Donations
                </h3>

              </div>

              <p className="text-gray-600 mt-3 leading-7">
                Check the platform for food donations shared
                by nearby hotels and restaurants.
              </p>

            </div>

          </Link>


          {/* STEP 2 */}

          <div className="flex gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl
          bg-gray-50 hover:bg-green-50 hover:shadow-lg
          hover:-translate-y-1 transition duration-300">

            <div className="bg-green-900 text-white min-w-[56px]
            sm:min-w-16 h-14 sm:h-16 rounded-2xl
            flex items-center justify-center text-xl sm:text-2xl font-bold">
              02
            </div>

            <div>

              <div className="flex items-start gap-3">

                <FaBell className="text-green-700 mt-1 shrink-0" />

                <h3 className="text-lg sm:text-xl font-bold text-green-950">
                  Receive Notifications
                </h3>

              </div>

              <p className="text-gray-600 mt-3 leading-7">
                Get notified when a suitable food donation
                becomes available.
              </p>

            </div>

          </div>


          {/* STEP 3 */}

          <Link
            to="/contact"
            className="flex gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl
            bg-gray-50 hover:bg-green-50 hover:shadow-lg
            hover:-translate-y-1 transition duration-300"
          >

            <div className="bg-green-900 text-white min-w-[56px]
            sm:min-w-16 h-14 sm:h-16 rounded-2xl
            flex items-center justify-center text-xl sm:text-2xl font-bold">
              03
            </div>

            <div>

              <div className="flex items-start gap-3">

                <FaTruck className="text-green-700 mt-1 shrink-0" />

                <h3 className="text-lg sm:text-xl font-bold text-green-950">
                  Coordinate Collection
                </h3>

              </div>

              <p className="text-gray-600 mt-3 leading-7">
                Contact or coordinate with the donor and
                arrange collection of the available food.
              </p>

            </div>

          </Link>


          {/* STEP 4 */}

          <div className="flex gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl
          bg-gray-50 hover:bg-green-50 hover:shadow-lg
          hover:-translate-y-1 transition duration-300">

            <div className="bg-green-900 text-white min-w-[56px]
            sm:min-w-16 h-14 sm:h-16 rounded-2xl
            flex items-center justify-center text-xl sm:text-2xl font-bold">
              04
            </div>

            <div>

              <div className="flex items-start gap-3">

                <FaHeart className="text-green-700 mt-1 shrink-0" />

                <h3 className="text-lg sm:text-xl font-bold text-green-950">
                  Support Your Community
                </h3>

              </div>

              <p className="text-gray-600 mt-3 leading-7">
                Help distribute the collected food through
                your organization to people who need support.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= DONATION FLOW ================= */}

      <div className="bg-gray-50 py-14 sm:py-16 lg:py-20 px-5 sm:px-8">

        <div className="text-center">

          <p className="text-green-700 font-semibold uppercase tracking-widest text-sm">
            Donation Flow
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-green-950 mt-2">
            From Donor To Community
          </h2>

        </div>


        <div className="max-w-5xl mx-auto mt-10 sm:mt-14
        grid grid-cols-2 md:flex md:flex-row
        items-center justify-between gap-8 md:gap-5">


          {/* DONOR */}

          <Link
            to="/donate-food"
            className="text-center hover:scale-105 transition duration-300"
          >

            <div className="bg-green-900 w-16 h-16 sm:w-20 sm:h-20
            rounded-full flex items-center justify-center mx-auto shadow-lg">

              <FaUsers className="text-2xl sm:text-3xl text-white" />

            </div>

            <h3 className="font-bold text-green-950 mt-4">
              Donor
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Shares food
            </p>

          </Link>


          <FaArrowRight className="hidden md:block text-green-700 text-2xl" />


          {/* NGO */}

          <Link
            to="/signup"
            className="text-center hover:scale-105 transition duration-300"
          >

            <div className="bg-green-900 w-16 h-16 sm:w-20 sm:h-20
            rounded-full flex items-center justify-center mx-auto shadow-lg">

              <FaBell className="text-2xl sm:text-3xl text-white" />

            </div>

            <h3 className="font-bold text-green-950 mt-4">
              NGO
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Gets notification
            </p>

          </Link>


          <FaArrowRight className="hidden md:block text-green-700 text-2xl" />


          {/* COLLECTION */}

          <Link
            to="/contact"
            className="text-center hover:scale-105 transition duration-300"
          >

            <div className="bg-green-900 w-16 h-16 sm:w-20 sm:h-20
            rounded-full flex items-center justify-center mx-auto shadow-lg">

              <FaTruck className="text-2xl sm:text-3xl text-white" />

            </div>

            <h3 className="font-bold text-green-950 mt-4">
              Collection
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Food is collected
            </p>

          </Link>


          <FaArrowRight className="hidden md:block text-green-700 text-2xl" />


          {/* COMMUNITY */}

          <Link
            to="/about"
            className="text-center hover:scale-105 transition duration-300"
          >

            <div className="bg-green-900 w-16 h-16 sm:w-20 sm:h-20
            rounded-full flex items-center justify-center mx-auto shadow-lg">

              <FaHeart className="text-2xl sm:text-3xl text-white" />

            </div>

            <h3 className="font-bold text-green-950 mt-4">
              Community
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Receives support
            </p>

          </Link>

        </div>

      </div>


      {/* ================= WHY NGOs MATTER ================= */}

      <div className="py-14 sm:py-16 lg:py-20
      px-5 sm:px-8 md:px-12 lg:px-20">

        <div className="max-w-5xl mx-auto bg-green-900 rounded-3xl
        p-7 sm:p-10 md:p-14 text-white">

          <div className="flex flex-col md:flex-row items-center
          justify-between gap-8 sm:gap-10">

            <div className="w-full md:w-2/3 text-center md:text-left">

              <p className="text-green-300 uppercase tracking-widest font-semibold text-sm">
                Together We Can
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold mt-3">
                NGOs Are The Bridge Between Food & People
              </h2>

              <p className="text-green-100 mt-5 text-base sm:text-lg leading-7 sm:leading-8">
                Your organization plays an important role in connecting
                food donors with communities. By joining the platform,
                you can help make the donation process easier and more
                organized.
              </p>

            </div>


            <div className="bg-green-800 w-28 h-28 sm:w-32 sm:h-32
            rounded-full flex items-center justify-center
            hover:scale-110 transition duration-500 shrink-0">

              <FaHandsHelping className="text-5xl sm:text-6xl text-green-200" />

            </div>

          </div>

        </div>

      </div>


      {/* ================= FINAL CTA ================= */}

      <div className="bg-green-50 text-center
      py-14 sm:py-16 lg:py-20 px-5 sm:px-8">

        <FaHandsHelping className="text-5xl sm:text-6xl text-green-800 mx-auto" />

        <h1 className="text-3xl sm:text-4xl md:text-5xl
        font-bold text-green-950 mt-6">
          Ready To Make A Difference?
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mt-5
        max-w-2xl mx-auto leading-7 sm:leading-8">
          Register your NGO and become part of a community
          working together to reduce food waste and support people.
        </p>

        <Link
          to="/signup"
          className="flex sm:inline-flex items-center justify-center gap-3
          bg-green-900 text-white px-7 sm:px-9 py-4 rounded-xl
          font-bold text-base sm:text-lg mt-8 shadow-xl
          hover:bg-green-800 hover:scale-105
          transition duration-300
          w-full sm:w-auto"
        >
          Register Your NGO
          <FaArrowRight />
        </Link>

      </div>

    </div>
  );
};

export default ForNGOs;
