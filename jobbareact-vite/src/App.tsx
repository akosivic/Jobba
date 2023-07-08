import "./App.scss";
import Navbar from "./components/navbar/navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Footer from "./components/footer/footer";
import FindJobs from "./components/jobs/jobs";
import Register from "./components/register";

function App() {
  return (
    <div className="App">
      <Navbar title={"Jobba!"}></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
