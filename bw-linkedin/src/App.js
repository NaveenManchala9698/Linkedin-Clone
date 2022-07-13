import "./App.css";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentProfile from "./components/CurrentProfile";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsFeedProfile from "./components/NewsFeedProfile";

import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
      <NewsFeedProfile />
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/*  <Route path="/" element={<Home />} /> */}
          {/* <CurrentProfile /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
