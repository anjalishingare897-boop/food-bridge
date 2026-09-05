
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHandsHelping,
  FaUtensils,
  FaUsers,
  FaHeart,
  FaArrowRight,
  FaCheckCircle,
  FaHotel,
  FaHandHoldingHeart
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/videos/food-donation.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 w-full">
          <div className="max-w-3xl text-white">

            <div className="inline-flex items-center gap-2 bg-green-600/90 px-4 py-2 rounded-full mb-6 shadow-lg">
              <FaHandsHelping />
              <span className="text-sm font-semibold">
                Together We Can Fight Food Waste
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Share Food.
              <span className="block text-green-400">
                Share Hope.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed mb-8">
              FoodBridge connects hotels, restaurants, donors and NGOs to
              make sure surplus food reaches people who need it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                to="/donate-food"
                className="group inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Donate Food
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/find-ngo"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/40 hover:bg-white hover:text-green-700 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300"
              >
                Find an NGO
                <FaUsers />
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* ================= IMPACT SECTION ================= */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold uppercase tracking-wider">
              Our Impact
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Small Actions Create Big Change
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every food donation helps reduce waste and brings hope to
              someone in need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl mb-5">
                <FaUtensils />
              </div>

              <h3 className="text-3xl font-bold text-green-700">
                10K+
              </h3>

              <p className="font-semibold text-gray-800 mt-2">
                Meals Donated
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Surplus food redirected to people instead of being wasted.
              </p>
            </div>


            <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl mb-5">
                <FaUsers />
              </div>

              <h3 className="text-3xl font-bold text-green-700">
                100+
              </h3>

              <p className="font-semibold text-gray-800 mt-2">
                NGO Partners
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Organizations working together to support communities.
              </p>
            </div>


            <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-3xl mb-5">
                <FaHeart />
              </div>

              <h3 className="text-3xl font-bold text-green-700">
                5K+
              </h3>

              <p className="font-semibold text-gray-800 mt-2">
                People Helped
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Helping communities access nutritious surplus food.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/food-help.jpg"
                alt="Food donation"
                className="w-full h-[350px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div>
              <p className="text-green-600 font-semibold uppercase tracking-wider">
                About FoodBridge
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Turning Surplus Food Into
                <span className="text-green-600"> Hope</span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                FoodBridge is a platform created to connect food donors
                with NGOs and communities that need support.
              </p>

              <p className="text-gray-600 leading-relaxed mb-7">
                Instead of allowing good food to go to waste, donors can
                share available food and NGOs can help distribute it to
                people in need.
              </p>

              <div className="space-y-4 mb-8">

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" />
                  <span className="font-medium">
                    Reduce food wastage
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" />
                  <span className="font-medium">
                    Support local communities
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-600" />
                  <span className="font-medium">
                    Connect donors with NGOs
                  </span>
                </div>

              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Learn More
                <FaArrowRight />
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold uppercase tracking-wider">
              Simple Process
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              How FoodBridge Works
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Making food donation simple, quick and meaningful.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-5">
                <FaHotel />
              </div>

              <span className="text-sm text-green-600 font-bold">
                STEP 01
              </span>

              <h3 className="text-xl font-bold mt-2 mb-3">
                Donate Surplus Food
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Hotels, restaurants and individuals can list their
                available surplus food.
              </p>
            </div>


            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-5">
                <FaUsers />
              </div>

              <span className="text-sm text-green-600 font-bold">
                STEP 02
              </span>

              <h3 className="text-xl font-bold mt-2 mb-3">
                NGO Receives Request
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Nearby NGOs can find suitable food donations and
                coordinate collection.
              </p>
            </div>


            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-5">
                <FaHandHoldingHeart />
              </div>

              <span className="text-sm text-green-600 font-bold">
                STEP 03
              </span>

              <h3 className="text-xl font-bold mt-2 mb-3">
                Food Reaches People
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Donated food reaches people and communities who need
                support.
              </p>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900 transition"
            >
              See Full Process
              <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>


      {/* ================= GET INVOLVED ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold uppercase tracking-wider">
              Get Involved
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Be Part of the Change
            </h2>
          </div>


          <div className="grid md:grid-cols-2 gap-8">

            <div className="group relative overflow-hidden rounded-3xl shadow-lg min-h-[350px]">

              <img
                src="/images/hotel-food.jpg"
                alt="Hotel food donation"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition"></div>

              <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end min-h-[350px] text-white">

                <FaHotel className="text-4xl text-green-400 mb-4" />

                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  For Hotels & Restaurants
                </h3>

                <p className="text-gray-200 mb-6">
                  Turn your surplus food into meaningful support for
                  your community.
                </p>

                <Link
                  to="/for-hotels"
                  className="inline-flex w-fit items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  Join as Donor
                  <FaArrowRight />
                </Link>

              </div>
            </div>


            <div className="group relative overflow-hidden rounded-3xl shadow-lg min-h-[350px]">

              <img
                src="/images/ngo-help.jpg"
                alt="NGO helping community"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition"></div>

              <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end min-h-[350px] text-white">

                <FaHandsHelping className="text-4xl text-green-400 mb-4" />

                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  For NGOs
                </h3>

                <p className="text-gray-200 mb-6">
                  Connect with food donors and help distribute food
                  to people in need.
                </p>

                <Link
                  to="/for-ngos"
                  className="inline-flex w-fit items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
                >
                  Join as NGO
                  <FaArrowRight />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= DONATE CTA IMAGE ================= */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="relative overflow-hidden rounded-3xl shadow-xl">

            <img
              src="/images/donate-food.jpg"
              alt="Donate food"
              className="w-full h-[400px] object-cover"
            />

            <div className="absolute inset-0 bg-black/55"></div>

            <div className="absolute inset-0 flex items-center justify-center text-center px-5">

              <div className="text-white max-w-2xl">

                <FaHeart className="text-5xl text-green-400 mx-auto mb-5" />

                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Your Extra Food Can Make a Difference
                </h2>

                <p className="text-gray-200 text-lg mb-7">
                  Don't let good food go to waste. Donate it and help
                  someone in your community.
                </p>

                <Link
                  to="/donate-food"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Donate Food Now
                  <FaArrowRight />
                </Link>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= COMMUNITY SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-green-600 font-semibold uppercase tracking-wider">
                Stronger Together
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Building a Community
                <span className="text-green-600"> Without Waste</span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-7">
                When donors, NGOs and communities work together,
                surplus food can become a valuable resource instead
                of waste.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">

                <div className="p-5 bg-green-50 rounded-2xl hover:bg-green-100 transition">
                  <FaUtensils className="text-2xl text-green-600 mb-3" />

                  <h3 className="font-bold">
                    Less Food Waste
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    Give surplus food a meaningful purpose.
                  </p>
                </div>

                <div className="p-5 bg-green-50 rounded-2xl hover:bg-green-100 transition">
                  <FaHeart className="text-2xl text-green-600 mb-3" />

                  <h3 className="font-bold">
                    More Helping Hands
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    Connect people who want to help.
                  </p>
                </div>

              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Get Involved
                <FaArrowRight />
              </Link>

            </div>


            <div className="overflow-hidden rounded-3xl shadow-xl">

              <img
                src="/images/community-food.jpg"
                alt="Community food support"
                className="w-full h-[350px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />

            </div>

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <img
          src="/images/food-table.jpg"
          alt="Food sharing"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-green-900/75"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white">

          <FaHandsHelping className="text-5xl text-green-300 mx-auto mb-6" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Be Someone's Reason to Smile
          </h2>

          <p className="text-lg text-green-50 max-w-2xl mx-auto mb-8">
            One donation can make a difference. Join FoodBridge and
            help create a world where good food reaches good hands.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/donate-food"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 hover:bg-green-50 px-7 py-3.5 rounded-xl font-bold shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Donate Food
              <FaArrowRight />
            </Link>

            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-green-700 px-7 py-3.5 rounded-xl font-bold transition-all duration-300"
            >
              Join FoodBridge
              <FaUsers />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
