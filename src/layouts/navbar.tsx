import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Left - Logo */}
        <div className="text-xl font-bold text-blue-600">BlogPost</div>

        {/* Center - Menu (desktop) */}
        <ul className="hidden md:flex space-x-6 font-semibold text-gray-800">
          <li>
            <a
              href="/"
              className="relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className="relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/sponsore"
              className="relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Sponsore
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="relative hover:text-blue-600 transition duration-300 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right - Auth links (desktop) with circle bg */}
        <ul className="hidden md:flex space-x-4 text-center">
          <li>
            <a
              href="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-300"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-300"
            >
              Register
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-600 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-4 flex flex-col space-y-2 md:hidden font-semibold">
          <li>
            <a href="/" className="hover:text-blue-500 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-blue-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className="hover:text-blue-500 transition duration-300"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="hover:text-blue-500 transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/sponsore"
              className="hover:text-blue-500 transition duration-300"
            >
              Sponsore
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </li>

          <li className="flex flex-col space-y-2">
            <a
              href="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-300 w-full text-center"
            >
              Login
            </a>
            <a
              href="/register"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-300 w-full text-center"
            >
              Register
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
