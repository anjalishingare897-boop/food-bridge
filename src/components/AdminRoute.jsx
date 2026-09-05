import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {

  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  let user = null;

  try {
    user = storedUser
      ? JSON.parse(storedUser)
      : null;
  } catch {
    user = null;
  }

  if (!token || !user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (user.role !== "admin") {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
};

export default AdminRoute;