import "./App.css";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentProfile from "./components/CurrentProfile";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsFeedProfile from "./components/NewsFeedProfile";

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
          {/* <CurrentProfile /> */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
