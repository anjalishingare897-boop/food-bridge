
import React from "react";
import { Link } from "react-router-dom";

import {
  FaHotel,
  FaBell,
  FaTruck,
  FaHeart,
  FaCheckCircle,
  FaUtensils,
  FaUsers,
  FaArrowRight
} from "react-icons/fa";

const HowItWorks = () => {

  const steps = [
    {
      number: "01",
      icon: <FaHotel />,
      title: "Hotel Informs",
      heading: "Step 1 — Share Your Extra Food",
      text: "Hotels and restaurants enter details about their available extra food through the platform.",
      point: "Share food availability",
      button: "Inform Food",
      link: "/donate-food"
    },
    {
      number: "02",
      icon: <FaBell />,
      title: "NGO Gets Notification",
      heading: "Step 2 — NGOs Are Notified",
      text: "Nearby NGOs receive information about the available food and can check the donation details.",
      point: "Quick notification",
      button: "Find NGO",
      link: "/find-ngo"
    },
    {
      number: "03",
      icon: <FaTruck />,
      title: "NGO Collects",
      heading: "Step 3 — Food Is Collected",
      text: "The NGO accepts the donation and coordinates with the hotel or restaurant for collection.",
      point: "Easy collection process",
      button: "Contact Us",
      link: "/contact"
    },
    {
      number: "04",
      icon: <FaHeart />,
      title: "People Receive",
      heading: "Step 4 — Make an Impact",
      text: "The collected food is distributed through the NGO to people and communities who need support.",
      point: "Food reaches people",
      button: "Our Mission",
      link: "/about"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="bg-green-900 text-white
      text-center px-5 sm:px-8
      py-16 sm:py-20 lg:py-24">

        <div className="max-w-4xl mx-auto">

          <div className="inline-flex items-center
          gap-2 bg-green-800
          px-4 py-2 rounded-full
          text-green-200 text-xs sm:text-sm
          font-semibold tracking-wide">

            <span className="w-2 h-2 bg-green-300 rounded-full"></span>
            SIMPLE • EASY • MEANINGFUL

          </div>

          <h1 className="text-4xl sm:text-5xl
          md:text-6xl lg:text-7xl
          font-bold mt-6 leading-tight">

            How It Works

          </h1>

          <p className="text-green-100
          text-base sm:text-lg md:text-xl
          mt-5 max-w-3xl mx-auto
          leading-7 sm:leading-8">

            A simple way to connect hotels, restaurants
            and NGOs so that extra food can reach people
            who need it.

          </p>


          {/* HERO BUTTONS */}

          <div className="flex flex-col sm:flex-row
          justify-center gap-3 sm:gap-4
          mt-8 max-w-md sm:max-w-none mx-auto">

            <Link
              to="/donate-food"
              className="w-full sm:w-auto
              bg-white text-green-900
              px-7 py-3.5 rounded-full
              font-bold shadow-lg
              hover:bg-green-100
              hover:scale-105
              active:scale-95
              transition duration-300
              inline-flex items-center
              justify-center gap-2"
            >

              Save Food
              <FaArrowRight className="text-sm" />

            </Link>


            <Link
              to="/find-ngo"
              className="w-full sm:w-auto
              border border-green-300
              text-white px-7 py-3.5
              rounded-full font-bold
              hover:bg-green-800
              hover:border-green-200
              hover:scale-105
              active:scale-95
              transition duration-300
              inline-flex items-center
              justify-center gap-2"
            >

              Help People
              <FaHeart className="text-sm" />

            </Link>

          </div>

        </div>

      </section>


      {/* ================= INTRODUCTION ================= */}

      <section className="py-14 sm:py-16 lg:py-20
      px-5 sm:px-8 lg:px-20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-green-700
          font-bold uppercase
          tracking-widest text-xs sm:text-sm">

            Our Process

          </p>

          <h2 className="text-3xl sm:text-4xl
          lg:text-5xl font-bold
          text-green-950 mt-3 leading-tight">

            From Extra Food to Helping Hands

          </h2>

          <p className="text-gray-600
          max-w-3xl mx-auto mt-5
          text-base sm:text-lg
          leading-7 sm:leading-8">

            Our platform makes food donation simple.
            Hotels and restaurants can share information
            about their extra food, while nearby NGOs can
            respond, collect and distribute it to people
            who need support.

          </p>

        </div>

      </section>


      {/* ================= STEPS ================= */}

      <section className="bg-green-50
      py-14 sm:py-20 lg:py-24
      px-5 sm:px-8 lg:px-20">

        {/* Section Heading */}

        <div className="text-center mb-12 sm:mb-16">

          <p className="text-green-700
          font-bold uppercase
          tracking-widest text-xs sm:text-sm">

            Four Easy Steps

          </p>

          <h2 className="text-3xl sm:text-4xl
          lg:text-5xl font-bold
          text-green-950 mt-3">

            How Food Donation Works

          </h2>

        </div>


        {/* STEP CARDS */}

        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

          {steps.map((step, index) => (

            <div
              key={step.number}
              className={`flex flex-col ${
                index % 2 !== 0
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              }
              items-center gap-8 lg:gap-14`}
            >

              {/* CARD */}

              <div className="w-full lg:w-1/2">

                <div className="bg-white
                rounded-3xl
                p-6 sm:p-8 lg:p-10
                shadow-lg
                border border-green-100
                hover:-translate-y-2
                hover:shadow-2xl
                transition duration-500">

                  {/* ICON + NUMBER */}

                  <div className="flex items-center
                  justify-between">

                    <div className="bg-green-100
                    w-16 h-16 sm:w-20 sm:h-20
                    rounded-2xl
                    flex items-center justify-center
                    hover:bg-green-200
                    hover:scale-110
                    transition duration-300">

                      <span className="text-3xl sm:text-4xl
                      text-green-800">

                        {step.icon}

                      </span>

                    </div>


                    <span className="text-5xl sm:text-6xl
                    font-bold text-green-100">

                      {step.number}

                    </span>

                  </div>


                  {/* TITLE */}

                  <h2 className="text-2xl sm:text-3xl
                  font-bold text-green-950
                  mt-6 sm:mt-7">

                    {step.title}

                  </h2>


                  {/* DESCRIPTION */}

                  <p className="text-gray-600
                  mt-3 sm:mt-4
                  text-base sm:text-lg
                  leading-7 sm:leading-8">

                    {step.text}

                  </p>


                  {/* CHECK */}

                  <div className="flex items-center
                  gap-2 mt-5
                  text-green-700
                  font-medium">

                    <FaCheckCircle />

                    <span className="text-sm sm:text-base">
                      {step.point}
                    </span>

                  </div>


                  {/* BUTTON */}

                  <Link
                    to={step.link}
                    className="inline-flex items-center
                    gap-2 mt-6
                    text-green-800
                    font-bold
                    hover:gap-4
                    hover:text-green-950
                    transition-all duration-300"
                  >

                    {step.button}

                    <FaArrowRight />

                  </Link>

                </div>

              </div>


              {/* TEXT SIDE */}

              <div className="w-full lg:w-1/2">

                <div className="lg:px-4">

                  <span className="text-green-700
                  font-bold text-sm">

                    {step.number} / 04

                  </span>

                  <h3 className="text-2xl sm:text-3xl
                  font-bold text-green-900
                  mt-2">

                    {step.heading}

                  </h3>

                  <p className="text-gray-600
                  mt-4
                  text-base sm:text-lg
                  leading-7 sm:leading-8">

                    {index === 0 &&
                      "Instead of throwing away safe and usable extra food, the hotel can quickly provide information such as food type, quantity and collection details."
                    }

                    {index === 1 &&
                      "Once the donation is submitted, nearby NGOs can see the available food and decide whether they can arrange collection."
                    }

                    {index === 2 &&
                      "After accepting the donation, the NGO arranges collection from the donor and takes responsibility for moving the food towards distribution."
                    }

                    {index === 3 &&
                      "What could have become waste can instead become a meaningful contribution to someone in need. Every donation can make a difference."
                    }

                  </p>


                  {/* SMALL LINE */}

                  <div className="w-20 h-1
                  bg-green-700 rounded-full
                  mt-6">
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= WHY DONATE ================= */}

      <section className="py-16 sm:py-20 lg:py-24
      px-5 sm:px-8 lg:px-20">

        <div className="text-center">

          <p className="text-green-700
          font-bold uppercase
          tracking-widest text-xs sm:text-sm">

            Why Donate?

          </p>

          <h2 className="text-3xl sm:text-4xl
          lg:text-5xl font-bold
          text-green-950 mt-3">

            Small Action, Big Difference

          </h2>

          <p className="text-gray-600
          max-w-2xl mx-auto mt-4
          text-base sm:text-lg
          leading-7">

            Food donation is not only about sharing food.
            It is about building a community that cares.

          </p>

        </div>


        <div className="grid grid-cols-1
        sm:grid-cols-2 lg:grid-cols-3
        gap-6 sm:gap-8
        max-w-6xl mx-auto mt-10 sm:mt-14">


          {/* SAVE FOOD */}

          <div className="group border border-gray-100
          rounded-3xl p-7 sm:p-8
          text-center shadow-md
          hover:shadow-2xl
          hover:-translate-y-3
          transition duration-500">

            <div className="bg-green-100
            w-16 h-16 sm:w-20 sm:h-20
            rounded-full
            flex items-center justify-center
            mx-auto
            group-hover:bg-green-900
            transition duration-500">

              <FaUtensils
                className="text-2xl sm:text-3xl
                text-green-800
                group-hover:text-white
                transition duration-500"
              />

            </div>

            <h3 className="text-xl sm:text-2xl
            font-bold text-green-950 mt-5">

              Save Food

            </h3>

            <p className="text-gray-600
            mt-3 leading-7 text-sm sm:text-base">

              Help reduce unnecessary food waste
              by giving extra food a meaningful purpose.

            </p>

          </div>


          {/* COMMUNITY */}

          <div className="group border border-gray-100
          rounded-3xl p-7 sm:p-8
          text-center shadow-md
          hover:shadow-2xl
          hover:-translate-y-3
          transition duration-500">

            <div className="bg-green-100
            w-16 h-16 sm:w-20 sm:h-20
            rounded-full
            flex items-center justify-center
            mx-auto
            group-hover:bg-green-900
            transition duration-500">

              <FaUsers
                className="text-2xl sm:text-3xl
                text-green-800
                group-hover:text-white
                transition duration-500"
              />

            </div>

            <h3 className="text-xl sm:text-2xl
            font-bold text-green-950 mt-5">

              Build Community

            </h3>

            <p className="text-gray-600
            mt-3 leading-7 text-sm sm:text-base">

              Connect hotels, restaurants, NGOs
              and communities to work together.

            </p>

          </div>


          {/* IMPACT */}

          <div className="group border border-gray-100
          rounded-3xl p-7 sm:p-8
          text-center shadow-md
          hover:shadow-2xl
          hover:-translate-y-3
          transition duration-500">

            <div className="bg-green-100
            w-16 h-16 sm:w-20 sm:h-20
            rounded-full
            flex items-center justify-center
            mx-auto
            group-hover:bg-green-900
            transition duration-500">

              <FaHeart
                className="text-2xl sm:text-3xl
                text-green-800
                group-hover:text-white
                transition duration-500"
              />

            </div>

            <h3 className="text-xl sm:text-2xl
            font-bold text-green-950 mt-5">

              Create Impact

            </h3>

            <p className="text-gray-600
            mt-3 leading-7 text-sm sm:text-base">

              Turn surplus food into an opportunity
              to support people in the community.

            </p>

          </div>

        </div>

      </section>


      {/* ================= SIMPLE FLOW ================= */}

      <section className="bg-gray-50
      py-16 sm:py-20 lg:py-24
      px-5 sm:px-8">

        <div className="text-center">

          <p className="text-green-700
          font-bold uppercase
          tracking-widest text-xs sm:text-sm">

            At A Glance

          </p>

          <h2 className="text-3xl sm:text-4xl
          lg:text-5xl font-bold
          text-green-950 mt-3">

            One Simple Flow

          </h2>

        </div>


        {/* FLOW */}

        <div className="max-w-5xl mx-auto
        mt-12 sm:mt-14
        grid grid-cols-2
        lg:flex lg:flex-row
        items-center justify-between
        gap-8 lg:gap-5">


          {/* DONOR */}

          <div className="text-center">

            <div className="bg-green-900
            text-white
            w-16 h-16 sm:w-20 sm:h-20
            rounded-full
            flex items-center justify-center
            mx-auto shadow-lg
            hover:scale-110
            hover:shadow-xl
            transition duration-300">

              <FaHotel className="text-2xl sm:text-3xl" />

            </div>

            <h3 className="font-bold
            text-green-950 mt-4
            text-sm sm:text-base">

              Donor

            </h3>

          </div>


          <FaArrowRight
            className="hidden lg:block
            text-2xl text-green-700"
          />


          {/* NOTIFICATION */}

          <div className="text-center">

            <div className="bg-green-900
            text-white
            w-16 h-16 sm:w-20 sm:h-20
            rounded-full
            flex items-center justify-center
            mx-auto shadow-lg
            hover:scale-110
            hover:shadow-xl
            transition duration-300">

              <FaBell className="text-2xl sm:text-3xl" />

            </div>

            <h3 className="font-bold
            text-green-950 mt-4
            text-sm sm:text-base">

              Notification

            </h3>

          </div>


          <FaArrowRight
            className="hidden lg:block
            text-2xl text-green-700"
          />


          {/* COLLECTION */}

          <div className="text-center">

            <div className="bg-green-900
            text-white
            w-16 h-16 sm:w-20 sm:h-20
            rounded-full
            flex items-center justify-center
            mx-auto shadow-lg
            hover:scale-110
            hover:shadow-xl
            transition duration-300">

              <FaTruck className="text-2xl sm:text-3xl" />

            </div>

            <h3 className="font-bold
            text-green-950 mt-4
            text-sm sm:text-base">

              Collection

            </h3>

          </div>


          <FaArrowRight
            className="hidden lg:block
            text-2xl text-green-700"
          />


          {/* DISTRIBUTION */}

          <div className="text-center">

            <div className="bg-green-900
            text-white
            w-16 h-16 sm:w-20 sm:h-20
            rounded-full
            flex items-center justify-center
            mx-auto shadow-lg
            hover:scale-110
            hover:shadow-xl
            transition duration-300">

              <FaHeart className="text-2xl sm:text-3xl" />

            </div>

            <h3 className="font-bold
            text-green-950 mt-4
            text-sm sm:text-base">

              Distribution

            </h3>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="bg-green-900
      text-white text-center
      py-16 sm:py-20 lg:py-24
      px-5 sm:px-8">

        <div className="max-w-3xl mx-auto">

          <div className="bg-green-800
          w-16 h-16 sm:w-20 sm:h-20
          rounded-full
          flex items-center justify-center
          mx-auto
          hover:scale-110
          transition duration-500">

            <FaHeart
              className="text-3xl sm:text-4xl
              text-green-300"
            />

          </div>


          <h1 className="text-3xl sm:text-4xl
          md:text-5xl
          font-bold mt-6 leading-tight">

            Your Extra Food Can Help Someone

          </h1>


          <p className="text-green-100
          text-base sm:text-lg
          mt-5 leading-7 sm:leading-8">

            Don't let good food go to waste.
            Join our community and take a simple
            step towards creating a better future.

          </p>


          <div className="flex flex-col sm:flex-row
          justify-center gap-3 sm:gap-4
          mt-8 max-w-md sm:max-w-none mx-auto">

            <Link
              to="/donate-food"
              className="w-full sm:w-auto
              inline-flex items-center
              justify-center gap-3
              bg-white text-green-900
              px-8 py-4 rounded-full
              font-bold text-base sm:text-lg
              hover:bg-green-100
              hover:scale-105
              active:scale-95
              transition duration-300
              shadow-xl"
            >

              Start Donating

              <FaArrowRight />

            </Link>


            <Link
              to="/find-ngo"
              className="w-full sm:w-auto
              inline-flex items-center
              justify-center gap-3
              border border-green-300
              px-8 py-4 rounded-full
              font-bold text-base sm:text-lg
              hover:bg-green-800
              hover:scale-105
              active:scale-95
              transition duration-300"
            >

              Find NGO

              <FaUsers />

            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default HowItWorks;
