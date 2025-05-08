// import type { FC } from "react";
// import { Link } from "react-router-dom";

// interface Navbar {
//   title: string;
// }

// const Navbar: FC = () => {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
//       <div className="text-xl font-bold text-blue-600">MyApp</div>
//       <ul className="flex space-x-4">
//         <li>
//           <Link to="/" className="hover:text-blue-500">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="hover:text-blue-500">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="hover:text-blue-500">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use any icon library you prefer

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">BlogPost</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-500">
              Contact
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

      {/* Mobile Menu Links */}
      {isOpen && (
        <ul className="mt-4 flex flex-col space-y-2 md:hidden">
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
