import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import "./App.css";
// import { Route } from "lucide-react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";
import Sponsore from "./pages/sponsore";
import Profile from "./pages/profile";
import Blog from "./pages/blog";
import Blogdetail from "./pages/blogdetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsore" element={<Sponsore />} />
          <Route path="/blogdetail" element={<Blogdetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
