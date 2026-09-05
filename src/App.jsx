import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HelpAgent from "./components/HelpAgent";
import AdminRoute from "./components/AdminRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import ForHotels from "./pages/ForHotels";
import ForNGOs from "./pages/ForNGOs";
import FindNGO from "./pages/FindNGO";
import DonateFood from "./pages/DonateFood";
import FoodRequests from "./pages/FoodRequests";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {

    return (

        <div className="min-h-screen bg-white">

            <Navbar />

            <main>

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                    <Route
                        path="/how-it-works"
                        element={<HowItWorks />}
                    />

                    <Route
                        path="/for-hotels"
                        element={<ForHotels />}
                    />

                    <Route
                        path="/for-ngos"
                        element={<ForNGOs />}
                    />

                    <Route
                        path="/find-ngo"
                        element={<FindNGO />}
                    />

                    <Route
                        path="/donate-food"
                        element={<DonateFood />}
                    />

                    <Route
                        path="/food-requests"
                        element={<FoodRequests />}
                    />

                    <Route
                        path="/contact"
                        element={<Contact />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/signup"
                        element={<Signup />}
                    />

                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/admin"
                        element={
                            <AdminRoute>
                                <AdminDashboard />
                            </AdminRoute>
                        }
                    />

                </Routes>

            </main>

            <Footer />

            <HelpAgent />

        </div>

    );

};

export default App;