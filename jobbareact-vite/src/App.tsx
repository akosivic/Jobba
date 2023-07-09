import "./App.scss";
import Navbar from "./components/navbar/navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer/footer";
import Register from "./components/register";
import SignUp from "/src/pages/signup/signup";
import Login from "/src/pages/login/login";
import FindJobs from "/src/pages/findjobs/findjobs";
import JobSeeker from "/src/pages/jobseeker/jobseeker";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findjobs" element={<FindJobs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobseeker/" element={<JobSeeker />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
