import React from "react";
import { useNavigate } from "react-router-dom";
import ReceiptVoucher from "./RecieptVoucher";

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
                <th key={header} className="py-3 px-4 border-b text-left text-white bg-[#0e86bdcf]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment) => (
              <tr key={payment.code} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{payment.code}</td>
                <td className="py-2 px-4 border-b">{payment.name}</td>
                <td className="py-2 px-4 border-b">{payment.amount}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleNavigate(payment)}
                    className="text-[#0e86bdcf] hover:underline"
                  >
                    {payment.action}
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  {/* <button
                    onClick={() => handleNavigate(payment)}
                    className="text-[#0e86bdcf] hover:underline"
                  >
                   Download
                  </button> */}
                  <ReceiptVoucher/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


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
