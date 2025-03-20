import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from"../assets/renroLogo.png"


// const logo = require('../assets/renroLogo.png');
const PDFDocument = ({ data }) => (

    <Document>
    <Page size="A4" style={{ padding: 20, fontSize: 10, fontFamily: 'Helvetica' }}>
      {/* Header */}
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, borderBottom: '1px solid #000', paddingBottom: 10 }}>
        <Image src="/logo.png" style={{ width: 100 }} />
        <View style={{ textAlign: 'right' }}>
          <Text style={{ fontWeight: 'bold' }}>RENT RO ELECTRICAL & ELECTRONIC APPLIANCES RENTAL L.L.C</Text>
          <Text>Office No: 302, Al Thuraya Building, Bur Dubai - Dubai</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color:'red' }}>JOB CARD</Text>

      {/* Customer & Job Details */}
      <View style={{ marginBottom: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
          <Text><Text style={{ fontWeight: 'bold' }}>Customer ID:</Text> {data.customerId}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>Job ID:</Text> {data.jobId}</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
          <Text><Text style={{ fontWeight: 'bold' }}>Customer Name:</Text> {data.customerName}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>Job Type:</Text> {data.jobType}</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
          <Text><Text style={{ fontWeight: 'bold' }}>Branch Name:</Text> {data.branchName}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>Service Date:</Text> {data.serviceDate}</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
          <Text><Text style={{ fontWeight: 'bold' }}>Next Service :</Text> {data.nextServiceDate}</Text>
        </View>
      </View>

      {/* Product Details */}
      <View style={{ border: '1px solid #000', marginBottom: 10 }}>
        <View style={{ backgroundColor: '#ddd', padding: 5 }}>
          <Text style={{ fontWeight: 'bold' }}>Product Details</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 5 }}>
          <Text style={{ width: '50%' }}><Text style={{ fontWeight: 'bold' }}>Asset Code:</Text> {data.assetCode}</Text>
          <Text style={{ width: '50%' }}><Text style={{ fontWeight: 'bold' }}>Last Service:</Text> {data.lastService}</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', padding: 5 }}>
          <Text style={{ width: '50%' }}><Text style={{ fontWeight: 'bold' }}>Asset Name:</Text> {data.assetName}</Text>
          <Text style={{ width: '50%' }}><Text style={{ fontWeight: 'bold' }}>Product Type:</Text> {data.productType}</Text>
        </View>
      </View>

      {/* Parts Used Table */}
      <View style={{ border: '1px solid #000', marginBottom: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#ddd', padding: 5 }}>
          <Text style={{ width: '20%', fontWeight: 'bold' }}>Sl.</Text>
          <Text style={{ width: '30%', fontWeight: 'bold' }}>Item Code</Text>
          <Text style={{ width: '30%', fontWeight: 'bold' }}>Item Name</Text>
          <Text style={{ width: '10%', fontWeight: 'bold' }}>Qty</Text>
          <Text style={{ width: '10%', fontWeight: 'bold' }}>Rate</Text>
        </View>
        {data.parts.map((part, index) => (
          <View key={index} style={{ display: 'flex', flexDirection: 'row', padding: 5, borderBottom: '1px solid #000' }}>
            <Text style={{ width: '20%' }}>{index + 1}</Text>
            <Text style={{ width: '30%' }}>{part.code}</Text>
            <Text style={{ width: '30%' }}>{part.name}</Text>
            <Text style={{ width: '10%' }}>{part.qty}</Text>
            <Text style={{ width: '10%' }}>{part.rate}</Text>
          </View>
        ))}
      </View>

      {/* Quality Details */}
      <View style={{ border: '1px solid #000', marginBottom: 10 }}>
        <View style={{ backgroundColor: '#ddd', padding: 5 }}>
          <Text style={{ fontWeight: 'bold' }}>Quality Details</Text>
        </View>
        {data.quality.map((q, index) => (
          <View key={index} style={{ display: 'flex', flexDirection: 'row', padding: 5 }}>
            <Text style={{ width: '30%' }}>{q.type}</Text>
            <Text style={{ width: '35%' }}>Before: {q.before}</Text>
            <Text style={{ width: '35%' }}>After: {q.after}</Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={{ marginTop: 10, borderTop: '1px solid #000', paddingTop: 5, textAlign: 'center', fontSize: 10 }}>
        <Text>www.rentro.ae</Text>
        <Text>Service: +971506709963 | Sales: +971505828432</Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
