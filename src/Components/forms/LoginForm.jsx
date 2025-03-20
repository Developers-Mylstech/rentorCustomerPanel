import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ setActiveTab, setIsTokenValid }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });

    // Example: Add logic to validate login credentials
    if (email && password) {
      setIsTokenValid(true);
    } else {
      alert("Please enter valid email and password");
    }
  };

  // Handle Clear
  const handleClear = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4 md:h-[60%] px-4">
      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email ID
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
        onClick={()=>setIsTokenValid(true)}
          type="submit"
          className="bg-[#0e86bdcf] text-white px-4 py-2 rounded-md  transition duration-200"
        >
          Login
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="bg-white border border-[#0e86bdcf] text-[#0e86bdcf] px-4 py-2 rounded-md  transition duration-200"
        >
          Clear
        </button>
      </div>

      {/* Links */}
      <div className="flex justify-between text-sm text-[#0e86bdcf] mt-2">
        <button
          type="button"
          onClick={() => setActiveTab("signup")}
          className="hover:underline"
        >
          New User?
        </button>
        <button onClick={()=>navigate("/forgotpassword")}  className="hover:underline">
          Forgot Password
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
