import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";
import Sponsore from "./pages/sponsore";
import Profile from "./pages/profile";
import CategoryBlog from "./pages/CategoryBlog";
import BlogPostDetail from "./pages/blogdetail";

function AppContent() {
  const location = useLocation();
  const hideLayoutRoutes = ["/login", "/register"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsore" element={<Sponsore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       <Route path="/category-blog" element={<CategoryBlog />} />
        <Route path="/category-blog/:category" element={<CategoryBlog />} />
        <Route path="/blogs/:id" element={<BlogPostDetail />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
