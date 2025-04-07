

// import React, { useState } from 'react';
// import { Dropdown } from 'primereact/dropdown';
// import { Button } from 'primereact/button';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { jsPDF } from 'jspdf';
// import { classNames } from 'primereact/utils';
// import logo from "../assets/renroLogo.png"

// const Invoice = () => {
//     const [selectedCustomer, setSelectedCustomer] = useState(null);
//     const customers = [
//         { name: 'M Purushotham Reddy' },
//         { name: 'John Doe' },
//         { name: 'Jane Smith' }
//     ];

//     const invoices = [
//         { date: '01-03-2025', month: 'Mar-2025', amount: '52.50' },
//         { date: '01-02-2025', month: 'Feb-2025', amount: '52.50' },
//         { date: '01-01-2025', month: 'Jan-2025', amount: '52.50' },
//         { date: '01-12-2024', month: 'Dec-2024', amount: '52.50' },
//         { date: '01-11-2024', month: 'Nov-2024', amount: '52.50' },
//         { date: '01-10-2024', month: 'Oct-2024', amount: '52.50' }
//     ];

//     const generatePDF = (invoice) => {
//         const doc = new jsPDF();

//         // Header Section
//         const margin = 5;
//         const pageWidth = doc.internal.pageSize.getWidth();
//         const tableWidth = pageWidth - 2 * margin;

//         // Add Logo
//         doc.addImage(logo, 'PNG', margin, 10, 40, 20); // Adjust logo position and size

//         // Add Company Info
//         doc.setFontSize(12);
//         doc.setFont('helvetica', 'bold');
//         doc.text("RENT RO ELECTRICAL & ELECTRONIC APPLIANCES RENTAL L.L.C", margin + 42, 20);

//         doc.setFontSize(10);
//         doc.setFont('helvetica', 'normal');
//         doc.text("Office No:302, Al Thuraya Building, Bur Dubai - Dubai", margin + 50, 30);

//         // Add Invoice Heading
//         doc.setFontSize(16);
//         doc.setFont('helvetica', 'bold');
//         doc.text('Tax Invoice', margin, 50);

//         // Add Invoice Details (Left Side)
//         doc.setFontSize(12);
//         doc.setFont('helvetica', 'normal');
//         doc.text(`Customer Name : ${selectedCustomer ? selectedCustomer.name : 'Customer Name'}`, margin, 60);
//         doc.text(`Invoice Date : ${invoice.date}`, margin, 68);
//         doc.text(`Invoice Month : ${invoice.month}`, margin, 76);

//         // Add Invoice Details (Right Side)
//         const rightAlign = pageWidth - margin - 50;
//         doc.setFont('helvetica', 'bold');
//         doc.setTextColor(255, 0, 0); // Red color for TRN
//         doc.text(`TRN : 100545436600003`, rightAlign, 60);
//         doc.setFont('helvetica', 'normal');
//         doc.setTextColor(0);
//         doc.text(`Invoice No : INV38529`, rightAlign, 68);

//         // Table Header
//         doc.setFillColor(220, 220, 220); // Light Gray Background
//         doc.rect(margin, 100, tableWidth, 10, 'F'); // Header background
//         doc.rect(margin, 100, tableWidth, 10); // Header border

//         doc.setFont('helvetica', 'bold');
//         doc.setTextColor(0);
//         doc.text('SINO', margin + 2, 107);
//         doc.text('Item Code', margin + 20, 107);
//         doc.text('Item Name', margin + 60, 107);
//         doc.text('Unit', margin + 110, 107);
//         doc.text('Rate', margin + 130, 107);
//         doc.text('Qty', margin + 150, 107);
//         doc.text('Amount', margin + 170, 107);

//         // Table Row
//         doc.setFont('helvetica', 'normal');
//         doc.setTextColor(0);
//         doc.rect(margin, 110, tableWidth, 10); // Row border
//         doc.text('1', margin + 2, 117);
//         doc.text('WL01010008', margin + 20, 117);
//         doc.text('ECO (Water Filter)', margin + 60, 117);
//         doc.text('Nos', margin + 110, 117);
//         doc.text('50.00', margin + 130, 117);
//         doc.text('1', margin + 150, 117);
//         doc.text('50.00', margin + 170, 117);

//         // Total Section (Aligned and Clean)
//         const totalStartY = 130;
//         const totalWidth = 80;

//         // Border and Background
//         doc.setFillColor(255, 255, 255);
//         doc.rect(pageWidth - margin - totalWidth, totalStartY, totalWidth, 30, 'F'); // Background
//         doc.rect(pageWidth - margin - totalWidth, totalStartY, totalWidth, 10); // Total Amount
//         doc.rect(pageWidth - margin - totalWidth, totalStartY + 10, totalWidth, 10); // Tax Amount
//         doc.rect(pageWidth - margin - totalWidth, totalStartY + 20, totalWidth, 10); // Net Amount

//         // Add Total Details
//         doc.setFont('helvetica', 'bold');
//         doc.setTextColor(0);
//         doc.text('Total Amount:', pageWidth - margin - totalWidth + 5, totalStartY + 7);
//         doc.text('Tax Amount:', pageWidth - margin - totalWidth + 5, totalStartY + 17);
//         doc.text('Net Amount:', pageWidth - margin - totalWidth + 5, totalStartY + 27);

//         doc.setFont('helvetica', 'normal');
//         doc.text('50.00', pageWidth - margin - 15, totalStartY + 7);
//         doc.text('2.50', pageWidth - margin - 15, totalStartY + 17);
//         doc.text('52.50', pageWidth - margin - 15, totalStartY + 27);

//         const pdfUrl = doc.output('bloburl');
//         window.open(pdfUrl, '_blank');
//     };

//     const downloadTemplate = (rowData) => (
//         <button 
//             className="text-[#0e86bdcf] border border-[#0e86bdcf] p-2 rounded-lg my-2" 
//             onClick={() => generatePDF(rowData)}
//         >
//             Download
//         </button>
//     );

//     return (
//         <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
//             <div className="bg-white w-full max-w-4xl rounded-lg shadow-[0px_-8px_38px_-9px_rgba(0,_0,_0,_0.1)] p-6">
//                 <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Customer Invoice</h1>
//                 <div className="flex items-center gap-4 mb-6 justify-center">
//                     <Dropdown
//                         value={selectedCustomer}
//                         options={customers}
//                         onChange={(e) => setSelectedCustomer(e.value)}
//                         optionLabel="name"
//                         placeholder="Select Customer"
//                         className="w-full sm:w-1/3 bg-gray-100 p-2"
//                         panelClassName='bg-gray-100 p-2'
//                     />
//                     <button label="Submit" className="p-button-primary px-6 py-2 text-white bg-[#0e86bdcf] rounded-lg" >Submit</button>
//                 </div>
//                 <DataTable 
//                     value={invoices} 
//                     className="p-datatable-gridlines border rounded-md text-gray-600 hidden md:block p-2" 
//                     paginator 
//                     rows={5} 
//                     rowsPerPageOptions={[5, 10, 20]} 
//                     responsiveLayout="scroll"
                    
//                 >
//                     <Column field="date" header="Date" className="text-left" />
//                     <Column field="month" header="Invoice Month" className="text-left" />
//                     <Column field="amount" header="Invoice Amount" className="text-left" />
//                     <Column body={downloadTemplate} header="Actions" className="text-left" />
//                 </DataTable>

//                 <div className="flex flex-col gap-4 md:hidden">
//                         {invoices.map((invoice, index) => (
//                             <div key={index} className="border border-gray-300 rounded-lg p-4 bg-[#80b2ca60] shadow-md">
//                                 <div className="flex justify-between items-center mb-2">
//                                     <span className="text-gray-800 font-semibold">{invoice.month}</span>
//                                     <button 
//                                         className=" text-[#0e86bdcf] border bg-white border-[#0e86bdcf] p-2 rounded-lg" 
//                                         onClick={() => generatePDF(invoice)}
//                                     >
//                                         Download
//                                     </button>
//                                 </div>
//                                 <div className="text-gray-600">
//                                     <p><span className="font-medium">Date:</span> {invoice.date}</p>
//                                     <p className='text-[#0e86bdcf] my-2'><span className="font-medium ">Amount:</span> ${invoice.amount}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 <div className="mt-4 flex justify-center">
//                     <p className="text-gray-500">© 2025 - Rentro Group</p>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default Invoice;







import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { jsPDF } from 'jspdf';
import { classNames } from 'primereact/utils';
import logo from "../assets/renroLogo.png"
import QRCode from 'qrcode';


const Invoice = () => {
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const customers = [
        { name: 'M Purushotham Reddy' },
        { name: 'John Doe' },
        { name: 'Jane Smith' }
    ];

    const invoices = [
        { date: '01-03-2025', month: 'Mar-2025', amount: '52.50' },
        { date: '01-02-2025', month: 'Feb-2025', amount: '52.50' },
        { date: '01-01-2025', month: 'Jan-2025', amount: '52.50' },
        { date: '01-12-2024', month: 'Dec-2024', amount: '52.50' },
        { date: '01-11-2024', month: 'Nov-2024', amount: '52.50' },
        { date: '01-10-2024', month: 'Oct-2024', amount: '52.50' }
    ];

    const generatePDF = async (invoice) => {
        const doc = new jsPDF();
    
        const margin = 10;
        const pageWidth = doc.internal.pageSize.getWidth();
        const tableWidth = pageWidth - 2 * margin;

          // === Generate QR Code ===
    const qrData = `Invoice Date: ${invoice.date}\nAmount: ${invoice.amount}\nInvoice No: INV38529`;
    const qrCodeDataUrl = await QRCode.toDataURL(qrData);
    
        // === Header Section ===
        // Logo
        doc.addImage(qrCodeDataUrl, 'PNG', pageWidth - margin - 20, 10, 20, 20);
        doc.addImage(logo, 'PNG', margin, 10, 40, 20);
    
        // Arabic + Company Info
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text("RENT RO ELECTRICAL & ELECTRONIC APPLIANCES RENTAL L.L.C", margin + 45, 15);
        doc.text("Office No:302, Al Thuraya Building, Bur Dubai - Dubai", margin + 45, 22);

       
    
        // TRN (Right Side)
        const rightAlign = pageWidth - margin - 50;
        doc.setFontSize(10);
        doc.setTextColor(255, 0, 0);
        doc.text("TRN : 100545436600003", rightAlign, 38);
        doc.setTextColor(0);
    
        // Tax Invoice Heading (Center)
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('Tax Invoice', pageWidth / 2, 35, { align: 'center'});
    
        // === Bill To Section ===
        const billToStartY = 45;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
    
        // Left Side (Customer Details)
        doc.text(`Customer ID : 12022V009`, margin, billToStartY);
        doc.text(`Customer Name : ${selectedCustomer ? selectedCustomer.name : 'Customer Name'}`, margin, billToStartY + 6);
        doc.text(`Contact Person : N/A`, margin, billToStartY + 12);
        doc.text(`Contact : (+971)-569-032637`, margin, billToStartY + 18);
        doc.text(`Customer TRN : `, margin, billToStartY + 24);
    
        // Right Side (Invoice Details)
        doc.text(`Invoice No : INV38529`, rightAlign, billToStartY + 2);
        doc.text(`Invoice Date : ${invoice.date}`, rightAlign, billToStartY + 8);
        doc.text(`Invoice Month : ${invoice.month}`, rightAlign, billToStartY + 14);
        doc.text(`Due Date : 05-10-2023`, rightAlign, billToStartY + 20);
    
        // === Table Header ===
        const tableStartY = billToStartY + 30;
        doc.setFillColor(220, 220, 220);
        doc.rect(margin, tableStartY, tableWidth, 10, 'F');
        doc.setFont('helvetica', 'bold');
        doc.text('SINO', margin + 2, tableStartY + 7);
        doc.text('Item Code', margin + 20, tableStartY + 7);
        doc.text('Item Name', margin + 60, tableStartY + 7);
        doc.text('Unit', margin + 110, tableStartY + 7);
        doc.text('Rate', margin + 130, tableStartY + 7);
        doc.text('Qty', margin + 150, tableStartY + 7);
        doc.text('Amount', margin + 170, tableStartY + 7);
    
        // === Table Row ===
        const rowStartY = tableStartY + 10;
        doc.rect(margin, rowStartY, tableWidth, 10);
        doc.setFont('helvetica', 'normal');
        doc.text('1', margin + 2, rowStartY + 7);
        doc.text('WL01010008', margin + 20, rowStartY + 7);
        doc.text('ECO (Water Filter)', margin + 60, rowStartY + 7);
        doc.text('Nos', margin + 110, rowStartY + 7);
        doc.text('30.00', margin + 130, rowStartY + 7);
        doc.text('1', margin + 150, rowStartY + 7);
        doc.text('30.00', margin + 170, rowStartY + 7);
    
        // === Total Section ===
        const totalStartY = rowStartY + 10;
        const totalWidth = 80;
        const totalX = pageWidth - margin - totalWidth;
    
        doc.rect(totalX, totalStartY, totalWidth, 10);
        doc.rect(totalX, totalStartY + 10, totalWidth, 10);
        doc.rect(totalX, totalStartY + 20, totalWidth, 10);
    
        doc.setFont('helvetica', 'bold');
        doc.text('Total Amount:', totalX + 5, totalStartY + 7);
        doc.text('Tax Amount:', totalX + 5, totalStartY + 17);
        doc.text('Net Amount:', totalX + 5, totalStartY + 27);
    
        doc.setFont('helvetica', 'normal');
        doc.text('30.00', totalX + 50, totalStartY + 7);
        doc.text('1.50', totalX + 50, totalStartY + 17);
        doc.text('31.50', totalX + 50, totalStartY + 27);
    
        // Amount in Words
        doc.rect(margin, totalStartY + 30, 190, 10);
        doc.rect(margin, totalStartY + 40, 190, 10);
     
     
        doc.text(' Amount in words (AED) : Thirty-One Dirhams and Fifty Fils Only.', margin,  totalStartY + 36);
        doc.text(' **Please note this an auto generated system incoice**', margin+45,  totalStartY + 46);
        // doc.line(margin, totalStartY + 44, pageWidth - margin, totalStartY + 44);
      
    
        // Footer Line
        doc.setDrawColor(0);
        doc.line(margin, totalStartY + 150, pageWidth - margin, totalStartY + 150);

       
    
        // Footer QR Code, Contact & Website
        const footerStartY = totalStartY + 160;
        doc.addImage(logo, 'PNG', margin, footerStartY, 20, 20);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(32)
        doc.setTextColor(255, 0, 0);
        doc.text('www.rentro.ae', margin + 40, footerStartY + 10);
    
        doc.setFontSize(10);
        doc.setTextColor(0);
        doc.text('Service: +971506709963', margin + 40, footerStartY + 18);
        doc.text('Sales: +971505828432', margin + 90, footerStartY + 18);
    
        // Page Number & Doc No.
        doc.setFontSize(8);
        doc.text('1', pageWidth - margin - 10, footerStartY + 10);
        doc.text('Page 1/', pageWidth - margin - 20, footerStartY + 10);
        doc.text('Doc No:', pageWidth - margin - 40, footerStartY + 18);
    
        // Open PDF
        const pdfUrl = doc.output('bloburl');
        window.open(pdfUrl, '_blank');
    };
    

    const downloadTemplate = (rowData) => (
        <button 
            className="text-green-700 border border-green-700 bg-green-100 hover:bg-green-200  p-2 rounded-lg my-2" 
            onClick={() => generatePDF(rowData)}
        >
            Download
        </button>
    );

    return (
        <div className="p-2 bg-gray-50 min-h-screen flex flex-col items-center ">
            <div className="bg-white w-full max-w-5xl rounded-lg shadow-[0px_-8px_38px_-9px_rgba(0,_0,_0,_0.1)] p-2 ">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Customer Invoice</h1>
                <div className="flex items-center gap-4 mb-6 justify-center">
                    <Dropdown
                        value={selectedCustomer}
                        options={customers}
                        onChange={(e) => setSelectedCustomer(e.value)}
                        optionLabel="name"
                        placeholder="Select Customer"
                        className="w-full sm:w-1/3 bg-gray-100 p-2"
                        panelClassName='bg-gray-100 p-2'
                    />
                    <button label="Submit" className="p-button-primary px-6 py-2 text-white bg-[#0e86bdcf] rounded-lg" >Submit</button>
                </div>
                <DataTable
    value={invoices}
    className="p-datatable-gridlines border rounded-md text-gray-600 hidden md:block p-4 m-2"
    // paginator
    rows={5}
    // rowsPerPageOptions={[5, 10, 20]}
    responsiveLayout="scroll"
>
    {/* Date Column */}
    <Column 
        field="date" 
        header="Date" 
        headerClassName="text-left bg-[#0e86bd1a] text-[#0e86bdcf] p-2" 
        bodyClassName="text-left text-sm font-semibold"
    />

    {/* Invoice Month Column */}
    <Column 
        field="month" 
        header="Invoice Month" 
        headerClassName="text-left bg-[#0e86bd1a] text-[#0e86bdcf] p-2" 
        bodyClassName="text-left text-sm font-semibold"
    />

    {/* Invoice Amount Column */}
    <Column 
        field="amount" 
        header="Invoice Amount" 
        headerClassName="text-left bg-[#0e86bd1a] text-[#0e86bdcf] p-2" 
        bodyClassName="text-left text-sm font-semibold"
    />

    {/* Actions Column */}
    <Column 
        body={downloadTemplate} 
        header="Actions" 
        headerClassName="text-left bg-[#0e86bd1a] text-[#0e86bdcf] p-2" 
        bodyClassName="text-left text-sm font-semibold"
    />
</DataTable>




                <div className="flex flex-col gap-4 md:hidden w-full">
                        {invoices.map((invoice, index) => (
                            <div key={index} className="border border-gray-300 rounded-lg p-4 bg-[#80b2ca60] shadow-md w-full mx-auto">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-800 font-semibold">{invoice.month}</span>
                                    <button 
                                        className=" text-[#0e86bdcf] border bg-white border-[#0e86bdcf] p-2 rounded-lg" 
                                        onClick={() => generatePDF(invoice)}
                                    >
                                        Download
                                    </button>
                                </div>
                                <div className="text-gray-600">
                                    <p><span className="font-medium">Date:</span> {invoice.date}</p>
                                    <p className='text-[#0e86bdcf] my-2'><span className="font-medium ">Amount:</span> ${invoice.amount}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                <div className="mt-4 flex justify-center">
                    <p className="text-gray-500">© 2025 - Rentro Group</p>
                </div>
            </div>


            <style jsx>{`
    /* Styling for rows per page dropdown */
    .p-paginator .p-dropdown {
        background-color: white !important;

        color: #0e86bdcf;
        padding: 2px !important;
        margin-left:40px ;
        border: 1px solid #0e86bdcf;
        border-radius: 4px;
       
    
    }
    .p-paginator .p-dropdown .p-dropdown-label {
        color: #333;
        margin-right:10px ;
        margin-left:4px
    }
    .p-paginator .p-dropdown .p-dropdown-trigger {
        color: #333;
        margin-right:10px ;
    }

    /* Styling for dropdown options list */
    .p-dropdown-panel {
        background-color: white !important;
        /* border: 1px solid #ccc !important; */
        color: #333 !important;
        padding: 2px !important;
    }
    .p-dropdown-item {
        background-color: white !important;
        color: #333 !important;
        padding: 2px !important;
    }
    .p-dropdown-item:hover {
        background-color: #f0f0f0 !important;
        color: #000 !important;
    }
`}</style>

        </div>

    );
};

export default Invoice;

