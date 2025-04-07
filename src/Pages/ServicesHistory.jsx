import { FaFilePdf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import certificate from "../assets/certificate.jpg"

const ServiceHistory = () => {
  const navigate = useNavigate();

  const handleDownload = (data) => {
    const doc = new jsPDF({
      orientation: 'landscape', // Ensures wider layout
      unit: 'mm',
      format: [297, 180], // Increased width and decreased height
    });
  
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
  
    // Add image to fill the customized rectangular page
    doc.addImage(certificate, 'PNG', 0, 0, pageWidth, pageHeight);
  
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 0, 0)
  
    // Center the text horizontally
    const centerX = (text) => (pageWidth - doc.getTextWidth(text)) / 2;
  
    doc.text(data.code, centerX(data.code), 80);
    doc.text(data.assetName, centerX(data.assetName), 90);
    doc.text(data.branch, centerX(data.branch), 100);
  
    // Open PDF
    const pdfUrl = doc.output("bloburl");
    window.open(pdfUrl, "_blank");
  };
  
  
  

  const serviceData = [
    {
      assetCode: "ECO0602",
      assetName: "M Purushotham Reddy",
      commodityName: "ECO (Water Filter)",
      branch: "Home Unit",
      lastService: "21-02-2025",
      serviceMode: "90",
      nextService: "22-05-2025",
      notes: "",
      code:"120202A0003"

 
    },
  ];
  const handleNewComplaint = (data) => {
    navigate("/complaint", { state: { assetData: data } });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">Assets List</h1>

      {/* Dropdown and Submit Button */}
      <div className="flex  items-center gap-6 mb-4">
        <select className="border  px-3 py-1 rounded text-sm">
          <option>M Purushotham Reddy</option>
        </select>
        <button className="border px-3 py-1 bg-[#0e86bdcf] text-white rounded  text-sm">
          Submit
        </button>
      </div>

      {/* Table View for Large Screens */}
      <div className="hidden lg:block overflow-x-auto rounded-md">
        <table className="w-full border-collapse border text-sm ">
          <thead>
            <tr className="bg-[#0e86bd2b] text-[#0e86bdcf]  text-left">
              <th className="border px-4 py-2 text-sm">Asset_Code</th>
              <th className="border px-4 py-2 text-sm">Asset_Name</th>
              <th className="border px-4 py-2">Commodity_Name</th>
              <th className="border px-4 py-2">Branch</th>
              <th className="border px-4 py-2">Last_Service</th>
              <th className="border px-4 py-2">Service_Mode</th>
              <th className="border px-4 py-2">Next_Service</th>
              <th className="border px-4 py-2">Notes</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((data, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-sm text-gray-500 font-semibold">{data.assetCode}</td>
                <td className="border px-4 py-2 text-sm text-gray-500 font-semibold">{data.assetName}</td>
                <td className="border px-4 py-2 text-sm text-gray-500 font-semibold">{data.commodityName}</td>
                <td className="border px-4 py-2 text-gray-500 font-semibold">{data.branch}</td>
                <td className="border px-4 py-2 text-gray-500 font-semibold">{data.lastService}</td>
                <td className="border px-4 py-2 text-gray-500 font-semibold">{data.serviceMode}</td>
                <td className="border px-4 py-2 text-gray-500 font-semibold">{data.nextService}</td>
                <td className="border px-4 py-2 text-gray-500 font-semibold">{data.notes}</td>
                <td className="border px-4 py-2 text-center text-gray-500">
                  <div className="flex items-center gap-2">
                    <button onClick={()=>handleDownload(data)} className="text-red-500">
                      <FaFilePdf size={20} />
                    </button>
                    <button onClick={()=>navigate("/assitservices")}  className="bg-orange-50 text-orange-500 border font-bold border-orange-500   px-3 py-1 rounded hover:bg-[#0aa3ebcf]text-sm">
                      Service Details
                    </button>
                    <button onClick={() => handleNewComplaint(data)} className="border border-[#0e60bdcf] font-bold text-[#0e60bdcf] bg-[#0e60bd2d] px-3 py-1 rounded  text-sm">
                      New Complaint
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card View for Mobile Screens */}
      <div className="lg:hidden space-y-4">
        {serviceData.map((data, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm p-4 bg-white"
          >
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm text-gray-500">Asset Code</p>
                <p className="font-medium text-sm">{data.assetCode}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Asset Name</p>
                <p className="font-medium text-sm">{data.assetName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Commodity Name</p>
                <p className="font-medium text-sm">{data.commodityName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Branch</p>
                <p className="font-medium text-sm">{data.branch}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Service</p>
                <p className="font-medium text-sm">{data.lastService}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Service Mode</p>
                <p className="font-medium text-sm">{data.serviceMode}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Next Service</p>
                <p className="font-medium text-sm">{data.nextService}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Notes</p>
                <p className="font-medium text-sm">{data.notes}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-evenly items-center gap-2">
             <div>
             <button onClick={()=>handleDownload(data)}  className="text-red-500">
                <FaFilePdf size={20} />
              </button>
             </div>
             <div>
             <button onClick={()=>navigate("/assitservices")}  className="bg-[#0e86bdcf] text-white px-2 py-1 rounded  text-sm">
                Service Details
              </button>
             </div>
             <div>
             <button  onClick={() => handleNewComplaint(data)} className="border border-[#0e86bdcf] text-[#0e86bdcf] px-2 py-1 rounded  text-sm">
                New Complaint
              </button>
             </div>
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

export default ServiceHistory;
