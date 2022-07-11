import "./App.css";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
import CurrentProfile from "./components/CurrentProfile";

import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return <div className="App">
    <Sidebar />
  </div>;

  return (
    <div className="App">

      <CurrentProfile />

      <Navbar />

    </div>
  );

}

export default App;
