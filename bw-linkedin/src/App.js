import "./App.css";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentProfile from "./components/CurrentProfile";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsFeedProfile from "./components/NewsFeedProfile";
import UserProfilePage from "./components/Pages/UserProfilePage";
import Home from "./components/Pages/Home";
import ProfilePage from "./components/Pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/user/:userId" element={<UserProfilePage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
