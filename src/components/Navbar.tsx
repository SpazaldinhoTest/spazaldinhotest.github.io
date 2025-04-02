
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" }
  ];
  
  return (
    <nav className="py-6">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-lg font-medium">
          <span className="text-xl tracking-tight">Jane Doe</span>
        </Link>
        
        <div className="flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base transition-colors hover:text-cali-clay ${
                location.pathname === link.path 
                  ? "text-cali-clay" 
                  : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
