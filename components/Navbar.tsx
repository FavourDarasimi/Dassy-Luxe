"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {FaWhatsapp} from "react-icons/fa"


type Category = { _id: string; name: string };

const Navbar = ({ categories = [] }: { categories?: Category[] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?query=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
    }
  };

  // WhatsApp chat link format (you can replace with actual number if provided)
  const whatsappLink = "https://wa.me/1234567890?text=Hello%20DassyLuxe!";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:h-18 h-16">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <h1 className="md:text-2xl text-xl font-semibold tracking-tight text-gray-900 transition-colors duration-300">
              Dassy<span className="text-gray-500">Luxe</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
            >
              Shop
            </Link>
            
            {/* Category Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-black font-medium transition-colors duration-200 focus:outline-none"
                aria-expanded="false"
              >
                Categories
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-[0.2px] ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {categories.map((cat) => (
                    <Link
                      key={cat._id}
                      href={`/shop?category=${encodeURIComponent(cat.name)}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                      role="menuitem"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Desktop Search Bar */}
            <form onSubmit={handleSearch} className="relative hidden lg:flex items-center">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-56 xl:w-64 pl-4 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
              <button type="submit" className="absolute right-3 text-gray-400 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-[#25D366] hover:bg-[#1ebd5a] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
                        <FaWhatsapp className="w-6 h-6 mr-3 "/>
              
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Open State */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-fit opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-scroll bg-white border-t border-gray-100 shadow-lg absolute w-full`}
        id="mobile-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-2 sm:px-3 flex flex-col items-center">
          {/* Mobile Search Bar */}
          <form onSubmit={handleSearch} className="w-full relative mb-2">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-md text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition-all"
            />
            <button type="submit" className="absolute right-3 top-[50%] transform -translate-y-1/2 text-gray-400 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center w-full px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center w-full px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
          >
            Shop
          </Link>
          
          {/* Mobile Categories Dropdown */}
          <div className="w-full">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex justify-center items-center w-full px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
            >
              Categories
              <svg className={`ml-2 w-4 h-4 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isCategoryOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col items-center bg-gray-50 py-2 rounded-b-md">
                {categories.map((cat) => (
                  <Link
                    key={cat._id}
                    href={`/shop?category=${encodeURIComponent(cat.name)}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsCategoryOpen(false);
                    }}
                    className="block w-full text-center px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 shadow-md transition-colors"
          >
                      <FaWhatsapp className="w-6 h-6 mr-3 "/>
            
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
