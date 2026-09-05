import React from "react";
import {
  FaHeart,
  FaLeaf,
  FaUsers,
  FaHandHoldingHeart,
  FaUtensils,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* Top Section */}
      <div className="bg-green-900 text-white text-center py-14 sm:py-16 md:py-20 px-5">

        <p className="text-green-200 uppercase tracking-widest font-semibold text-sm sm:text-base">
          Who We Are
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3">
          About Us
        </h1>

        <p className="text-green-100 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-7">
          We believe that good food should never go to waste
          when there are people who need it.
        </p>

      </div>


      {/* Who We Are Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-14 sm:py-16 md:py-20 gap-12 lg:gap-16">

        {/* Image */}
        <div className="w-full lg:w-1/2">

          <div className="relative max-w-xl mx-auto">

            <img
              src="/images/about.png"
              alt="Food donation"
              className="h-64 sm:h-80 md:h-96 w-full object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
            />

            {/* Small Floating Card */}
            <div
              className="absolute -bottom-5 right-3 sm:-right-5 bg-green-900 text-white
              rounded-xl sm:rounded-2xl px-4 sm:px-7 py-4 sm:py-5 shadow-xl"
            >

              <FaHandHoldingHeart className="text-2xl sm:text-3xl mb-2" />

              <h3 className="font-bold text-sm sm:text-lg">
                Share • Care • Save
              </h3>

              <p className="text-green-200 text-xs sm:text-sm">
                Together for a better future
              </p>

            </div>

          </div>

        </div>


        {/* Content */}
        <div className="w-full lg:w-1/2">

          <p className="text-green-700 font-semibold uppercase tracking-wide text-sm sm:text-base">
            Our Story
          </p>

          <h1 className="text-green-950 text-3xl sm:text-4xl md:text-5xl font-bold mt-2 leading-tight">
            Turning Extra Food Into Hope
          </h1>

          <div className="w-20 h-1 bg-green-700 mt-5 rounded-full"></div>

          <p className="text-gray-600 text-base sm:text-lg mt-6 leading-7 sm:leading-8">
            Our platform connects hotels and restaurants with
            NGOs so that surplus food can reach people who
            genuinely need it.
          </p>

          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7 sm:leading-8">
            Hotels and restaurants can share information about
            extra food through our platform. Nearby NGOs can
            then coordinate collection and distribution.
          </p>

          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7 sm:leading-8">
            Our vision is to build a community where sharing
            food becomes easier, reducing waste while creating
            a positive impact on people's lives.
          </p>


          {/* Small Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mt-8">

            {/* Save Food */}
            <div className="flex items-center gap-3">

              <div className="bg-green-100 p-3 rounded-full shrink-0">
                <FaUtensils className="text-xl text-green-800" />
              </div>

              <div>
                <h3 className="font-bold text-green-950">
                  Save Food
                </h3>

                <p className="text-gray-500 text-sm">
                  Reduce surplus waste
                </p>
              </div>

            </div>


            {/* Help Others */}
            <div className="flex items-center gap-3">

              <div className="bg-green-100 p-3 rounded-full shrink-0">
                <FaHeart className="text-xl text-green-800" />
              </div>

              <div>
                <h3 className="font-bold text-green-950">
                  Help Others
                </h3>

                <p className="text-gray-500 text-sm">
                  Share with those in need
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Mission Section */}
      <div className="bg-gray-50 py-14 sm:py-16 md:py-20 px-5 sm:px-8">

        {/* Heading */}
        <div className="text-center">

          <p className="text-green-700 font-semibold uppercase tracking-widest text-sm sm:text-base">
            What We Stand For
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-950 mt-2">
            Our Mission
          </h1>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Three simple goals guide everything we do.
          </p>

        </div>


        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mt-10 sm:mt-12">

          {/* Card 1 */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md
            border border-gray-100 hover:-translate-y-3 hover:shadow-2xl
            transition duration-500"
          >

            <div className="flex justify-between items-start">

              <div
                className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
                flex items-center justify-center"
              >
                <FaHeart className="text-2xl sm:text-3xl text-green-800" />
              </div>

              <span className="text-4xl sm:text-5xl font-bold text-green-100">
                01
              </span>

            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-green-950 mt-6 sm:mt-7">
              Help People
            </h2>

            <p className="text-gray-600 mt-3 leading-7">
              Make nutritious surplus food available to people
              and communities who need support.
            </p>

          </div>


          {/* Card 2 */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md
            border border-gray-100 hover:-translate-y-3 hover:shadow-2xl
            transition duration-500"
          >

            <div className="flex justify-between items-start">

              <div
                className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
                flex items-center justify-center"
              >
                <FaLeaf className="text-2xl sm:text-3xl text-green-800" />
              </div>

              <span className="text-4xl sm:text-5xl font-bold text-green-100">
                02
              </span>

            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-green-950 mt-6 sm:mt-7">
              Reduce Waste
            </h2>

            <p className="text-gray-600 mt-3 leading-7">
              Encourage responsible food sharing and reduce
              unnecessary food waste.
            </p>

          </div>


          {/* Card 3 */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md
            border border-gray-100 hover:-translate-y-3 hover:shadow-2xl
            transition duration-500"
          >

            <div className="flex justify-between items-start">

              <div
                className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
                flex items-center justify-center"
              >
                <FaUsers className="text-2xl sm:text-3xl text-green-800" />
              </div>

              <span className="text-4xl sm:text-5xl font-bold text-green-100">
                03
              </span>

            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-green-950 mt-6 sm:mt-7">
              Connect People
            </h2>

            <p className="text-gray-600 mt-3 leading-7">
              Bring hotels, restaurants, NGOs and communities
              together for meaningful action.
            </p>

          </div>

        </div>


        {/* Bottom Banner */}
        <div
          className="max-w-7xl mx-auto mt-12 sm:mt-16 bg-green-900
          rounded-2xl sm:rounded-3xl px-6 sm:px-8 md:px-10 lg:px-12
          py-8 sm:py-10 flex flex-col md:flex-row
          items-center justify-between gap-8 shadow-xl"
        >

          <div className="text-center md:text-left">

            <p className="text-green-300 font-semibold uppercase tracking-widest text-sm sm:text-base">
              Our Vision
            </p>

            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight">
              A world where food is shared, not wasted.
            </h2>

            <p className="text-green-100 mt-3 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7">
              Every small contribution can create a meaningful
              difference. Together, we can build a more caring
              and sustainable community.
            </p>

          </div>

          <FaLeaf
            className="text-6xl sm:text-7xl text-green-200 opacity-80 shrink-0"
          />

        </div>

      </div>

    </div>
  );
};

export default About;