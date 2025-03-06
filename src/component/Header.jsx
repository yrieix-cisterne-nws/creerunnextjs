import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={{ fontFamily: 'Roboto'}} className="bg-[#2e2e2e] text-white p-4 relative">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">
          Accueil
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden block text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="30"
              height="30"
              strokeWidth="2"
            >
              <path d="M18 6L6 18"></path>
              <path d="M6 6L18 18"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="30"
              height="30"
              strokeWidth="2"
            >
              <path d="M4 6h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      <ul
        className={`lg:flex lg:space-x-4 lg:static absolute top-16 left-0 w-full bg-[#2e2e2e] transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link
            to="/cv"
            className="block p-4 text-white hover:bg-[#4e4e4e] z-100"
            onClick={() => setIsOpen(false)}
          >
            CV
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block p-4 text-white hover:bg-[#4e4e4e] z-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
          to="/projet"
          className="block p-4 text-white hover:bg-[#4e4e4e] z-100"
          onClick={() => setIsOpen(false)}
          >
            Projet
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
