import "./App.css";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentProfile from "./components/CurrentProfile";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ProfileEdit from "./components/ProfileEdit";

import MyExperience from "./components/MyExperience";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";


function App() {
  return (
    <div className="App">

      <Navbar />
      <div className="d-flex hero-section">
        <div className="flex-grow-1">
          <Profile />
          <MyExperience />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
      {/* <CurrentProfile /> */}
      <Footer />

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <CurrentProfile /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
