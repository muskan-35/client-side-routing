import { useState } from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-white shadow-md sticky top-0 z-50 bg-blue-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Route<span className="text-yellow-300">App</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
            isActive
              ? "text-yellow-300 border-b-2 border-yellow-300 font-semibold pb-1"
              : "text-white hover:text-gray-200"
          }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
            isActive
              ? "text-yellow-300 border-b-2 border-yellow-300 font-semibold pb-1"
              : "text-white hover:text-gray-200"
          }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
            isActive
              ? "text-yellow-300 border-b-2 border-yellow-300 font-semibold pb-1"
              : "text-white hover:text-gray-200"
          }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
            isActive
              ? "text-yellow-300 border-b-2 border-yellow-300 font-semibold pb-1"
              : "text-white hover:text-gray-200"
          }
          >
            Contact
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-blue-700 px-6 py-4 space-y-4">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;