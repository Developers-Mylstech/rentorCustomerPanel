import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Payment from "./Pages/Payment";
import ServiceHistory from "./Pages/ServicesHistory";
import Invoice from "./Pages/Invoice";
import Paynow from "./Pages/Paynow";
import NewComplaint from "./Pages/NewComplaint";
import SosHistory from "./Pages/SosHistory";
import AssitServices from "./Pages/AssitServices";
import Login from "./Pages/Login";
import Layout from "./Components/Layout";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  const [isTokenValid, setIsTokenValid] = useState(false);

  return (
    <Router>
      <Routes>
        {/* If token is valid, show protected routes */}
        {isTokenValid ? (
          <>
            <Route path="/" element={<Layout />}>
              <Route index  element={<Dashboard />} /> {/* Default route */}
              <Route path="payment" element={<Payment />} />
              <Route path="service-history" element={<ServiceHistory />} />
              <Route path="invoice" element={<Invoice />} />
              <Route path="paynow" element={<Paynow />} />
              <Route path="complaint" element={<NewComplaint />} />
              <Route path="soshistory" element={<SosHistory />} />
              <Route path="assitservices" element={<AssitServices />} />
              <Route path="*" element={<Dashboard />} />
            </Route>
          </>
        ) : (
          <>
            {/* If token is invalid, show login route only */}
            <Route path="/login" element={<Login setIsTokenValid={setIsTokenValid} />} />
            <Route path="*" element={<Login setIsTokenValid={setIsTokenValid} />} />
            <Route path="/forgotpassword" element={<ForgotPassword  />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
