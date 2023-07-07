import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Header from "./components/Header";
import { AuthContextProvider } from "./components/AuthContext";
import './index.css';
import EmailComposer from "./components/EmailComposer";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import { db } from "./index";
import Sidebar from "./components/Sidebar";
import Sent from "./components/Sent";

const App = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <AuthContextProvider>
      <Router>
        <div className="App"> </div>
          <Header />
          <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="/signup" element={<AuthForm />} />
            <Route path="/login" element={<AuthForm />} />
            
          </Routes>
          <div className="app__body">
          <Sidebar emails={emails} /> 
              <Routes>
                <Route path="/mail" element={<Mail />} />
                <Route path="/email-composer" element={<EmailComposer />} />
                <Route path="/inbox" element={<Inbox emails={emails} />} />
                <Route path="/sent" element={<Sent emails={emails} />} />
              </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
};

export default App;

