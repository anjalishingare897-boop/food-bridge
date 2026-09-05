
import React from "react";
import { Link } from "react-router-dom";

import {
  FaHandsHelping,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaClock
} from "react-icons/fa";

const Footer = () => {

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Find NGO", path: "/find-ngo" },
    { name: "Contact Us", path: "/contact" }
  ];

  const involveLinks = [
    { name: "For Hotels", path: "/for-hotels" },
    { name: "For NGOs", path: "/for-ngos" },
    { name: "Donate Food", path: "/donate-food" },
    { name: "Find Nearby NGO", path: "/find-ngo" },
    { name: "Create Account", path: "/signup" }
  ];

  return (
    <footer className="bg-green-950 text-white mt-16">

      {/* ================= MAIN FOOTER ================= */}

      <div className="max-w-7xl mx-auto
      px-5 sm:px-8 lg:px-10
      py-12 sm:py-14 lg:py-16">

        <div className="grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-10 lg:gap-12">


          {/* ================= BRAND ================= */}

          <div className="sm:col-span-2 lg:col-span-1">

            <Link
              to="/"
              className="flex items-center gap-3 w-fit group"
            >

              <div className="w-12 h-12
              bg-green-800
              rounded-2xl
              flex items-center justify-center
              shadow-lg
              group-hover:bg-green-700
              group-hover:scale-105
              transition duration-300">

                <FaHandsHelping
                  className="text-2xl text-green-200
                  group-hover:scale-110
                  transition duration-300"
                />

              </div>


              <div>

                <h1 className="text-2xl font-bold
                group-hover:text-green-200
                transition duration-300">

                  FoodBridge

                </h1>

                <p className="text-[10px]
                text-green-300
                tracking-widest">

                  SHARE • CARE • SAVE

                </p>

              </div>

            </Link>


            <p className="text-green-100
            leading-7 mt-5
            text-sm sm:text-base">

              Connecting hotels, restaurants, food donors
              and NGOs to reduce food waste and help
              communities in need.

            </p>


            {/* IMPACT BOX */}

            <div className="flex items-center gap-3
            mt-6
            bg-green-900
            border border-green-800
            rounded-2xl p-4
            hover:bg-green-800
            transition duration-300">

              <div className="w-10 h-10
              bg-green-800
              rounded-xl
              flex items-center justify-center
              shrink-0">

                <FaHeart className="text-green-300" />

              </div>

              <p className="text-sm text-green-100
              leading-6">

                Every meal shared can make
                a meaningful difference.

              </p>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>

            <h2 className="text-lg sm:text-xl
            font-bold mb-5">

              Quick Links

            </h2>


            <div className="w-10 h-1
            bg-green-500 rounded-full mb-5">
            </div>


            <div className="flex flex-col gap-3">

              {quickLinks.map((item) => (

                <Link
                  key={item.name}
                  to={item.path}
                  className="group
                  text-green-100
                  hover:text-white
                  transition duration-300
                  flex items-center gap-2"
                >

                  <span className="w-0
                  group-hover:w-2
                  h-0.5 bg-green-400
                  transition-all duration-300">
                  </span>

                  <span className="group-hover:translate-x-1
                  transition duration-300">

                    {item.name}

                  </span>

                </Link>

              ))}

            </div>

          </div>


          {/* ================= GET INVOLVED ================= */}

          <div>

            <h2 className="text-lg sm:text-xl
            font-bold mb-5">

              Get Involved

            </h2>


            <div className="w-10 h-1
            bg-green-500 rounded-full mb-5">
            </div>


            <div className="flex flex-col gap-3">

              {involveLinks.map((item) => (

                <Link
                  key={item.name}
                  to={item.path}
                  className="group
                  text-green-100
                  hover:text-white
                  flex items-center gap-2
                  transition duration-300"
                >

                  <span className="group-hover:translate-x-1
                  transition duration-300">

                    {item.name}

                  </span>

                  <FaArrowRight
                    className="text-xs
                    opacity-0
                    -translate-x-2
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition duration-300"
                  />

                </Link>

              ))}

            </div>

          </div>


          {/* ================= CONTACT ================= */}

          <div>

            <h2 className="text-lg sm:text-xl
            font-bold mb-5">

              Contact Us

            </h2>


            <div className="w-10 h-1
            bg-green-500 rounded-full mb-5">
            </div>


            <div className="flex flex-col gap-5">


              {/* PHONE */}

              <a
                href="tel:9876543210"
                className="flex items-start gap-3 group"
              >

                <div className="w-10 h-10
                bg-green-900
                rounded-xl
                flex items-center justify-center
                shrink-0
                group-hover:bg-green-700
                group-hover:scale-105
                transition duration-300">

                  <FaPhone className="text-green-300" />

                </div>


                <div>

                  <p className="text-xs
                  text-green-300 uppercase
                  tracking-wide">

                    Phone

                  </p>

                  <p className="text-green-100
                  group-hover:text-white
                  transition duration-300
                  text-sm sm:text-base">

                    9876543210

                  </p>

                </div>

              </a>


              {/* EMAIL */}

              <a
                href="mailto:foodbridge@gmail.com"
                className="flex items-start gap-3 group"
              >

                <div className="w-10 h-10
                bg-green-900
                rounded-xl
                flex items-center justify-center
                shrink-0
                group-hover:bg-green-700
                group-hover:scale-105
                transition duration-300">

                  <FaEnvelope className="text-green-300" />

                </div>


                <div className="min-w-0">

                  <p className="text-xs
                  text-green-300 uppercase
                  tracking-wide">

                    Email

                  </p>

                  <p className="text-green-100
                  group-hover:text-white
                  transition duration-300
                  text-sm break-all">

                    foodbridge@gmail.com

                  </p>

                </div>

              </a>


              {/* LOCATION */}

              <div className="flex items-start gap-3">

                <div className="w-10 h-10
                bg-green-900
                rounded-xl
                flex items-center justify-center
                shrink-0">

                  <FaMapMarkerAlt
                    className="text-green-300"
                  />

                </div>


                <div>

                  <p className="text-xs
                  text-green-300 uppercase
                  tracking-wide">

                    Location

                  </p>

                  <p className="text-green-100 text-sm sm:text-base">

                    Pune, Maharashtra

                  </p>

                </div>

              </div>


              {/* SUPPORT HOURS */}

              <div className="flex items-start gap-3">

                <div className="w-10 h-10
                bg-green-900
                rounded-xl
                flex items-center justify-center
                shrink-0">

                  <FaClock className="text-green-300" />

                </div>


                <div>

                  <p className="text-xs
                  text-green-300 uppercase
                  tracking-wide">

                    Support Hours

                  </p>

                  <p className="text-green-100 text-sm">

                    Mon - Sat : 9 AM - 6 PM

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= DONATE BANNER ================= */}

      <div className="px-5 sm:px-8 lg:px-10 pb-10">

        <div className="max-w-7xl mx-auto
        bg-green-800
        border border-green-700
        rounded-3xl
        px-6 sm:px-8 lg:px-10
        py-7 sm:py-8
        flex flex-col md:flex-row
        items-center
        justify-between
        gap-6
        text-center md:text-left
        shadow-lg
        hover:shadow-2xl
        transition duration-500">


          <div>

            <div className="flex items-center
            justify-center md:justify-start
            gap-2">

              <FaHeart className="text-green-300" />

              <h2 className="text-xl sm:text-2xl
              font-bold">

                Have Extra Food?

              </h2>

            </div>


            <p className="text-green-100
            mt-2 text-sm sm:text-base">

              Don't waste it. Let it help someone.

            </p>

          </div>


          <Link
            to="/donate-food"
            className="w-full md:w-auto
            bg-white text-green-900
            px-7 py-3.5
            rounded-xl
            font-bold
            hover:bg-green-100
            hover:scale-105
            active:scale-95
            transition duration-300
            flex items-center
            justify-center gap-2
            shadow-md"
          >

            Donate Food

            <FaArrowRight />

          </Link>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="border-t border-green-800">

        <div className="max-w-7xl mx-auto
        px-5 sm:px-8 lg:px-10
        py-5
        flex flex-col md:flex-row
        items-center
        justify-between
        gap-4">


          <p className="text-green-200
          text-xs sm:text-sm
          text-center md:text-left">

            © 2026 FoodBridge. All Rights Reserved.

          </p>


          <div className="flex items-center
          justify-center gap-5
          text-xs sm:text-sm">

            <Link
              to="/about"
              className="text-green-200
              hover:text-white
              hover:underline
              transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-green-200
              hover:text-white
              hover:underline
              transition"
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="text-green-200
              hover:text-white
              hover:underline
              transition"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
