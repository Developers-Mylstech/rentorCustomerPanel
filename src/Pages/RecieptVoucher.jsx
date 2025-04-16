import { jsPDF } from "jspdf";
import logo from "../assets/renroLogo.png"; 

const ReceiptVoucher = () => {
  const data = {
    customerId: "120202M0126",
    name: "M Purushotham Reddy",
    contactPerson: "N/A",
    address: "N/A",
    paymentDate: "N/A",
    dueDate: "N/A",
    amount: "52.50",
    amountInWords: "Fifty Two Dirhams and Fifty Fils Only",
    receiptNo: "#105023901",
    trn: "10054534660003",
    docNo: "1",
    pageNo: "1",
  };

  const handleDownload = () => {
    const doc = new jsPDF("p", "pt", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const marginLeft = 40;
    const startY = 40;
    const lineSpacing = 18;

    // 1) Add Logo
    doc.addImage(logo, "PNG", marginLeft, startY, 60, 30);

    // 2) Company Title and Address
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(
      "RENT RO ELECTRICAL & ELECTRONIC APPLIANCES RENTAL L.L.C",
      marginLeft + 70,
      startY + 10
    );
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Office No:302, Al Thuraya Building, Bur Dubai - Dubai",
      marginLeft + 70,
      startY + 25
    );

    // 3) Receipt Voucher Heading
    doc.setFontSize(16);
doc.setFont("helvetica", "bold");
doc.text("RECEIPT VOUCHER", pageWidth / 2, startY + 60, { align: "center" });

    // 4) Draw a line under heading
    doc.setDrawColor(0, 0, 0);
    doc.line(marginLeft, startY + 70, pageWidth - marginLeft, startY + 70);

    // 5) Left Column (Customer Info)
    let currentY = startY + 90;
    doc.setFontSize(10);

    doc.setFont("helvetica", "bold");
    doc.text("Customer ID :", marginLeft, currentY);
    doc.setFont("helvetica", "normal");
    doc.text(`${data.customerId}`, marginLeft + 80, currentY);

    currentY += lineSpacing;
    doc.setFont("helvetica", "bold");
    doc.text("Name :", marginLeft, currentY);
    doc.setFont("helvetica", "normal");
    doc.text(`${data.name}`, marginLeft + 80, currentY);

    currentY += lineSpacing;
    doc.setFont("helvetica", "bold");
    doc.text("Contact Person :", marginLeft, currentY);
    doc.setFont("helvetica", "normal");
    doc.text(`${data.contactPerson}`, marginLeft + 80, currentY);

    currentY += lineSpacing;
    doc.setFont("helvetica", "bold");
    doc.text("Address :", marginLeft, currentY);
    doc.setFont("helvetica", "normal");
    doc.text(`${data.address}`, marginLeft + 80, currentY);

    currentY += lineSpacing;
    doc.setFont("helvetica", "bold");
    doc.text("Payment Date :", marginLeft, currentY);
    doc.setFont("helvetica", "normal");
    doc.text(`${data.paymentDate}`, marginLeft + 80, currentY);

    // 6) Right Column
    let rightColumnX = pageWidth / 2 + 50;
    let rightColumnY = startY + 90;

    doc.setFont("helvetica", "bold");
    doc.text("Receipt # :", rightColumnX, rightColumnY);
    doc.setFont("helvetica", "normal");
    doc.text(`${data.receiptNo}`, rightColumnX + 80, rightColumnY);

    rightColumnY += lineSpacing;
    doc.setFont("helvetica", "bold");
    doc.text("Due Date :", rightColumnX, rightColumnY);
    doc.setFont("helvetica", "normal");
    doc.text(`${data.dueDate}`, rightColumnX + 80, rightColumnY);

    rightColumnY += lineSpacing;
    doc.setFont("helvetica", "bold");
    doc.text("TRN :", rightColumnX, rightColumnY);
    doc.setFont("helvetica", "normal");
    doc.text(`${data.trn}`, rightColumnX + 80, rightColumnY);

    // 7) Amount Section - Draw a box and place text inside
    currentY += lineSpacing * 2; // move further down for the box
    const boxWidth = 300; // adjust as needed
    const boxHeight = 50; // adjust as needed
// Center the box
const boxX = (pageWidth - boxWidth) / 2; 

    doc.setLineWidth(1);
    doc.rect(marginLeft, currentY, boxWidth, boxHeight);

    // Text inside the box (bold)
    doc.setFont("helvetica", "bold");
    doc.text(`Amount (AED): ${data.amount}`, marginLeft + 10, currentY + 14);

    // Below the box - Amount in Words
    currentY += boxHeight + 10; // move down after box
    doc.setFont("helvetica", "normal");
    doc.text(`${data.amountInWords}`, marginLeft, currentY);

    // 8) Footer (Bottom)
    const footerY = 760; // Adjust as needed
    doc.setDrawColor(0, 0, 0);
    doc.line(marginLeft, footerY, pageWidth - marginLeft, footerY);

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 0, 0);
    doc.text("www.rentro.ae", marginLeft, footerY + 20);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text("Service #: +971506709963", marginLeft, footerY + 35);
    doc.text("Sales #: +971505828432", marginLeft + 150, footerY + 35);

    // Doc No & Page Info
    doc.setFont("helvetica", "bold");
    doc.text(`Doc No: ${data.docNo}`, pageWidth - marginLeft - 50, footerY + 20);
    doc.text(`Page ${data.pageNo}`, pageWidth - marginLeft - 50, footerY + 35);

    // Open PDF in new tab
    const pdfUrl = doc.output("bloburl");
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* <h2 className="text-xl font-semibold mb-4">Receipt Voucher</h2> */}
      <button
        onClick={handleDownload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Download Receipt
      </button>
    </div>
  );
};

export default ReceiptVoucher;
