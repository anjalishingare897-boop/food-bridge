
import React, { useState } from "react";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaArrowRight,
  FaHandsHelping,
  FaUtensils,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HelpAgent = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 I'm the FoodBridge Help Agent. How can I help you?",
    },
  ]);

  const navigate = useNavigate();

  const quickQuestions = [
    "How can I donate food?",
    "How can I find an NGO?",
    "I am a hotel",
    "I am an NGO",
    "How does FoodBridge work?",
  ];

  const getResponse = (text) => {
    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("how") &&
      (lowerText.includes("work") || lowerText.includes("foodbridge"))
    ) {
      return {
        text: "FoodBridge connects food donors with NGOs so surplus food can reach people who need it.",
        path: "/how-it-works",
        button: "See How It Works",
      };
    }

    if (
      lowerText.includes("donate") ||
      lowerText.includes("surplus") ||
      lowerText.includes("extra food")
    ) {
      return {
        text: "You can donate your extra food through our Donate Food page. Fill in the details and submit your donation.",
        path: "/donate-food",
        button: "Donate Food",
      };
    }

    if (
      lowerText.includes("find") &&
      (lowerText.includes("ngo") ||
        lowerText.includes("location") ||
        lowerText.includes("near"))
    ) {
      return {
        text: "You can find NGOs near your location from our Find NGO page.",
        path: "/find-ngo",
        button: "Find NGO",
      };
    }

    if (
      lowerText.includes("hotel") ||
      lowerText.includes("restaurant")
    ) {
      return {
        text: "Hotels and restaurants can join FoodBridge and donate their surplus food to NGOs.",
        path: "/for-hotels",
        button: "For Hotels",
      };
    }

    if (
      lowerText.includes("ngo") ||
      lowerText.includes("organization")
    ) {
      return {
        text: "NGOs can connect with food donors and help distribute available food to people who need it.",
        path: "/for-ngos",
        button: "For NGOs",
      };
    }

    if (
      lowerText.includes("about") ||
      lowerText.includes("foodbridge")
    ) {
      return {
        text: "FoodBridge is a platform that connects food donors with NGOs to reduce food waste and help communities.",
        path: "/about",
        button: "About FoodBridge",
      };
    }

    if (
      lowerText.includes("login") ||
      lowerText.includes("sign in")
    ) {
      return {
        text: "You can log in to your FoodBridge account here.",
        path: "/login",
        button: "Login",
      };
    }

    if (
      lowerText.includes("signup") ||
      lowerText.includes("sign up") ||
      lowerText.includes("register")
    ) {
      return {
        text: "Create your FoodBridge account and start making a difference.",
        path: "/signup",
        button: "Create Account",
      };
    }

    if (
      lowerText.includes("contact") ||
      lowerText.includes("support") ||
      lowerText.includes("help")
    ) {
      return {
        text: "If you need more help, you can contact the FoodBridge team.",
        path: "/contact",
        button: "Contact Us",
      };
    }

    return {
      text: "I can help you with food donations, finding NGOs, hotels, NGOs, FoodBridge information, login and support. Try asking one of these!",
    };
  };

  const sendMessage = (text = message) => {
    const cleanMessage = text.trim();

    if (!cleanMessage) return;

    const userMessage = {
      type: "user",
      text: cleanMessage,
    };

    const response = getResponse(cleanMessage);

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        type: "bot",
        text: response.text,
        path: response.path,
        button: response.button,
      },
    ]);

    setMessage("");
  };

  const handleQuickQuestion = (question) => {
    sendMessage(question);
  };

  const handleNavigate = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* ================= FLOATING HELP BUTTON ================= */}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[100] group"
          aria-label="Open FoodBridge Help Agent"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-700 text-white flex items-center justify-center shadow-2xl border-4 border-white group-hover:bg-green-800 group-hover:scale-110 transition-all duration-300">
            <FaRobot className="text-2xl sm:text-3xl group-hover:rotate-6 transition-transform duration-300" />
          </div>

          <span className="absolute -top-2 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
        </button>
      )}

      {/* ================= CHAT WINDOW ================= */}

      {open && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] w-[calc(100%-2rem)] sm:w-[390px] max-w-[390px]">

          <div className="bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden">

            {/* ================= HEADER ================= */}

            <div className="bg-gradient-to-r from-green-800 to-green-600 px-5 py-4 text-white">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 bg-white/15 rounded-full flex items-center justify-center border border-white/20">
                    <FaRobot className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-base">
                      FoodBridge Assistant
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-green-100">
                      <span className="w-2 h-2 rounded-full bg-green-300"></span>
                      Online & ready to help
                    </div>
                  </div>

                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center transition"
                >
                  <FaTimes />
                </button>

              </div>

            </div>


            {/* ================= MESSAGES ================= */}

            <div className="h-[320px] sm:h-[350px] overflow-y-auto p-4 bg-gray-50">

              {messages.map((item, index) => (
                <div
                  key={index}
                  className={`flex mb-4 ${
                    item.type === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`max-w-[82%] ${
                      item.type === "user"
                        ? "bg-green-700 text-white rounded-2xl rounded-br-sm"
                        : "bg-white text-gray-700 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100"
                    } px-4 py-3`}
                  >

                    <p className="text-sm leading-relaxed">
                      {item.text}
                    </p>

                    {item.path && (
                      <button
                        onClick={() => handleNavigate(item.path)}
                        className="mt-3 inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-2 rounded-lg text-xs font-bold hover:bg-green-200 transition"
                      >
                        {item.button}
                        <FaArrowRight />
                      </button>
                    )}

                  </div>

                </div>
              ))}

            </div>


            {/* ================= QUICK QUESTIONS ================= */}

            <div className="px-4 pt-3 bg-white border-t border-gray-100">

              <p className="text-xs font-bold text-gray-500 mb-2">
                Quick Help
              </p>

              <div className="flex gap-2 overflow-x-auto pb-3">

                <button
                  onClick={() =>
                    handleQuickQuestion("How can I donate food?")
                  }
                  className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 border border-green-100 rounded-full text-xs font-semibold hover:bg-green-100 transition"
                >
                  <FaUtensils />
                  Donate Food
                </button>

                <button
                  onClick={() =>
                    handleQuickQuestion("How can I find an NGO?")
                  }
                  className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 border border-green-100 rounded-full text-xs font-semibold hover:bg-green-100 transition"
                >
                  <FaMapMarkerAlt />
                  Find NGO
                </button>

                <button
                  onClick={() =>
                    handleQuickQuestion("I am an NGO")
                  }
                  className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 border border-green-100 rounded-full text-xs font-semibold hover:bg-green-100 transition"
                >
                  <FaHandsHelping />
                  NGOs
                </button>

              </div>

            </div>


            {/* ================= INPUT ================= */}

            <div className="p-3 bg-white border-t border-gray-100">

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex items-center gap-2"
              >

                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 min-w-0 px-4 py-3 bg-gray-100 border border-transparent rounded-xl text-sm outline-none focus:bg-white focus:border-green-400 transition"
                />

                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="w-11 h-11 flex-shrink-0 rounded-xl bg-green-700 text-white flex items-center justify-center hover:bg-green-800 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 transition-all duration-200"
                >
                  <FaPaperPlane className="text-sm" />
                </button>

              </form>

              <p className="text-[10px] text-center text-gray-400 mt-2">
                FoodBridge Help Agent
              </p>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default HelpAgent;
