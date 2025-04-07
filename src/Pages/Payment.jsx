import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const paymentData = [
    { code: "120202A0003", name: "AARYA Auto Repairs LLC", amount: "$241.50", action: "Pay Now" },
    { code: "120202A0002", name: "Aamir Auto repairing", amount: "$2.50", action: "Pay Now" },
  ];

  const navigate = useNavigate();

  const handleNavigate = (payment) => {
    navigate("/paynow", { state: { payment } });
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 my-4">Payment History</h1>

      {/* Desktop View - Table */}
      <div className="hidden md:block bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              {["Code", "Name", "Due Amount", "Pay Now"].map((header) => (
                <th key={header} className="py-3 px-4 border-b text-left text-[#0e86bdcf] bg-[#0e86bd34]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment) => (
              <tr key={payment.code} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b text-gray-600 text-sm font-semibold">{payment.code}</td>
                <td className="py-2 px-4 border-b text-gray-600 text-sm font-semibold">{payment.name}</td>
                <td className="py-2 px-4 border-b text-gray-600 text-sm font-semibold">{payment.amount}</td>
                <td className="py-2 px-4 border-b text-gray-600 text-sm font-semibold">
                  <button
                    onClick={() => handleNavigate(payment)}
                    className=""
                  >
                    <div className="text-[#0f4158cf]  hover:bg-[#0e86bd56]  bg-[#0e86bd2d] text-sm font-semibold py-2 w-16 rounded-lg text-center">
                      Pay Now
                     </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Card */}
      <div className="md:hidden space-y-4">
        {paymentData.map((payment) => (
          <div key={payment.code} className="bg-white shadow rounded-lg p-4 border">
            <div className="mb-2 text-gray-700">
              <span className="font-semibold text-gray-700">Code:</span> {payment.code}
            </div>
            <div className="mb-2 text-gray-700">
              <span className="font-semibold text-gray-700">Name:</span> {payment.name}
            </div>
            <div className="mb-2 text-[#0e86bdcf]">
              <span className="font-semibold ">Due Amount:</span> {payment.amount}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => handleNavigate(payment)}
                className="text-blue-600 hover:underline"
              >
                {payment.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
