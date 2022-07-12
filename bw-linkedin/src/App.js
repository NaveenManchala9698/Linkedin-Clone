import "./App.css";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import CurrentProfile from "./components/CurrentProfile";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ProfileEdit from "./components/ProfileEdit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex hero-section">
        <div className="flex-grow-1">
          <Profile />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
      {/* <CurrentProfile /> */}
      <Footer />
    </div>
  );
}

export default App;
