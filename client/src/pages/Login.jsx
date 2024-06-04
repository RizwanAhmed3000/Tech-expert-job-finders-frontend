import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  if (user) {
    setTimeout(() => {
      navigate("/app");
    }, 500);
  }

  return (
    <div className="bg-theme-red h-screen flex justify-center items-center min-h-dvh">
      <LoginForm />
    </div>
  );
}

export default Login;
