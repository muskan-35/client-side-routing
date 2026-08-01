import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-14 mt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-center">
          RouteApp
        </h2>

        {/* Links */}
        <div className="flex justify-center gap-6 mt-4">
          <NavLink to="/" className="hover:text-gray-200">
            Home
          </NavLink>

          <NavLink to="/about" className="hover:text-gray-200">
            About
          </NavLink>

          <NavLink to="/services" className="hover:text-gray-200">
            Services
          </NavLink>

          <NavLink to="/contact" className="hover:text-gray-200">
            Contact
          </NavLink>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-6">
          © 2026 RouteApp. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;