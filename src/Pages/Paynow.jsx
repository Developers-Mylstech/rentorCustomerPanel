import React from "react";
import { useLocation } from "react-router-dom";

const Paynow = () => {
  const location = useLocation();
  const { payment } = location.state || {};

  if (!payment) return <div>No Payment Data</div>;

  return (
    <div className="flex flex-col items-center justify-center h-full  ">
      {/* Payment Code */}
      <h1 className="text-2xl font-bold my-6 text-[#0a448b]">{payment.code}</h1>

      {/* Payment Details */}
      <div className="bg-white p-6 mx-auto w-[90%] rounded-lg shadow-[0px_-8px_38px_-9px_rgba(0,_0,_0,_0.3)]  max-w-lg border border-[#0e86bdcf] ">
        <div className="space-y-4">
          <div className="flex   justify-between md:text-base text-sm text-gray-600">
            <div className="font-semibold">Customer ID :</div>
            <div>{payment.code}</div>
          </div>
          <div className="flex md:text-base text-sm justify-between  text-gray-600">
            <div className="font-semibold">Customer Name :</div>
            <div>{payment.name}</div>
          </div>
          <div className="flex justify-between md:text-base text-sm  text-[#0e86bdcf]">
            <div className="font-semibold">Total Due Amount :</div>
            <div>{payment.amount}</div>
          </div>

          {/* Input + Pay Now Button */}
          <div className="flex justify-between items-center space-x-2 mt-4">
            <input
              type="text"
              value={payment.amount}
              className=" px-3 py-2 border text-[#0e86bdcf] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[70%] "
              readOnly
            />
            <button className="bg-[#0e86bdcf] text-white md:text-base text-sm  px-2 md:px-4 py-2 rounded-md ">
              Pay now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default Paynow;
