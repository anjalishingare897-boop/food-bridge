import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaHandsHelping,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Hotels", path: "/for-hotels" },
    { name: "NGOs", path: "/for-ngos" },
    { name: "Find NGO", path: "/find-ngo" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact", path: "/contact" }
  ];

  // Get latest user information
  useEffect(() => {

    const updateUser = () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    updateUser();

    window.addEventListener("storage", updateUser);
    window.addEventListener("userUpdated", updateUser);

    return () => {
      window.removeEventListener("storage", updateUser);
      window.removeEventListener("userUpdated", updateUser);
    };

  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    closeMenu();

    window.location.href = "/";
  };

  return (

    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group"
          >

            <div className="w-11 h-11 rounded-full bg-green-600 flex items-center justify-center text-white shadow-md group-hover:bg-green-700 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">

              <FaHandsHelping className="text-xl" />

            </div>

            <div>

              <h1 className="text-xl sm:text-2xl font-bold text-green-800 group-hover:text-green-600 transition-colors duration-300">
                FoodBridge
              </h1>

              <p className="hidden sm:block text-xs text-gray-500">
                Food • Hope • Humanity
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-1">

            {navLinks.map((link) => (

              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  isActive(link.path)
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {link.name}
              </Link>

            ))}

          </div>

          {/* Desktop Buttons */}

          <div className="hidden lg:flex items-center gap-3">

            {user ? (

              <>

                <Link
                  to={user.role === "admin" ? "/admin" : "/dashboard"}
                  className="flex items-center gap-2 px-4 py-2 text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300"
                >

                  <FaUserCircle className="text-lg" />

                  <span>{user.name}</span>

                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-600 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >

                  <FaSignOutAlt />

                  Logout

                </button>

              </>

            ) : (

              <>

                <Link
                  to="/login"
                  className="px-4 py-2 text-green-700 font-semibold rounded-lg hover:bg-green-50 hover:text-green-800 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="group flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >

                  Sign Up

                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />

                </Link>

              </>

            )}

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-green-700 bg-green-50 hover:bg-green-100 hover:scale-105 active:scale-95 transition-all duration-300"
          >

            {menuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}

          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (

          <div className="lg:hidden border-t border-gray-100 py-4">

            <div className="flex flex-col gap-1">

              {navLinks.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:translate-x-1 ${
                    isActive(link.path)
                      ? "bg-green-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {link.name}
                </Link>

              ))}

            </div>

            <div className="flex gap-3 mt-4 px-2">

              {user ? (

                <>

                  <Link
                    to={user.role === "admin" ? "/admin" : "/dashboard"}
                    onClick={closeMenu}
                    className="flex-1 flex items-center justify-center gap-2 text-center px-4 py-2.5 border border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
                  >

                    <FaUserCircle />

                    {user.name}

                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-300"
                  >

                    <FaSignOutAlt />

                    Logout

                  </button>

                </>

              ) : (

                <>

                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="flex-1 text-center px-4 py-2.5 border border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    className="flex-1 text-center px-4 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
                  >
                    Sign Up
                  </Link>

                </>

              )}

            </div>

          </div>

        )}

      </div>

    </nav>
  );
};

export default Navbar;