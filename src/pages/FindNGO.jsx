
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaHandsHelping,
  FaMapMarkerAlt,
  FaPhone,
  FaSearch,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";

const FindNGO = () => {

  const [search, setSearch] = useState("");

  const ngos = [
    {
      name: "Helping Hands NGO",
      location: "Pune, Maharashtra",
      description:
        "Food distribution and community support for people and families who need assistance."
    },
    {
      name: "Hope Foundation",
      location: "Pune, Maharashtra",
      description:
        "Supports families and children by connecting donated food with local communities."
    },
    {
      name: "Care & Share",
      location: "Pune, Maharashtra",
      description:
        "Collects surplus food and helps distribute it through local community programs."
    }
  ];

  const filteredNGOs = ngos.filter((ngo) =>
    ngo.name.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToNGOs = () => {
    document.getElementById("ngo-list")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}

      <div className="bg-green-900 text-white
      px-5 sm:px-8 md:px-12 lg:px-20
      py-14 sm:py-16 lg:py-20">

        <div className="max-w-6xl mx-auto
        flex flex-col md:flex-row
        items-center justify-between
        gap-10 lg:gap-14">

          <div className="w-full md:w-3/5
          text-center md:text-left">

            <p className="text-green-300 font-semibold
            uppercase tracking-widest text-sm sm:text-base">
              Find Support Near You
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl
            font-bold mt-4 leading-tight">

              Find an NGO
              <br />
              Near You

            </h1>

            <p className="text-green-100 text-base sm:text-lg
            mt-6 leading-7 sm:leading-8
            max-w-xl mx-auto md:mx-0">

              Connect with NGOs that can collect donated food
              and help distribute it to people and communities
              who need support.

            </p>

            <button
              onClick={scrollToNGOs}
              className="bg-white text-green-900
              px-6 sm:px-7 py-3 rounded-xl
              font-bold mt-8 shadow-lg
              hover:bg-green-100 hover:scale-105
              transition duration-300
              flex items-center justify-center
              gap-3 w-full sm:w-auto
              mx-auto md:mx-0"
            >

              Find Nearby NGOs
              <FaArrowRight />

            </button>

          </div>


          <div className="w-full md:w-2/5
          flex justify-center">

            <div className="bg-green-800
            w-52 h-52 sm:w-64 sm:h-64
            md:w-72 md:h-72 rounded-full
            flex items-center justify-center
            shadow-2xl hover:scale-105
            transition duration-500">

              <FaHandsHelping
                className="text-[100px] sm:text-[125px]
                md:text-[150px] text-green-200"
              />

            </div>

          </div>

        </div>

      </div>


      {/* ================= SEARCH ================= */}

      <div className="px-5 sm:px-8 md:px-12 lg:px-20 -mt-6 sm:-mt-8">

        <div className="max-w-4xl mx-auto
        bg-white rounded-2xl shadow-xl
        p-4 sm:p-5
        flex flex-col md:flex-row gap-3 sm:gap-4">

          <div className="flex items-center gap-3
          border border-gray-200 rounded-xl
          px-4 sm:px-5 py-3 flex-1">

            <FaSearch className="text-green-700 shrink-0" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  scrollToNGOs();
                }
              }}
              placeholder="Search NGO by name..."
              className="outline-none w-full
              text-gray-600 text-sm sm:text-base"
            />

          </div>


          <button
            onClick={scrollToNGOs}
            className="bg-green-900 text-white
            px-6 sm:px-7 py-3 rounded-xl
            font-semibold hover:bg-green-800
            hover:scale-[1.02] sm:hover:scale-105
            transition duration-300
            flex items-center justify-center gap-2
            w-full md:w-auto"
          >

            <FaSearch className="md:hidden" />
            Search NGOs

          </button>

        </div>

      </div>


      {/* ================= INTRODUCTION ================= */}

      <div className="py-14 sm:py-16 lg:py-20
      px-5 sm:px-8 md:px-12 lg:px-20
      text-center">

        <p className="text-green-700 font-semibold
        uppercase tracking-widest text-sm">
          Our NGO Network
        </p>

        <h2 className="text-3xl sm:text-4xl
        font-bold text-green-950 mt-2">

          Connect Food With The Right People

        </h2>

        <p className="text-gray-600 text-base sm:text-lg
        max-w-3xl mx-auto mt-5
        leading-7 sm:leading-8">

          Find organizations that can help collect surplus food
          from hotels and restaurants and distribute it through
          their community support programs.

        </p>

      </div>


      {/* ================= NGO CARDS ================= */}

      <div
        id="ngo-list"
        className="bg-green-50
        py-14 sm:py-16 lg:py-20
        px-5 sm:px-8 md:px-12 lg:px-20"
      >

        <div className="text-center">

          <p className="text-green-700 font-semibold
          uppercase tracking-widest text-sm">
            Available NGOs
          </p>

          <h2 className="text-3xl sm:text-4xl
          font-bold text-green-950 mt-2">
            NGOs Near Pune
          </h2>

          <p className="text-gray-600 mt-4">
            Choose an NGO and connect with them for food donation.
          </p>

        </div>


        <div className="max-w-6xl mx-auto
        mt-10 sm:mt-14
        grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">

          {filteredNGOs.length > 0 ? (

            filteredNGOs.map((ngo, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl
                p-6 sm:p-8 shadow-md
                hover:-translate-y-2
                hover:shadow-2xl
                transition duration-500"
              >

                <div className="flex justify-between
                items-start gap-3">

                  <div className="bg-green-100
                  w-14 h-14 sm:w-16 sm:h-16
                  rounded-2xl flex items-center
                  justify-center shrink-0">

                    <FaHandsHelping
                      className="text-2xl sm:text-3xl
                      text-green-800"
                    />

                  </div>

                  <span className="bg-green-100
                  text-green-800 px-3 py-1
                  rounded-full text-xs sm:text-sm
                  font-semibold whitespace-nowrap">

                    Available

                  </span>

                </div>


                <h2 className="text-xl sm:text-2xl
                font-bold text-green-950 mt-6">

                  {ngo.name}

                </h2>


                <div className="flex items-start
                gap-2 text-gray-500 mt-3">

                  <FaMapMarkerAlt
                    className="text-green-700 mt-1 shrink-0"
                  />

                  <p className="text-sm sm:text-base">
                    {ngo.location}
                  </p>

                </div>


                <p className="text-gray-600 mt-4
                leading-7 text-sm sm:text-base">

                  {ngo.description}

                </p>


                <div className="flex items-start
                gap-2 mt-5 text-green-700">

                  <FaCheckCircle className="mt-1 shrink-0" />

                  <span className="text-sm font-semibold">
                    Food Collection Available
                  </span>

                </div>


                <Link
                  to="/contact"
                  className="w-full bg-green-900
                  text-white py-3 rounded-xl mt-6
                  font-semibold hover:bg-green-800
                  hover:scale-[1.02]
                  transition duration-300
                  flex items-center justify-center
                  gap-2"
                >

                  Contact NGO
                  <FaPhone />

                </Link>

              </div>

            ))

          ) : (

            <div className="col-span-full
            text-center py-10">

              <FaSearch
                className="text-5xl text-green-700 mx-auto"
              />

              <h3 className="text-2xl font-bold
              text-green-950 mt-5">

                No NGO Found

              </h3>

              <p className="text-gray-600 mt-2">

                Try searching with another NGO name.

              </p>

            </div>

          )}

        </div>

      </div>


      {/* ================= HOW IT HELPS ================= */}

      <div className="py-14 sm:py-16 lg:py-20
      px-5 sm:px-8 md:px-12 lg:px-20">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-green-700 font-semibold
            uppercase tracking-widest text-sm">

              Simple Connection

            </p>

            <h2 className="text-3xl sm:text-4xl
            font-bold text-green-950 mt-2">

              How Finding An NGO Helps

            </h2>

          </div>


          <div className="grid grid-cols-1
          md:grid-cols-3 gap-5 sm:gap-8 mt-10 sm:mt-14">


            {/* 01 */}

            <div className="text-center p-6 sm:p-8
            rounded-3xl bg-gray-50
            hover:bg-green-50
            hover:-translate-y-2
            transition duration-300
            shadow-sm hover:shadow-lg">

              <div className="bg-green-900 text-white
              w-14 h-14 sm:w-16 sm:h-16
              rounded-full flex items-center
              justify-center mx-auto
              text-xl sm:text-2xl font-bold">

                01

              </div>

              <h3 className="text-xl font-bold
              text-green-950 mt-5">

                Find An NGO

              </h3>

              <p className="text-gray-600 mt-3 leading-7">

                Find organizations near the food donation location.

              </p>

            </div>


            {/* 02 */}

            <div className="text-center p-6 sm:p-8
            rounded-3xl bg-gray-50
            hover:bg-green-50
            hover:-translate-y-2
            transition duration-300
            shadow-sm hover:shadow-lg">

              <div className="bg-green-900 text-white
              w-14 h-14 sm:w-16 sm:h-16
              rounded-full flex items-center
              justify-center mx-auto
              text-xl sm:text-2xl font-bold">

                02

              </div>

              <h3 className="text-xl font-bold
              text-green-950 mt-5">

                Contact & Coordinate

              </h3>

              <p className="text-gray-600 mt-3 leading-7">

                Connect with the NGO and coordinate food collection.

              </p>

            </div>


            {/* 03 */}

            <div className="text-center p-6 sm:p-8
            rounded-3xl bg-gray-50
            hover:bg-green-50
            hover:-translate-y-2
            transition duration-300
            shadow-sm hover:shadow-lg">

              <div className="bg-green-900 text-white
              w-14 h-14 sm:w-16 sm:h-16
              rounded-full flex items-center
              justify-center mx-auto
              text-xl sm:text-2xl font-bold">

                03

              </div>

              <h3 className="text-xl font-bold
              text-green-950 mt-5">

                Food Reaches People

              </h3>

              <p className="text-gray-600 mt-3 leading-7">

                Donated food can reach people through
                the NGO's community network.

              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= CTA ================= */}

      <div className="bg-green-900 text-white
      text-center py-14 sm:py-16 lg:py-20
      px-5 sm:px-8">

        <FaHandsHelping
          className="text-5xl sm:text-6xl
          text-green-200 mx-auto"
        />

        <h1 className="text-3xl sm:text-4xl
        md:text-5xl font-bold mt-6">

          Together, We Can Make A Difference

        </h1>

        <p className="text-green-100
        text-base sm:text-lg mt-5
        max-w-2xl mx-auto
        leading-7 sm:leading-8">

          Find an NGO, share extra food and help create
          a stronger and more caring community.

        </p>

        <button
          onClick={scrollToNGOs}
          className="bg-white text-green-900
          px-7 sm:px-9 py-4 rounded-xl
          font-bold text-base sm:text-lg
          mt-8 shadow-xl
          hover:bg-green-100 hover:scale-105
          transition duration-300
          w-full sm:w-auto"
        >

          Find An NGO

        </button>

      </div>

    </div>
  );
};

export default FindNGO;
