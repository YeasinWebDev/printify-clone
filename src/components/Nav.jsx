import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full shadow-lg mb-10">
      <div className="navbar w-[90%] md:w-[84%] lg:w-[90%] xl:w-[70%] 2xl:w-[60%] mx-auto text-gray-600 font-semibold">
        
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
              >
                <li><a href="/catalog">Catalog</a></li>
                <li tabIndex={0}>
                  <a>How it works</a>
                  <ul className="p-2">
                    <li><a href="/how-it-works/printify">How Printify Works</a></li>
                    <li><a href="/how-it-works/print-on-demand">Print On Demand</a></li>
                  </ul>
                </li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/blog">Blog</a></li>
                <li tabIndex={0}>
                  <a>Services</a>
                  <ul className="p-2">
                    <li><a href="/services/printify-studio">Printify Studio</a></li>
                    <li><a href="/services/printify-studio">Printify Studio</a></li>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a>Use-cases</a>
                  <ul className="p-2">
                    <li><a href="/use-cases/merch-for-fans">Merch for Fans</a></li>
                    <li><a href="/use-cases/merch-for-fans">Merch for Fans</a></li>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a>Need help</a>
                  <ul className="p-2">
                    <li><a href="/help/help-center">Help Center</a></li>
                    <li><a href="/help/merch-ecommerce">Merch for eCommerce</a></li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
          {/* Logo */}
          <img className="md:w-40 w-20 lg:w-40 xl:w-40 2xl:w-40" src="/assets/clone-logo.svg" alt="Logo" />
        </div>

        {/* Navbar Center - Desktop Menu */}
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1 text-[15px]">
            <li><a href="/catalog">Catalog</a></li>
            <li tabIndex={0}>
              <details>
                <summary>How it works</summary>
                <ul className="p-2 bg-white shadow-md">
                  <li><a href="/how-it-works/printify">How Printify Works</a></li>
                  <li><a href="/how-it-works/print-on-demand">Print On Demand</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/blog">Blog</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Services</summary>
                <ul className="p-2 bg-white shadow-md">
                  <li><a href="/services/printify-studio">Printify Studio</a></li>
                  <li><a href="/services/printify-studio">Printify Studio</a></li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Use-cases</summary>
                <ul className="p-2 bg-white shadow-md">
                  <li><a href="/use-cases/merch-for-fans">Merch for Fans</a></li>
                  <li><a href="/use-cases/merch-for-fans">Merch for Fans</a></li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Need help</summary>
                <ul className="p-2 bg-white shadow-md">
                  <li><a href="/help/help-center">Help Center</a></li>
                  <li><a href="/help/merch-ecommerce">Merch for eCommerce</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Navbar End - Buttons */}
        <div className="navbar-end space-x-2">
          <a href="/login" className="btn btn-outline">Login</a>
          <a href="/signup" className="btn bg-green-600 text-white hover:bg-green-500">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
