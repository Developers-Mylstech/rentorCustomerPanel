import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = () => {
    if (file) alert(`Uploading: ${file.name}`);
  };

  const paymentData = [
    { code: "120202A0003", name: "AARYA Auto Repairs LLC", amount: "241.50" },
    { code: "120202A0002", name: "Aamir Auto repairing", amount: "2.50" },
    { code: "12020220001", name: "20 Plaza", amount: "0.00" },
    { code: "120202A0015", name: "Abdullah Saed Restaurant", amount: "0.00" },
    { code: "120202A0007", name: "Abdul Ahad Cherikkalen", amount: "0.00" },
    { code: "120202A0022", name: "AD Production", amount: "0.00" },
  ];

  const handleNavigate = (payment) => {
    navigate("/paynow", { state: { payment } });
  };

  const totalAmount = paymentData
    .reduce((sum, payment) => sum + parseFloat(payment.amount), 0)
    .toFixed(2);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-left text-gray-800">
          Dashboard
        </h1>

        {/* User Profile & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Profile Section */}
          <div className="bg-white  p-6 rounded-lg shadow border border-[#0e86bd7a] parent-hover ">
          <div className="flex flex-col items-center relative">
  {/* User Icon */}
  <div className="flex justify-center items-center rounded-full bg-blue-100 h-36   w-36 relative   ">
    <FaUser className="w-14 h-14 text-[#0a448b] icon-rotate" />
    <div className="mt-6 flex justify-center absolute top-[43%] -right-2 ">
  <label className="cursor-pointer">
    <input
      type="file"
      onChange={handleFileChange}
      className="hidden"
    />
    <div className="flex items-center justify-center w-8 h-8 p-1 rounded-full bg-[#0a448b]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white  "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v16m-8-8h16"
        />
      </svg>
    </div>
  </label>
</div>
  </div>
  <h2 className="text-xl font-semibold mt-4">SABEEL AHMED</h2>
</div>

{/* File Upload for Desktop */}
<div className="mt-20 flex justify-between items-center hidden ">
  <input
    type="file"
    onChange={handleFileChange}
    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#0e86bdcf] hover:file:bg-blue-100"
  />
  <button
    onClick={handleUpload}
    className="mt-2 bg-gradient-to-r from-[#0a448b] to-[#0e86bdcf] text-white py-1 px-4 rounded hover:bg-[#0e86bdcf] transition-transform duration-1000"
  >
    Upload
  </button>
</div>

{/* File Upload for Mobile */}

</div>

          {/* User Information */}
          <div className="bg-white md:p-6 p-3 rounded-lg shadow border border-[#0e86bd7a]  overflow-x-hidden">
            <h2 className="text-xl font-semibold mb-4 text-[#0e86bdcf]">User Information</h2>
            <div className="space-y-4">
              {[
                ["User Name", "sabeel"],
                ["Full Name", "SABEEL AHMED"],
                ["Email", "mdsabeel2003@gmail.com"],
                ["Phone", "123456789"],
                ["Mobile", "987654321"],
                ["Address", "Dubai"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between ">
                  <div className="text-gray-600 text-sm md:text-base">{label}</div>
                  <div className="w-[65%] md:w-[60%] ">
                  <div className="font-medium text-[#0a448b] text-sm md:text-base">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="mt-6 ">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>

          {/* ✅ Table for Large Screens */}
          <div className="hidden lg:block ">
            <table className="min-w-full bg-white border rounded-lg overflow-hidden shadow-md ">
              <thead>
                <tr className="bg-[#0e86bdcf] text-white uppercase text-sm leading-normal">
                  <th className="py-2 px-4 text-left">Code</th>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Due Amount</th>
                  <th className="py-2 px-4 text-left">Pay Now</th>
                </tr>
              </thead>
              <tbody className="">
                {paymentData.map((payment, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-2 px-4 text-gray-500">{payment.code}</td>
                    <td className="py-2 px-4 text-gray-500">{payment.name}</td>
                    <td className="py-2 px-4 text-gray-500">{payment.amount}</td>
                    <td
                      onClick={() => handleNavigate(payment)}
                      className="py-2 px-4 text-[#0e86bdcf] cursor-pointer hover:underline"
                    >
                      Pay Now
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-[#0e86bdcf] border  text-white uppercase text-sm leading-normal">
                  <th className="py-2 px-4 text-left">Total Due Amount</th>
                  <td colSpan="3" className="py-2 px-4  font-semibold text-center">
                    {totalAmount}
                  </td>
                </tr>
              
              
              </tfoot>
            </table>
          </div>

          {/* ✅ Cards for Medium and Small Screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
            {paymentData.map((payment, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md border border-[#0e86bd7a] "
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="font-semibold text-gray-600 text-sm">
                    {payment.name}
                  </div>
                  <div className="text-blue-400 text-sm">{payment.code}</div>
                </div>
                <div className="text-[#0e86bdcf] mb-2">
                  Amount Due:{" "}
                  <span className="font-semibold">{payment.amount}</span>
                </div>
               <div className="w-full flex justify-end">
               <button
                  onClick={() => handleNavigate(payment)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Pay Now
                </button>
               </div>
              </div>
            ))}
          </div>

          {/* ✅ Footer for Total */}
          <div className="mt-4 bg-gradient-to-r from-[#0a448b] to-[#0e86bdcf] text-white p-4 rounded-lg font-semibold md:hidden  border border-[#0e86bd7a] flex justify-between items-center px-10 ">
            <span>Total Payable Amount:</span> <span>{totalAmount}</span>
          </div>
        </div>
     
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recent Payment History */}
              <div className="bg-[#0e86bd1c] p-6 rounded-lg shadow   ">
                <h3 className="text-lg font-semibold mb-4">
                  <span className="text-[#0e86bdcf] cursor-pointer hover:underline">
                    Recent
                  </span>{" "}
                  Payment History
                </h3>
                <p>No recent payment history available.</p>
              </div>
      
              {/* Recent Service or SOS History */}
              <div className="bg-[#0e86bd1c] p-6 rounded-lg shadow border mb-10 md:mb-0 ">
                <h3 className="text-lg font-semibold mb-4">
                  <span className="text-[#0e86bdcf] cursor-pointer hover:underline">
                    Recent
                  </span>{" "}
                  Service or SOS History
                </h3>
                <p>No recent service or SOS history available.</p>
              </div>
            </div>
            </div>
            {/* <Footer/> */}
     
    </div>
  );
};

export default Dashboard;
