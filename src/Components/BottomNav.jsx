import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BottomNav = ({ hamburgerOpen, setHamburgerOpen }) => {
    const navigate = useNavigate();


  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#0a448b] to-[#0e86bdcf] text-white flex justify-around items-center p-3 z-50">
      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className="flex flex-col items-center text-gray-100 hover:text-gray-300"
      >
        <FiHome size={24} />

      </button>

      {/* Hamburger Button */}
      <button
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
        className="flex flex-col items-center text-gray-100 hover:text-gray-300"
      >
         <FiMenu size={24} />
    
      </button>
    </div>
  );
};

export default BottomNav;
