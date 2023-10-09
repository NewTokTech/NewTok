import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
 const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 right-0 bg-white p-4 bg-white  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            src=""
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
        </a>
        <div className="flex md:order-2 mt-3">
            <div className='flex '>
            <Image src="" alt="" className='mb-2' />
              <Image src="" alt="" className='ml-6'/>
            </div>
            <Link href="/" className="lg:block hidden">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 ml-5 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 border border-2 text-lg text-primary"
              >
                LOGIN
              </button>
            </Link>
          <button
            type="button"
            onClick={toggleMobileMenu} // Call the toggle function on button click
            className="ml-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'} // Set aria-expanded based on the state
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-primary  rounded md:bg-transparent md:text-secondary md:p-0 "
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 "
              >
                SHOP
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 "
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 "
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar