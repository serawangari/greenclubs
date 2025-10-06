import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/greenclubs/images/leafscape.png"
          alt="Leafscape Logo"
          className="w-10 h-10 drop-shadow-lg"
        />
        <span className="text-2xl font-bold text-white drop-shadow-lg">
          Leafscape
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-lg font-semibold">
        {[
          { path: "/", name: "Home" },
          { path: "/about", name: "About" },
          { path: "/sponsors", name: "Sponsors" },
          { path: "/pathways", name: "Pathways" },
          { path: "/leaderboard", name: "Leaderboard" },
          { path: "/blog", name: "Blog" },
        ].map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                : "text-white hover:text-yellow-300 transition drop-shadow-lg"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* CTA */}
      <NavLink
        to="/join"
        className="ml-6 px-4 py-2 bg-yellow-400 text-green-900 font-bold rounded-lg shadow hover:bg-yellow-500 transition"
      >
        Join Us
      </NavLink>
    </nav>
  );
}
