import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "./Darkmode";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  return (
    <nav style={{ fontFamily: 'Roboto'}} className="bg-[#2e2e2e] text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center w-full">
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
          ) : ( // Ternaire pour afficher sois le hamburger ou la croix
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
        <ul className="hidden lg:flex lg:space-x-4 items-center">
          <li>
            <Link
              to="/"
              className={`block p-4 text-white z-100 hover:bg-[#4e4e4e] transition-all duration-500 ${location.pathname === '/' ? 'bg-[#b89e14]' : ''}`}  //ternaire pour changer la couleur de fond du lien actif
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/cv"
              className={`block p-4 text-white z-100 hover:bg-[#4e4e4e] transition-all duration-500 ${location.pathname === '/cv' ? 'bg-[#b89e14]' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              CV
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`block p-4 text-white z-100 hover:bg-[#4e4e4e] transition-all duration-500 ${location.pathname === '/contact' ? 'bg-[#b89e14]' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/projet"
              className={`block p-4 text-white z-100 hover:bg-[#4e4e4e] transition-all duration-500 ${location.pathname === '/projet' ? 'bg-[#b89e14]' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Projet
            </Link>
          </li>
          </ul>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded hover:bg-gray-700 ml-auto"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                  <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M24.90625,3.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v6c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-6c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM10.65625,9.84375c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l4.25,4.25c0.24219,0.29688 0.62891,0.43359 1.00391,0.34766c0.37109,-0.08594 0.66406,-0.37891 0.75,-0.75c0.08594,-0.375 -0.05078,-0.76172 -0.34766,-1.00391l-4.25,-4.25c-0.20703,-0.22266 -0.50781,-0.33594 -0.8125,-0.3125c-0.03125,0 -0.0625,0 -0.09375,0zM39.03125,9.84375c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-4.25,4.25c-0.29687,0.24219 -0.43359,0.62891 -0.34766,1.00391c0.08594,0.37109 0.37891,0.66406 0.75,0.75c0.375,0.08594 0.76172,-0.05078 1.00391,-0.34766l4.25,-4.25c0.3125,-0.29687 0.40234,-0.76172 0.21875,-1.15234c-0.1875,-0.39453 -0.60156,-0.62109 -1.03125,-0.56641zM24.90625,15c-0.03125,0.00781 -0.0625,0.01953 -0.09375,0.03125c-0.0625,0.00391 -0.125,0.01563 -0.1875,0.03125c-0.01172,0.01172 -0.01953,0.01953 -0.03125,0.03125c-5.30469,0.22656 -9.59375,4.54688 -9.59375,9.90625c0,5.50391 4.49609,10 10,10c5.50391,0 10,-4.49609 10,-10c0,-5.33984 -4.25391,-9.64453 -9.53125,-9.90625c-0.03516,0 -0.05859,-0.03125 -0.09375,-0.03125c-0.10156,-0.03906 -0.20703,-0.05859 -0.3125,-0.0625c-0.01953,0 -0.04297,0 -0.0625,0c-0.03125,0 -0.0625,0 -0.09375,0zM24.9375,17c0.01953,0 0.04297,0 0.0625,0c0.03125,0 0.0625,0 0.09375,0c4.375,0.05078 7.90625,3.61328 7.90625,8c0,4.42188 -3.57812,8 -8,8c-4.41797,0 -8,-3.57812 -8,-8c0,-4.39844 3.54688,-7.96484 7.9375,-8zM4.71875,24c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM38.71875,24c-0.55078,0.07813 -0.9375,0.58984 -0.85937,1.14063c0.07813,0.55078 0.58984,0.9375 1.14063,0.85938h6c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-6c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM15,33.875c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-4.25,4.25c-0.29687,0.24219 -0.43359,0.62891 -0.34766,1.00391c0.08594,0.37109 0.37891,0.66406 0.75,0.75c0.375,0.08594 0.76172,-0.05078 1.00391,-0.34766l4.25,-4.25c0.29688,-0.28516 0.38672,-0.72656 0.22656,-1.10547c-0.15625,-0.37891 -0.53516,-0.62109 -0.94531,-0.61328c-0.03125,0 -0.0625,0 -0.09375,0zM34.6875,33.875c-0.375,0.06641 -0.67578,0.33984 -0.78125,0.70313c-0.10547,0.36719 0.00391,0.75781 0.28125,1.01563l4.25,4.25c0.24219,0.29688 0.62891,0.43359 1.00391,0.34766c0.37109,-0.08594 0.66406,-0.37891 0.75,-0.75c0.08594,-0.375 -0.05078,-0.76172 -0.34766,-1.00391l-4.25,-4.25c-0.1875,-0.19922 -0.44531,-0.30859 -0.71875,-0.3125c-0.03125,0 -0.0625,0 -0.09375,0c-0.03125,0 -0.0625,0 -0.09375,0zM24.90625,37.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v6c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-6c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953z"></path></g></g>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )}
            </button>

      </div>
      <ul
        className={`lg:hidden lg:space-x-4 lg:static absolute top-16 left-0 w-full bg-[#2e2e2e] transition-all duration-300 z-50 ${
          isOpen ? "block" : "hidden" //ternaire pour afficher ou masquer le menu
        }`}
      >
        <li>
          <Link
            to="/"
            className={`block p-4 text-white z-100 hover:bg-[#4e4e4e] transition-all duration-1000 ${
            location.pathname === '/' ? 'bg-[#b89e14]' : ''}`}  //ternaire pour changer la couleur de fond du lien actif
            onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
        </li>
        <li>
          <Link
            to="/cv"
            className={`block p-4 text-white z-100 hover:bg-[#4e4e4e] ${
            location.pathname === '/cv' ? 'bg-[#b89e14]' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            CV
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`block p-4 text-white z-100 hover:bg-[#4e4e4e] ${
            location.pathname === '/contact' ? 'bg-[#b89e14]' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
          to="/projet"
          className={`block p-4 text-white z-100 hover:bg-[#4e4e4e] transition ${
          location.pathname === '/projet' ? 'bg-[#b89e14]' : ''}`}
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
