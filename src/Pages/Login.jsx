import React, { useState } from "react";
import LoginForm from "../Components/forms/LoginForm";
import SignupForm from "../Components/forms/SignupForm";
import Logo from "../assets/renroLogo.png";

function LoginPage({ setIsTokenValid }) {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden ">
      {/* Left Side with Background Image */}
      <div
        className="hidden md:block bg-cover bg-center h-full"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/blue-serum-gel-background-liquid-cosmetic-water_107791-31043.jpg?t=st=1742205637~exp=1742209237~hmac=2ef19b5b7a45ea35574e081be618240f780c293686df4a23936e77fbf29251f4&w=1480')",
        }}
      >
        <div className="flex flex-col justify-center items-center h-[70%]">
          <img src={Logo} alt="Rentro Logo" className="w-auto h-16 my-4 " />
          <h1 className="text-3xl font-bold  text-white my-4 px-8 text-center">
            {activeTab=="login" ?<span> <span className="text-[#0a448b]">Welcome back!</span> <br /> Your personalized experience is just one click away. <span className="text-[#0a448b]"> Log in now! </span> </span> : <span> <span className="text-[#0a448b]">Welcome!</span> <br /> Your personalized experience is just one step away. <span className="text-[#0a448b]"> Sign up now and get started! </span> </span> } 
          </h1>
        </div>
       
      </div>

      {/* Right Side with Form */}
      <div className="flex flex-col justify-center items-center p-6 h-fit">
        <img
          src={Logo}
          alt="Rentro Logo"
          className="w-auto h-8 my-4 md:hidden"
        />
        <h1 className="text-3xl font-bold text-left text-[#0e86bdcf] my-4 md:hidden block">
          Welcome
        </h1>
        <div className="w-full max-w-lg bg-gray-50 bg-opacity-50 rounded-lg overflow-hidden p-5 backdrop-blur-md">
          {/* Tab Buttons */}
          <div className="flex text-2xl">
            <button
              onClick={() => setActiveTab("login")}
              className={`w-1/2 py-3 text-center font-medium ${
                activeTab === "login"
                  ? "text-[#0e86bdcf] border-b-2 border-[#0e86bdcf]"
                  : "text-gray-300"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`w-1/2 py-3 text-center font-medium ${
                activeTab === "signup"
                  ? "text-[#0e86bdcf] border-b-2 border-[#0e86bdcf]"
                  : "text-gray-300"
              }`}
            >
              Signup
            </button>
          </div>

          {/* Form Sliding Section */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform:
                  activeTab === "login"
                    ? "translateX(0%)"
                    : "translateX(-100%)",
              }}
            >
              {/* Login Form */}
              <div className="w-full flex-shrink-0 mt-6">
                <LoginForm
                  setActiveTab={setActiveTab}
                  setIsTokenValid={setIsTokenValid}
                />
              </div>

              {/* Signup Form */}
              <div className="w-full flex-shrink-0 mt-6">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
