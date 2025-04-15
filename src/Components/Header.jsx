import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";
import logo from "../assets/renroLogo.png";
import BottomNav from "./BottomNav";

const Header = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const [sosOpen, setSosOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Top Header */}
      <header className="bg-gradient-to-t from-[#0a448b] to-[#0e86bdcf] text-white sticky top-0 left-0 right-0 px-8 rounded-b-xl z-50">
        <div className="p-4 flex justify-between items-center max-w-5xl mx-auto">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="text-lg font-semibold hover:cursor-pointer"
          >
            <img src={logo} className="md:h-8 h-6 w-auto" alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {/* Account Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="hover:text-gray-300 focus:outline-none"
              >
                Accounts ▼
              </button>
              {accountOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
                  <Link
                    to="/invoice"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setAccountOpen(false)}
                  >
                    Invoice
                  </Link>
                  <Link
                    to="/payment"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setAccountOpen(false)}
                  >
                    Payments
                  </Link>
                </div>
              )}
            </div>

            {/* Service Link */}
            <Link to="/service-history" className="hover:text-gray-300">
              Service
            </Link>

            {/* SOS Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSosOpen(!sosOpen)}
                className="hover:text-gray-300 focus:outline-none"
              >
                SOS ▼
              </button>
              {sosOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
                  <Link
                    to="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setSosOpen(false)}
                  >
                    New Request
                  </Link>
                  <Link
                    to="/soshistory"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setSosOpen(false)}
                  >
                    SOS History
                  </Link>
                </div>
              )}
            </div>

            {/* Logout */}
          </nav>
            <button
              onClick={() => navigate("login")}
              className="p-2 hover:text-[#0e86bdcf] font-bold hover:bg-gray-200 rounded-lg bg-transparent border text-gray-100 transition duration-300 hidden md:block"
            >
              Logout
            </button>

          {/* Hamburger Icon (visible on small screens) */}
          {/* <button
            className="md:hidden text-white"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            {hamburgerOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button> */}
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 w-full bg-[#0a448b] text-white h-[60%] z-40 transition-transform duration-300 ${
          hamburgerOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setHamburgerOpen(false)}>
            <FiX size={28} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="flex flex-col space-y-4 items-center mt-6">
          {/* Account Dropdown */}
          <div className="relative w-full max-w-xs">
            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="w-full text-center py-2"
            >
              Accounts ▼
            </button>
            {accountOpen && (
              <div className="mt-2 w-full text-white/50 flex flex-col items-center">
                <Link
                  to="/invoice"
                  className="block px-4 py-2 hover:text-white"
                  onClick={() => {
                    setAccountOpen(false);
                    setHamburgerOpen(false);
                  }}
                >
                  <IoMdArrowDropright className="inline" /> Invoice
                </Link>
                <Link
                  to="/payment"
                  className="block px-4 py-1 hover:text-white"
                  onClick={() => {
                    setAccountOpen(false);
                    setHamburgerOpen(false);
                  }}
                >
                  <IoMdArrowDropright className="inline" /> Payments
                </Link>
              </div>
            )}
          </div>

          {/* Service Link */}
          <Link
            to="/service-history"
            className="w-full text-center py-1"
            onClick={() => setHamburgerOpen(false)}
          >
            Service
          </Link>

          {/* SOS Dropdown */}
          <div className="relative w-full max-w-xs">
            <button
              onClick={() => setSosOpen(!sosOpen)}
              className="w-full text-center py-2"
            >
              SOS ▼
            </button>
            {sosOpen && (
              <div className="mt-2 w-full text-white/50 flex flex-col items-center">
                <Link
                  to="/"
                  className="block px-4 py-2 hover:text-white"
                  onClick={() => {
                    setSosOpen(false);
                    setHamburgerOpen(false);
                  }}
                >
                  <IoMdArrowDropright className="inline" /> New Request
                </Link>
                <Link
                  to="/soshistory"
                  className="block px-4 py-2 hover:text-white"
                  onClick={() => {
                    setSosOpen(false);
                    setHamburgerOpen(false);
                  }}
                >
                  <IoMdArrowDropright className="inline" /> SOS History
                </Link>
              </div>
            )}
          </div>

          {/* Logout */}
          <button
            className="p-2 hover:text-gray-800 font-bold hover:bg-gray-200 rounded-lg bg-transparent border text-gray-100 transition duration-300"
            onClick={() => navigate("login")}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Bottom Navigation (visible only on small screens) */}
      <div className="md:hidden">
        <BottomNav
          hamburgerOpen={hamburgerOpen}
          setHamburgerOpen={setHamburgerOpen}
        />
      </div>
    </>
  );
};

export default Header;
