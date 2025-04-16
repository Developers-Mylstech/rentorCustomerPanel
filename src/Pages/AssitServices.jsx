import { jsPDF } from "jspdf";
import logo from "../assets/renroLogo.png"
const AssitServices = () => {
  const serviceData = [
    {
      sNo: 1,
      date: "21-02-2025",
      technicianName: "Ashiq",
      amount: "0.00",
      notes: "",
      status: "Completed",
      attendeeName: "purushotham reddy",
      attendeeMob: "0568488958",
      attendeeSignature:
        "data:image/png;base64, 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",
      attendeeNotes: "",
      attendeeSign: "✓✓",
      tdsBefore: 50,
      tdsAfter: 40,
      waterSource: 235,
      replacedItems: "PP Filter 10X2.5, GAC 10X2.5",
      branchName:"Home Unit",
      jobId:" SRV/1717/5",
      jobType:"Installation",
      Next_Service_Date:"30-03-2025"

    },
    {
      sNo: 2,
      date: "13-11-2024",
      customerId : "120202M0126",
      technicianName: "Ashiq",
      amount: "0.00",
      notes: "",
      status: "Completed",
      attendeeName: "MONIPI",
      attendeeMob: "0568488958",
      attendeeSignature:
        "data:image/png;base64, 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",

      attendeeNotes: "",
      attendeeSign: "✓✓",
      tdsBefore: 70,
      tdsAfter: 70,
      waterSource: 180,
      replacedItems: "PP Filter 10X2.5",
      branchName:"Home Unit",
      jobId:" SRV/1717/5",
      jobType:"Installation",
      Next_Service_Date:"30-03-2025"

    },
  ];

  const handleDownload = (data) => {
    const doc = new jsPDF();

    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    const tableWidth = pageWidth - 2 * margin;
     const billToStartY = 45;

    doc.addImage(logo, 'PNG', margin, 10, 40, 20);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.text("RENT RO ELECTRICAL & ELECTRONIC APPLIANCES RENTAL L.L.C", margin + 52, 15);
            doc.text("Office No:302, Al Thuraya Building, Bur Dubai - Dubai", margin + 52, 22);

            doc.setFontSize(18);
            doc.setFont('helvetica', 'bold');
            doc.text('Job Card', pageWidth / 2, 40, { align: 'center'});

    // === Left and Right Section ===
    const leftStartY = 40;
    const rightStartY = 40;
    const lineHeight = 8;
    const rightAlign = pageWidth - margin - 50;

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    doc.text(`Customer ID: ${data.customerId}`, margin, leftStartY);
    doc.text(` ${data.attendeeName}`, margin, leftStartY + lineHeight-2);
    doc.text(`Branch Name: ${data.branchName || "N/A"}`, margin, leftStartY + (lineHeight * 2)-4);
    doc.text(`Tel: "N/A"`, margin, leftStartY + (lineHeight * 3)-6);

    // Right Side
    doc.text(`Job ID: ${data.jobId || "N/A"}`, rightAlign-10, rightStartY);
    doc.text(`Job Type: ${data.jobType || "N/A"}`, rightAlign-10, rightStartY + lineHeight-2);
    doc.text(`Service Date: ${data.date || "N/A"}`, rightAlign-10, rightStartY + (lineHeight * 2)-4);
    doc.text(`Next Service Date: ${data.Next_Service_Date || "N/A"}`, rightAlign-10, rightStartY + (lineHeight * 3)-6);

     // === Table Header ===
     const tableStartY = billToStartY + 20;
     doc.setFillColor(60, 160, 60);
     doc.rect(margin, tableStartY, tableWidth, 10, 'F');
     doc.setFont('helvetica', 'bold');
     doc.text('Product Details', pageWidth / 2 , tableStartY + 7,{ align: 'center'} );

     // === Table Row ===
     const rowStartY = tableStartY + 10;
     doc.rect(margin, rowStartY, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Asset Code:', margin + 2, rowStartY + 7);
     doc.rect(margin + tableWidth/4, rowStartY, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('12345', margin+ 2 + tableWidth/4, rowStartY + 7);
     doc.rect(margin + tableWidth/2, rowStartY, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Last Service', margin+2 + tableWidth/2, rowStartY + 7);
     doc.rect(margin+142.5, rowStartY, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('25/03/25', margin + 144, rowStartY + 7);

     doc.rect(margin, rowStartY+10, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Asset Name:', margin + 2, rowStartY+10 + 7);
     doc.rect(margin + tableWidth/4, rowStartY+10, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('ECO', margin+ 2 + tableWidth/4, rowStartY+10 + 7);
     doc.rect(margin + tableWidth/2, rowStartY+10, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Product Type', margin+2 + tableWidth/2, rowStartY+10 + 7);
     doc.rect(margin+142.5, rowStartY+10, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('', margin + 144, rowStartY+10 + 7);


     doc.setFillColor(60, 160, 60);
     doc.rect(margin, tableStartY+30, tableWidth, 10, 'F');
     doc.setFont('helvetica', 'bold');
     doc.text('Part Used', pageWidth / 2 , tableStartY+30 + 7,{ align: 'center'} );

     doc.rect(margin, rowStartY+30, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Item Code', margin + 2, rowStartY+30 + 7);
     doc.rect(margin + 38, rowStartY+30, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Item Name', margin+ 2 + 38, rowStartY+30+ 7);
     doc.rect(margin + 76, rowStartY+30, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Qty', margin+2 + 76, rowStartY+30 + 7);
     doc.rect(margin+114, rowStartY+30, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Rate', margin + 114+2 , rowStartY+30 + 7);
     doc.rect(margin+152, rowStartY+30, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Amount', margin + 152+2,rowStartY+30 + 7);
    

     doc.rect(margin, rowStartY+40, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('M003200', margin + 2, rowStartY+40 + 7);
     doc.rect(margin + 38,rowStartY+40, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('PP Filter X', margin+ 2 + 38, rowStartY+40+ 7);
     doc.rect(margin + 76, rowStartY+40, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('1', margin+2 + 76, rowStartY+40 + 7);
     doc.rect(margin+114, rowStartY+40, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('00', margin + 114+2  , rowStartY+40 + 7);
     doc.rect(margin+152, rowStartY+40, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('00', margin + 154+2 ,rowStartY+40 + 7);


     doc.rect(margin, rowStartY+50, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('M003200', margin + 2, rowStartY+50 + 7);
     doc.rect(margin + 38,rowStartY+50, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('PP Filter X', margin+ 2 + 38, rowStartY+50+ 7);
     doc.rect(margin + 76, rowStartY+50, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('1', margin+2 + 76, rowStartY+50 + 7);
     doc.rect(margin+114, rowStartY+50, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('00', margin + 114+2  , rowStartY+50 + 7);
     doc.rect(margin+152, rowStartY+50, tableWidth/5, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('00', margin + 154+2 ,rowStartY+50 + 7);

     doc.setFillColor(60, 160, 60);
     doc.rect(margin, tableStartY+70, tableWidth/2, 10, 'F');
     doc.setFont('helvetica', 'bold');
     doc.text('Quality Details',60 , tableStartY+70 + 7,{ align: 'center'} );

     doc.rect(margin, rowStartY+70, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('TDS', margin + 2, rowStartY+70 + 7);
     doc.rect(margin + 47.5,rowStartY+70, tableWidth/8, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Before', margin+ 2 + 50, rowStartY+70+ 7);
     doc.rect(margin + 71.4, rowStartY+70, tableWidth/8, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('After', margin+2 + 73, rowStartY+70 + 7);

     doc.rect(margin, rowStartY+80, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Filter Water', margin + 2, rowStartY+80 + 7);
     doc.rect(margin + 47.5,rowStartY+80, tableWidth/8, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('50', margin+ 2 + 50, rowStartY+80+ 7);
     doc.rect(margin + 71.4, rowStartY+80, tableWidth/8, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('40', margin+2 + 73, rowStartY+80 + 7);

     doc.rect(margin, rowStartY+90, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Tap Water', margin + 2, rowStartY+90 + 7);
     doc.rect(margin+47.5, rowStartY+90, tableWidth/4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('235', margin + 70, rowStartY+90 + 7);





     doc.setFillColor(60, 160, 60);
     doc.rect(margin+tableWidth/2, tableStartY+70, tableWidth/2, 10, 'F');
     doc.setFont('helvetica', 'bold');
     doc.text('Checklist Items', 150 , tableStartY+70 + 7,{ align: 'center'} );
     doc.rect(margin + tableWidth / 2, rowStartY + 80, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Tap Water', margin + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('Tap Water')) / 2, rowStartY + 80 + 7);
     doc.rect(margin + 47.5 + tableWidth / 2, rowStartY + 80, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('235', margin + 47.5 + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 80 + 7);
     
     doc.rect(margin + tableWidth / 2, rowStartY + 90, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Tap Water', margin + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('Tap Water')) / 2, rowStartY + 90 + 7);
     doc.rect(margin + 47.5 + tableWidth / 2, rowStartY + 90, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('235', margin + 47.5 + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 90 + 7);
     
     doc.rect(margin + tableWidth / 2, rowStartY + 70, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Tap Water', margin + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('Tap Water')) / 2, rowStartY + 70 + 7);
     doc.rect(margin + 47.5 + tableWidth / 2, rowStartY + 70, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('235', margin + 47.5 + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 70 + 7);

     doc.setFillColor(60, 160, 60);
     doc.rect(margin, tableStartY+110, tableWidth/2, 10, 'F');
     doc.setFont('helvetica', 'bold');
     doc.text('Technician Details ',58, tableStartY+110 + 7,{ align: 'center'} );

     
     doc.rect(margin , rowStartY + 110, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Tap Water', margin+(tableWidth / 4 - doc.getTextWidth('Tap Water')) / 2, rowStartY + 110 + 7);
     doc.rect(margin+ 47.5 , rowStartY + 110, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('235', margin + 47.5 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 110 + 7);
     
     doc.rect(margin, rowStartY + 120, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Tap Water', margin   + (tableWidth / 4 - doc.getTextWidth('Tap Water')) / 2, rowStartY + 120 + 7);
     doc.rect(margin + 47.5 , rowStartY + 120, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('235', margin + 47.5  + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 120 + 7);
     
     doc.rect(margin , rowStartY + 130, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Tap Water', margin+ (tableWidth / 4 - doc.getTextWidth('Tap Water')) / 2, rowStartY + 130 + 7);
     doc.rect(margin + 47.5, rowStartY + 130, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('235', margin + 47.5 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 130 + 7);

     doc.rect(margin , rowStartY + 140, tableWidth / 4, 30);
     doc.setFont('helvetica', 'normal');
     doc.text('Tech Notes', margin+ (tableWidth / 4 - doc.getTextWidth('Tap Water')) / 2, rowStartY + 140 + 7);
     doc.rect(margin + 47.5, rowStartY + 140, tableWidth / 4, 30);
     doc.setFont('helvetica', 'normal');
     doc.text('', margin + 47.5 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 140 + 7);



     doc.setFillColor(60, 160, 60);
     doc.rect(margin+tableWidth/2, tableStartY+110, tableWidth/2, 10, 'F');
     doc.setFont('helvetica', 'bold');
     doc.text('Attendee Details', 150 , tableStartY+110 + 7,{ align: 'center'} );

     
     doc.rect(margin + tableWidth / 2, rowStartY + 110, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Tap Water', margin + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('Tap Water')) / 2, rowStartY + 110 + 7);
     doc.rect(margin + 47.5 + tableWidth / 2, rowStartY + 110, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('235', margin + 47.5 + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 110 + 7);
     
     doc.rect(margin + tableWidth / 2, rowStartY + 120, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Tap Water', margin + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('Tap Water')) / 2, rowStartY + 120 + 7);
     doc.rect(margin + 47.5 + tableWidth / 2, rowStartY + 120, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('235', margin + 47.5 + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 120 + 7);
     
     doc.rect(margin + tableWidth / 2, rowStartY + 130, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('Tap Water', margin + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('Tap Water')) / 2, rowStartY + 130 + 7);
     doc.rect(margin + 47.5 + tableWidth / 2, rowStartY + 130, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('235', margin + 47.5 + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 130 + 7);
     doc.rect(margin + 47.5 + tableWidth / 2, rowStartY + 140, tableWidth / 4, 10);
     doc.setFont('helvetica', 'normal');
     doc.text('', margin + 47.5 + tableWidth / 2 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 140 + 7);

     doc.rect(margin  +tableWidth/2 , rowStartY + 150, tableWidth / 4, 20);
     doc.setFont('helvetica', 'normal');
     doc.text('Customer sign:', margin +tableWidth/2 +2, rowStartY + 150 + 7);
     doc.rect(margin + 47.5+tableWidth/2, rowStartY + 150, tableWidth / 4, 20);
     doc.setFont('helvetica', 'normal');
     doc.text('', margin+tableWidth/2 + 47.5 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 140 + 7);

     doc.setFillColor(60, 160, 60);
     doc.rect(margin, tableStartY+180, tableWidth, 10, 'F');
     doc.setFont('helvetica', 'bold');
     doc.text('Thankyou For Choosing RentRo', 105 , tableStartY+180 + 7,{ align: 'center'} );

     doc.rect(margin , rowStartY + 180, tableWidth , 5);
     doc.setFont('helvetica', 'normal');
     doc.text('', margin+tableWidth/2 + 47.5 + (tableWidth / 4 - doc.getTextWidth('235')) / 2, rowStartY + 180 + 7);

     doc.rect(margin , rowStartY + 185, tableWidth , 10);
     doc.setFont('helvetica', 'normal');
     doc.setFontSize(10)
     doc.text('Note: This is an e-document,does not required sign and stamp,to verify the document scan above QR code or Click Here', margin , rowStartY + 185 + 7);


     


    // === Footer Section ===
    const footerStartY = leftStartY+140 + lineHeight * 12;

    doc.setDrawColor(0);
    doc.line(margin, footerStartY, pageWidth - margin, footerStartY);

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 0, 0);
    doc.text("www.example.com", margin, footerStartY + 10);

    doc.setTextColor(0);
    doc.text("Service: +971506709963", margin, footerStartY + 18);
    doc.text("Sales: +971505828432", margin + 80, footerStartY + 18);

    doc.setFontSize(8);
    doc.text("1", pageWidth - margin - 10, footerStartY + 10);
    doc.text("Page 1/", pageWidth - margin - 20, footerStartY + 10);
    doc.text("Doc No:", pageWidth - margin - 40, footerStartY + 18);

    const pdfUrl = doc.output("bloburl");
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className=" md:mx-10 my-5 p-4">
      <h2 className="text-xl font-semibold mb-4">Assets Service Details</h2>

      <div className="overflow-x-auto hidden md:block rounded-md">
        <table className="w-full border-collapse border text-sm">
          <thead>
            <tr className="bg-[#0e86bd21] text-[#0e86bdcf] text-left">
              <th className="border px-4 py-2">S.No</th>
              <th className="border px-4 py-2">Service_Date</th>
              <th className="border px-4 py-2">Technician_Name</th>
              <th className="border px-4 py-2">Attendee_Name</th>
              <th className="border px-4 py-2">Attendee_Mob</th>
              <th className="border px-4 py-2">Attendee_Sign</th>
              <th className="border px-4 py-2">TDS_Before</th>
              <th className="border px-4 py-2">TDS_After</th>
              {/* <th className="border px-4 py-2">Replaced_Items</th> */}
              <th className="border px-4 py-2 text-center">Job Card</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((data, index) => (
              <tr key={index} className="hover:bg-gray-50 text-gray-500 text-sm font-semibold">
                <td className="border px-4 py-2">{data.sNo}</td>
                <td className="border px-4 py-2">{data.date}</td>
                <td className="border px-4 py-2">
                  {data.technicianName || "N/A"}
                </td>
                <td className="border px-4 py-2">
                  {data.attendeeName || "N/A"}
                </td>
                <td className="border px-4 py-2">
                  {data.attendeeMob || "N/A"}
                </td>
                <td className="border px-4 py-2">
                  {" "}
                  <img src={data.attendeeSignature} className="h-16 w-16" alt="" />{" "}
                </td>
                <td className="border px-4 py-2">{data.tdsBefore}</td>
                <td className="border px-4 py-2">{data.tdsAfter}</td>
                {/* <td className="border px-4 py-2">
                  {data.replacedItems || "N/A"}
                </td> */}
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => handleDownload(data)}
                    className="text-green-700 border border-green-700 bg-green-100 hover:bg-green-200  p-2 rounded-lg my-2"
                  >
                   Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:hidden">
        {serviceData.map((service) => (
          <div
            key={service.sNo}
            className="bg-white border border-[#0e86bdcf] rounded-2xl shadow-lg p-4 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Service #{service.sNo}
            </h3>
            <button
              onClick={() => handleDownload(service)}
              className="text-[#0e86bdcf] border border-[#0e86bdcf] p-2 rounded-lg"
            >
              Download
            </button>
            </div>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Date:</span> {service.date}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Technician:</span>{" "}
              {service.technicianName}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Amount:</span> ${service.amount}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Notes:</span>{" "}
              {service.notes || "N/A"}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  service.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {service.status}
              </span>
            </p>
            <div className="border-t border-gray-200 my-3"></div>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Attendee:</span>{" "}
              {service.attendeeName}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Mobile:</span>{" "}
              {service.attendeeMob}
            </p>
            {service.attendeeSignature && (
              <div className="mt-3">
                <span className="font-semibold text-gray-500">Signature:</span>
                <img
                  src={service.attendeeSignature}
                  alt="Signature"
                  className="w-32 h-16 object-contain border border-gray-300 mt-1"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <footer className="mt-6 text-center text-sm text-gray-500">
        © 2025 - Rentro Group
      </footer>
    </div>
  );
};

export default AssitServices;



// import { jsPDF } from "jspdf";
// import logo from "../assets/renroLogo.png";
// import PDFDocument from "../Constant/PDFDocument";
// import { pdf, PDFDownloadLink } from "@react-pdf/renderer";
// const AssitServices = () => {
//   const serviceData = [
//     {
//       sNo: 1,
//       date: "21-02-2025",
//       technicianName: "Ashiq",
//       amount: "0.00",
//       notes: "",
//       status: "Completed",
//       attendeeName: "purushotham reddy",
//       attendeeMob: "0568488958",
//       attendeeSignature:
//         "data:image/png;base64, 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",
//       attendeeNotes: "",
//       attendeeSign: "✓✓",
//       tdsBefore: 50,
//       tdsAfter: 40,
//       waterSource: 235,
//       replacedItems: "PP Filter 10X2.5, GAC 10X2.5",
//       branchName: "Home Unit",
//       jobId: " SRV/1717/5",
//       jobType: "Installation",
//       Next_Service_Date: "30-03-2025",
//       customerId: 'C12345',
//       jobId: 'J67890',
//       customerName: 'John Doe',
//       jobType: 'Installation',
//       branchName: 'Bur Dubai',
//       serviceDate: '2025-03-20',
//       nextServiceDate: '2025-04-20',
//       jobStatus: 'Completed',
//       warranty: '12 Months',
//       technicianName: 'Ali Khan',
//       parts: [
//         { code: 'P001', name: 'Compressor', qty: 1, rate: '150', amount: '150' },
//         { code: 'P002', name: 'Fan Motor', qty: 2, rate: '100', amount: '200' },
//       ],

//     },
//     {
//       sNo: 2,
//       date: "13-11-2024",
//       customerId: "120202M0126",
//       technicianName: "Ashiq",
//       amount: "0.00",
//       notes: "",
//       status: "Completed",
//       attendeeName: "MONIPI",
//       attendeeMob: "0568488958",
//       attendeeSignature:
//         "data:image/png;base64, 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",

//       attendeeNotes: "",
//       attendeeSign: "✓✓",
//       tdsBefore: 70,
//       tdsAfter: 70,
//       waterSource: 180,
//       replacedItems: "PP Filter 10X2.5",
//       branchName: "Home Unit",
//       jobId: " SRV/1717/5",
//       jobType: "Installation",
//       Next_Service_Date: "30-03-2025",
//       customerId: "123456",
//       customerName: "John Doe",
//       jobId: "SRV/17175",
//       jobType: "Installation",
//       branchName: "Home Unit",
//       serviceDate: "21-02-2025",
//       nextServiceDate: "22-05-2025",
//       parts: [
//         { code: "M00302024001", name: "PF Filter 10X2.5", qty: 1, rate: 0.00 },
//         { code: "M00302024002", name: "GAC 10X2.5", qty: 1, rate: 0.00 }
//       ]
//     },
//   ];

//   const handleDownload = (data) => {
//     const doc = new jsPDF();

//     const margin = 10;
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const tableWidth = pageWidth - 2 * margin;
//     const billToStartY = 45;

//     // === Header Section ===
//     doc.addImage(logo, "PNG", margin, 10, 40, 20);

//     // Arabic + Company Info
//     doc.setFontSize(10);
//     doc.setFont("helvetica", "bold");
//     doc.text(
//       "RENT RO ELECTRICAL & ELECTRONIC APPLIANCES RENTAL L.L.C",
//       margin + 52,
//       15
//     );
//     doc.text(
//       "Office No:302, Al Thuraya Building, Bur Dubai - Dubai",
//       margin + 52,
//       22
//     );

//     doc.setFontSize(18);
//     doc.setFont("helvetica", "bold");
//     doc.text("Job Card", pageWidth / 2, 40, { align: "center" });

//     // === Left and Right Section ===
//     const leftStartY = 60;
//     const rightStartY = 60;
//     const lineHeight = 8;
//     const rightAlign = pageWidth - margin - 50;

//     doc.setFontSize(12);
//     doc.setFont("helvetica", "normal");

//     // Left Side
//     doc.text(`Customer ID: ${data.customerId}`, margin, leftStartY);
//     doc.text(` ${data.attendeeName}`, margin, leftStartY + lineHeight - 2);
//     doc.text(
//       `Branch Name: ${data.branchName || "N/A"}`,
//       margin,
//       leftStartY + lineHeight * 2 - 4
//     );
//     doc.text(`Tel: "N/A"`, margin, leftStartY + lineHeight * 3 - 6);

//     // Right Side
//     doc.text(`Job ID: ${data.jobId || "N/A"}`, rightAlign - 10, rightStartY);
//     doc.text(
//       `Job Type: ${data.jobType || "N/A"}`,
//       rightAlign - 10,
//       rightStartY + lineHeight - 2
//     );
//     doc.text(
//       `Service Date: ${data.date || "N/A"}`,
//       rightAlign - 10,
//       rightStartY + lineHeight * 2 - 4
//     );
//     doc.text(
//       `Next Service Date: ${data.Next_Service_Date || "N/A"}`,
//       rightAlign - 10,
//       rightStartY + lineHeight * 3 - 6
//     );

//     // === Table Header ===
//     const tableStartY = billToStartY + 40;
//     doc.setFillColor(220, 220, 220);
//     doc.rect(margin, tableStartY, tableWidth, 10, "F");
//     doc.setFont("helvetica", "bold");
//     doc.text(
//       "Product Details",
//       pageWidth / 2,
//       tableStartY + 7,
//       { align: "center" },
//       { backgroundColor: "green" }
//     );

//     // === Table Row ===
//     const rowStartY = tableStartY + 10;
//     doc.rect(margin, rowStartY, tableWidth / 4, 10);
//     doc.setFont("helvetica", "normal");
//     doc.text("Asset Code", margin + 2, rowStartY + 7);
//     doc.rect(margin + tableWidth / 4, rowStartY, tableWidth / 4, 10);
//     doc.setFont("helvetica", "normal");
//     doc.text(`${data.Assetcode}`, margin + tableWidth / 4, rowStartY + 7);
//     doc.rect(margin + tableWidth / 2, rowStartY, tableWidth / 4, 10);
//     doc.setFont("helvetica", "normal");
//     doc.text("Asset Name", margin + 2, rowStartY + 7);
//     doc.rect(margin + 142.5, rowStartY, tableWidth / 4, 10);
//     doc.setFont("helvetica", "normal");
//     doc.text(" Tyoe", margin + 2, rowStartY + 7);

//     const footerStartY = leftStartY + lineHeight * 12;

//     doc.setDrawColor(0);
//     doc.line(margin, footerStartY, pageWidth - margin, footerStartY);

//     doc.setFontSize(10);
//     doc.setFont("helvetica", "bold");
//     doc.setTextColor(255, 0, 0);
//     doc.text("www.example.com", margin, footerStartY + 10);

//     doc.setTextColor(0);
//     doc.text("Service: +971506709963", margin, footerStartY + 18);
//     doc.text("Sales: +971505828432", margin + 80, footerStartY + 18);

//     // Page Number
//     doc.setFontSize(8);
//     doc.text("1", pageWidth - margin - 10, footerStartY + 10);
//     doc.text("Page 1/", pageWidth - margin - 20, footerStartY + 10);
//     doc.text("Doc No:", pageWidth - margin - 40, footerStartY + 18);

//     // Open PDF
//     const pdfUrl = doc.output("bloburl");
//     window.open(pdfUrl, "_blank");
//   };

//   const handleOpenPdf = (data) => {
//     console.log("Data for PDF:", data);
//     if (!data) {
//       console.error("Data is null or undefined");
//       return;
//     }

//     pdf(<PDFDocument key={Date.now()} data={data} />)
//       .toBlob()
//       .then((file) => {
//         const url = URL.createObjectURL(file);
//         window.open(url, "_blank");
//       })
//       .catch((error) => console.error("PDF Generation Error:", error));
//   };


//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h2 className="text-xl font-semibold mb-4">Assets Service Details</h2>

//       <div className="overflow-x-auto hidden md:block rounded-md">
//         <table className="w-full border-collapse border text-sm">
//           <thead>
//             <tr className="bg-[#0e86bdcf] text-white text-left">
//               <th className="border px-4 py-2">S.No</th>
//               <th className="border px-4 py-2">Service_Date</th>
//               <th className="border px-4 py-2">Technician_Name</th>
//               <th className="border px-4 py-2">Amount</th>
//               <th className="border px-4 py-2">Status</th>
//               <th className="border px-4 py-2">Attendee_Name</th>
//               <th className="border px-4 py-2">Attendee_Mob</th>
//               <th className="border px-4 py-2">Attendee_Sign</th>
//               <th className="border px-4 py-2">TDS_Before</th>
//               <th className="border px-4 py-2">TDS_After</th>
//               <th className="border px-4 py-2">Replaced_Items</th>
//               <th className="border px-4 py-2 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {serviceData.map((data, index) => (
//               <tr key={index} className="hover:bg-gray-50 text-gray-500">
//                 <td className="border px-4 py-2">{data.sNo}</td>
//                 <td className="border px-4 py-2">{data.date}</td>
//                 <td className="border px-4 py-2">
//                   {data.technicianName || "N/A"}
//                 </td>
//                 <td className="border px-4 py-2">{data.amount}</td>
//                 <td className="border px-4 py-2">{data.status}</td>
//                 <td className="border px-4 py-2">
//                   {data.attendeeName || "N/A"}
//                 </td>
//                 <td className="border px-4 py-2">
//                   {data.attendeeMob || "N/A"}
//                 </td>
//                 <td className="border px-4 py-2">
//                   {" "}
//                   <img src={data.attendeeSignature} alt="" />{" "}
//                 </td>
//                 <td className="border px-4 py-2">{data.tdsBefore}</td>
//                 <td className="border px-4 py-2">{data.tdsAfter}</td>
//                 <td className="border px-4 py-2">
//                   {data.replacedItems || "N/A"}
//                 </td>
//                 <td className="border px-4 py-2 text-center">
//                   <button
//                     onClick={() => handleOpenPdf(data)}

//                     className="text-[#0e86bdcf] border border-[#0e86bdcf] p-2 rounded-lg mr-2"
//                   >
//                     Open PDF
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="grid grid-cols-1 gap-4 p-4 md:hidden">
//         {serviceData.map((service) => (
//           <div
//             key={service.sNo}
//             className="bg-white border border-[#0e86bdcf] rounded-2xl shadow-lg p-4 hover:shadow-xl transition"
//           >
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 Service #{service.sNo}
//               </h3>
//               <button
//                 onClick={() => handleDownload(service)}
//                 className="text-[#0e86bdcf] border border-[#0e86bdcf] p-2 rounded-lg"
//               >
//                 Download 
//               </button>
//             </div>
//             <p className="text-sm text-gray-500 mb-1">
//               <span className="font-semibold">Date:</span> {service.date}
//             </p>
//             <p className="text-sm text-gray-500 mb-1">
//               <span className="font-semibold">Technician:</span>{" "}
//               {service.technicianName}
//             </p>
//             <p className="text-sm text-gray-500 mb-1">
//               <span className="font-semibold">Amount:</span> ${service.amount}
//             </p>
//             <p className="text-sm text-gray-500 mb-1">
//               <span className="font-semibold">Notes:</span>{" "}
//               {service.notes || "N/A"}
//             </p>
//             <p className="text-sm text-gray-500 mb-1">
//               <span className="font-semibold">Status:</span>{" "}
//               <span
//                 className={`px-2 py-1 text-xs rounded-full ${service.status === "Completed"
//                     ? "bg-green-100 text-green-700"
//                     : "bg-yellow-100 text-yellow-700"
//                   }`}
//               >
//                 {service.status}
//               </span>
//             </p>
//             <div className="border-t border-gray-200 my-3"></div>
//             <p className="text-sm text-gray-500 mb-1">
//               <span className="font-semibold">Attendee:</span>{" "}
//               {service.attendeeName}
//             </p>
//             <p className="text-sm text-gray-500 mb-1">
//               <span className="font-semibold">Mobile:</span>{" "}
//               {service.attendeeMob}
//             </p>
//             {service.attendeeSignature && (
//               <div className="mt-3">
//                 <span className="font-semibold text-gray-500">Signature:</span>
//                 <img
//                   src={service.attendeeSignature}
//                   alt="Signature"
//                   className="w-32 h-16 object-contain border border-gray-300 mt-1"
//                 />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <footer className="mt-6 text-center text-sm text-gray-500">
//         © 2025 - Rentro Group
//       </footer>
//     </div>
//   );
// };

// export default AssitServices;
