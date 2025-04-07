// import { FaFilePdf } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Soshistory = () => {
//   const navigate = useNavigate();
//   const serviceData = [
//     {
//       date: "21-02-2025",
//       assetCode: "ECO0602",
//       complaintType:"001",
//       details : "Test",
//       assetName: "M Purushotham Reddy",
//       Desingnation:" Engineer",
//       phoneNumber:'0987654321',
//       complaintStatus:"010",
     
//     },
//   ];
//   const handleNewComplaint = (data) => {
//     navigate("/complaint", { state: { assetData: data } });
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       {/* Title */}
//       {/* <h1 className="text-3xl font-bold mb-4">Assets List</h1> */}

//       {/* Dropdown and Submit Button */}
//       <div className="flex items-center gap-2 mb-4">
//         <select className="border px-3 py-1 rounded text-sm">
//           <option>M Purushotham Reddy</option>
//         </select>
//         <button className="border px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">
//           Submit
//         </button>
//       </div>

//       {/* Table View for Large Screens */}
//       <div className="hidden lg:block overflow-x-auto">
//         <table className="w-full border-collapse border text-sm">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="border px-4 py-2">Date</th>
//               <th className="border px-4 py-2">Asset Code</th>
//               <th className="border px-4 py-2">Complaint Type</th>
//               <th className="border px-4 py-2">Branch</th>
//               <th className="border px-4 py-2">Details</th>
//               <th className="border px-4 py-2">Name</th>
//               <th className="border px-4 py-2">Desingnation</th>
//               <th className="border px-4 py-2">Phone Number</th>
//               <th className="border px-4 py-2 text-center">Complaint Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {serviceData.map((data, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="border px-4 py-2">{data.date}</td>
//                 <td className="border px-4 py-2">{data.assetName}</td>
//                 <td className="border px-4 py-2">{data.complaintType}</td>
//                 <td className="border px-4 py-2">{data.branch}</td>
//                 <td className="border px-4 py-2">{data.details}</td>
//                 <td className="border px-4 py-2">{data.assetName}</td>
//                 <td className="border px-4 py-2">{data.Desingnation}</td>
//                 <td className="border px-4 py-2">{data.phoneNumber}</td>
//                 <td className="border px-4 py-2">{data.complaintStatus}</td>
//                 <td className="border px-4 py-2"> <div className="flex gap-2"><button className="bg-red-500 text-white rounded-lg p-2">Delete</button> <button className="bg-blue-500 text-white rounded-lg p-2">Details</button></div> </td>
//                 {/*  */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Card View for Mobile Screens */}
//       <div className="lg:hidden space-y-4">
//         {serviceData.map((data, index) => (
//           <div
//             key={index}
//             className="border rounded-lg shadow-sm p-4 bg-white"
//           >
//             <div className="grid grid-cols-2 gap-2">
//               <div>
//                 <p className="text-sm text-gray-500">Asset Code</p>
//                 <p className="font-medium">{data.assetCode}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Asset Name</p>
//                 <p className="font-medium">{data.assetName}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Commodity Name</p>
//                 <p className="font-medium">{data.commodityName}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Branch</p>
//                 <p className="font-medium">{data.branch}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Last Service</p>
//                 <p className="font-medium">{data.lastService}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Service Mode</p>
//                 <p className="font-medium">{data.serviceMode}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Next Service</p>
//                 <p className="font-medium">{data.nextService}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Notes</p>
//                 <p className="font-medium">{data.notes}</p>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-4 flex items-center gap-2">
//              <div>
//              <button className="text-red-500">
//                 <FaFilePdf size={20} />
//               </button>
//              </div>
//              <div>
//              <button  className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 text-sm">
//                 Service Details
//               </button>
//              </div>
//              <div>
//              <button  onClick={() => handleNewComplaint(data)} className="border border-red-500 text-red-500 px-2 py-1 rounded hover:bg-red-50 text-sm">
//                 New Complaint
//               </button>
//              </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="mt-6 text-center text-sm text-gray-500">
//         © 2025 - Rentro Group
//       </footer>
//     </div>
//   );
// };

// export default Soshistory;


import { FaFilePdf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Soshistory = () => {
  const navigate = useNavigate();
  const serviceData = [
    {
      date: "21-02-2025",
      assetCode: "ECO0602",
      complaintType: "001",
      details: "Test",
      assetName: "M Purushotham Reddy",
      Desingnation: "Engineer",
      phoneNumber: "0987654321",
      complaintStatus: "010",
    },
  ];

  const handleNewComplaint = (data) => {
    navigate("/complaint", { state: { assetData: data } });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Dropdown and Submit Button */}
      <div className="flex items-center gap-6 mb-4 my-4">
        <select className="border px-3 py-1 rounded text-sm">
          <option>M Purushotham Reddy</option>
        </select>
        <button className="border px-3 py-1 bg-[#0e86bdcf] text-white rounded  text-sm">
          Submit
        </button>
      </div>

      {/* Table View for Large Screens */}
      <div className="hidden lg:block overflow-x-auto rounded-lg ">
        <table className="w-[100%] border-collapse border text-xs font-semibold  text-gray-600">
          <thead>
            <tr className="bg-[#0e86bd31]  text-[#0e86bdcf] text-left">
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Asset_Code</th>
              <th className="border px-4 py-2">Complaint_Type</th>
              <th className="border px-4 py-2">Details</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Desingnation</th>
              <th className="border px-4 py-2">Phone_Number</th>
              <th className="border px-4 py-2">Complaint_Status</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((data, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2 ">{data.date}</td>
                <td className="border px-4 py-2">{data.assetCode}</td>
                <td className="border px-4 py-2">{data.complaintType}</td>
                <td className="border px-4 py-2">{data.details}</td>
                <td className="border px-4 py-2">{data.assetName}</td>
                <td className="border px-4 py-2">{data.Desingnation}</td>
                <td className="border px-4 py-2">{data.phoneNumber}</td>
                <td className="border px-4 py-2">{data.complaintStatus}</td>
                <td className="border px-4 py-2">
                  <div className="flex gap-2">
                    <button className="bg-red-50  text-red-500 border border-red-500 font-bold rounded-lg p-2">
                      Delete
                    </button>
                    <button className="bg-violet-50 font-bold text-violet-500 border border-violet-500 rounded-lg p-2">
                      Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View for Mobile Screens */}
      <div className="md:hidden space-y-4">
        {serviceData.map((data, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-md bg-[#9ac4d874]"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Date: {data.date}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  Asset Code: {data.assetCode}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  Complaint Type: {data.complaintType}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  Details: {data.details}
                </p>
              </div>
              <FaFilePdf className="text-red-500 text-5xl md:text-3xl" />
            </div>

            <div className="mt-3">
              <p className="text-sm">
                <span className="font-semibold">Name:</span> {data.assetName}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Designation:</span>{" "}
                {data.Desingnation}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Phone:</span>{" "}
                {data.phoneNumber}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Status:</span>{" "}
                {data.complaintStatus}
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 bg-[#0e86bdcf] text-white rounded-lg p-2">
                Delete
              </button>
              <button className="flex-1 bg-white text-[#0e86bdcf] border border-[#0e86bdcf] rounded-lg p-2">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-6 text-center text-sm text-gray-500">
        © 2025 - Rentro Group
      </footer>
    </div>
  );
};

export default Soshistory;

