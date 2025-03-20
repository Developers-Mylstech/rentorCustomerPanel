import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const NewComplaint = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Access the state data from navigation
  const assetData = location.state?.assetData || {};

  // State for form data
  const [formData, setFormData] = useState({
    customerUUID: "",
    customerID: "",
    assetCode: "",
    assetName: "",
    branch: "",
    assetAnnexureRef: "",
    assetRefNo: "",
    complaintType: "",
    details: "",
    file: null,
    fullName: "",
    designation: "",
    phone: "",
  });

  // Initialize form data when assetData is available
  useEffect(() => {
    if (assetData) {
      setFormData((prev) => ({
        ...prev,
        customerUUID: assetData.customerUUID || "",
        customerID: assetData.customerID || "",
        assetCode: assetData.assetCode || "",
        assetName: assetData.assetName || "",
        branch: assetData.branch || "",
        assetAnnexureRef: assetData.assetAnnexureRef || "",
        assetRefNo: assetData.assetRefNo || "",
      }));
    }
  }, [assetData]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Complaint:", formData);
    alert("Complaint Submitted Successfully!");
    navigate("/"); // Navigate back after submission
  };

  return (
    <div className="max-w-3xl mx-auto p-4 border rounded-lg shadow bg-white mb-10 md:my-10">
      <h2 className="text-xl font-bold text-center text-[#0e86bdcf] mb-4">
        Service Request
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Customer UUID and ID */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Customer UUID:
            </label>
            <input
              type="text"
              name="customerUUID"
              value={formData.customerUUID}
              readOnly
              className="w-full border p-2 rounded mt-1 bg-gray-100 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Customer ID:
            </label>
            <input
              type="text"
              name="customerID"
              value={formData.customerID}
              readOnly
              className="w-full border p-2 rounded mt-1 bg-gray-100 text-sm"
            />
          </div>
        </div>

        {/* Branch and Asset Code */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Branch Code:
            </label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              readOnly
              className="w-full border p-2 rounded mt-1 bg-gray-100 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Asset Code:
            </label>
            <input
              type="text"
              name="assetCode"
              value={formData.assetCode}
              readOnly
              className="w-full border p-2 rounded mt-1 bg-gray-100 text-sm"
            />
          </div>
        </div>

        {/* Asset Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Asset Name:
          </label>
          <input
            type="text"
            name="assetName"
            value={formData.assetName}
            readOnly
            className="w-full border p-2 rounded mt-1 bg-gray-100 text-sm"
          />
        </div>

        {/* Asset Annexure Ref and Asset Ref No */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Asset Annexure Ref:
            </label>
            <input
              type="text"
              name="assetAnnexureRef"
              value={formData.assetAnnexureRef}
              readOnly
              className="w-full border p-2 rounded mt-1 bg-gray-100 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Asset Ref No:
            </label>
            <input
              type="text"
              name="assetRefNo"
              value={formData.assetRefNo}
              readOnly
              className="w-full border p-2 rounded mt-1 bg-gray-100 text-sm"
            />
          </div>
        </div>

        {/* Complaint Type */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Req# Type:
          </label>
          <select
            name="complaintType"
            value={formData.complaintType}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1 text-sm"
            required
          >
            <option value="">-Select Complaint Type-</option>
            <option value="Hardware Issue">Hardware Issue</option>
            <option value="Software Issue">Software Issue</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>

        {/* Details */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Details:
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Please explain complaint details..."
            rows="4"
            className="w-full border p-2 rounded mt-1 text-sm"
            required
          />
        </div>

        {/* Attachment */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Attachment:
          </label>
          <input
            type="file"
            name="file"
            accept=".pdf,.jpg,.png"
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1 text-sm"
          />
          {formData.file && (
            <div className="mt-2 text-sm text-gray-500">
              Selected file: {formData.file.name}
            </div>
          )}
        </div>

        {/* Requester Details */}
        <div className="border-t pt-4">
          <h3 className="font-bold text-gray-700">Requester Detail</h3>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="border p-2 rounded text-sm"
            />
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Designation/Position"
              className="border p-2 rounded text-sm"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="05XXXXXXXX"
              className="border p-2 rounded text-sm"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="">
          <button className="w-full bg-[#0e86bdcf] text-white py-2 rounded ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewComplaint;
