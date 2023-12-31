"use client";

import React, { useEffect, useState } from "react";
import "./navbar.css";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import Logo from "../logo/Logo";
import {
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [logoColorChange, setLogoColorChange] = useState(false);

  const handleService = () => {
    setShowServices(!showServices);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeNav = () => {
    setIsOpen(false);
  };

  const first = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)",
  });
  const second = useSpring({
    transform: isOpen
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)",
  });
  const third = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)",
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      // Check if we've reached the bottom of the page
      if (windowHeight + scrollPosition >= documentHeight) {
        setLogoColorChange(true);
      } else {
        setLogoColorChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative z-[100]">
        <header className="main_header">
          <div className="col-container">
            <div className="logo">
              <h1>
                E-Commerce Development Company in Kochi, Kerala, India
                <Link href="/" onClick={closeNav}>
                  <Logo color={logoColorChange || isOpen ? "white" : "black"} />
                </Link>
              </h1>
            </div>
            <div className="menu-toggle">
              <div id="menu-icon-wrapper" className="menu-icon-wrapper">
                <svg
                  className={`menu-icon ${isOpen ? "fill-primary" : ""} ${
                    logoColorChange ? "fill-white" : ""
                  } transition-colors ease-in-out duration-1000`}
                  width="30px"
                  height="30px"
                  viewBox="0 0 44 44"
                  onClick={toggleMenu}
                >
                  <animated.rect width="40" height="4" rx="2" style={first} />
                  <animated.rect width="40" height="4" rx="2" style={second} />
                  <animated.rect width="40" height="4" rx="2" style={third} />
                </svg>

                <button
                  id="menu-icon-trigger"
                  className="menu-icon-trigger"
                  onClick={toggleMenu}
                ></button>
              </div>
            </div>
            <div className={`main-menu ${isOpen ? "open" : ""}`}>
              <div className="copyright">© 2003 - 2023</div>
              <ul className="social">
                <li>
                  <a
                    href="https://www.facebook.com/newtoktech/"
                    className="facebook"
                    target="_blank"
                  >
                    <RiFacebookFill />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/newtoktech"
                    className="instagram"
                    target="_blank"
                  >
                    <RiInstagramFill />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/newtok-technologies-pvt-ltd-india/"
                    className="linkedin"
                    target="_blank"
                  >
                    <RiLinkedinFill />
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/newtoktech"
                    className="twitter"
                    target="_blank"
                  >
                    <RiTwitterXFill />
                  </a>
                </li>
              </ul>
              <div className="lg:container">
                <div className={`col-container`}>
                  <div className="menu-content">
                    <div
                      className={`menu-div ${
                        showServices ? "open-service" : "close-service"
                      }`}
                    >
                      <ul className="menu-list">
                        <li>
                          <span>1.</span>
                          <Link onClick={closeNav} href="/about">
                            <span data-hover="About Us">About Us</span>
                          </Link>
                        </li>
                        <li className="relative font-sen">
                          <span>2.</span>
                          <a className="relative" onClick={handleService}>
                            <span data-hover="Services" className="">
                              Services
                             
                            </span>

                            <span className="absolute left-0 top-[-7px] scale-75">
                                {showServices ? (
                                  <AiOutlineCaretDown />
                                ) : (
                                  <AiOutlineCaretUp />
                                )}
                              </span>
                          </a>
                          <div className="lg:min-w-[700px]">
                            <div
                              className={`${
                                showServices
                                  ? "opacity-100 scale-100 translate-x-0"
                                  : "opacity-0 scale-0 -translate-x-72 absolute"
                              } transform transition-all ease-in-out duration-300 w-full`}
                            >
                              <div className="p-2 mb-10 w-full px-10">
                                <div className="flex flex-col justify-center xl:flex-row">
                                  <div className="xl:w-1/3 pt-2">
                                    <h2 className="text-xl font-bold text-primary">
                                      Digital Engineering
                                    </h2>
                                    <div className="list-service">
                                      <p>
                                        <Link
                                          onClick={closeNav}
                                          href={"/services/digital-engineering"}
                                        >
                                          Enterprise Solutions
                                        </Link>
                                      </p>
                                      <p>
                                        <Link
                                          onClick={closeNav}
                                          href={"/services/digital-engineering"}
                                        >
                                          Application Developement
                                        </Link>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="xl:w-1/3 pt-2 xl:pl-7">
                                    <h2 className="text-xl font-bold text-primary">
                                      AI / ML
                                    </h2>
                                    <div className="list-service">
                                      <p>
                                        <Link
                                          onClick={closeNav}
                                          href={"/services/data-ai"}
                                        >
                                          Advanced Analytics
                                        </Link>
                                      </p>
                                      <p>
                                        <Link
                                          onClick={closeNav}
                                          href={"/services/data-ai"}
                                        >
                                          Data Visualization
                                        </Link>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="xl:w-1/3 pt-2 xl:pl-5">
                                    <h2 className="text-xl font-bold text-primary">
                                      Experience
                                    </h2>
                                    <div className="list-service">
                                      <p className="hover:text-primary">
                                        <Link
                                          onClick={closeNav}
                                          href={"/services/digital-experience"}
                                        >
                                          UI/UX
                                        </Link>
                                      </p>
                                      <p className="hover:text-primary">
                                        <Link
                                          onClick={closeNav}
                                          href={"/services/digital-experience"}
                                        >
                                          Digital Commerce
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <span>3.</span>
                          <Link onClick={closeNav} href="/portfolio">
                            <span data-hover="Projects">Portfolio</span>
                          </Link>
                        </li>
                        <li>
                          <span>4.</span>
                          <Link onClick={closeNav} href="/careers">
                            <span data-hover="Clients">Careers</span>
                          </Link>
                        </li>
                        <li>
                          <span>5.</span>
                          <Link onClick={closeNav} href="/contact-us">
                            <span data-hover="Contact Us">Contact Us</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div
                      className={`${
                        !showServices
                          ? "opacity-100 translate-x-0 scale-100"
                          : "opacity-0 -translate-x-4 scale-0"
                      } transform transition-transform ease-in-out duration-300 contact-div`}
                    >
                      <div className="phone">
                        <h6>India</h6>
                        <a href="tel:+917012935874">+91 701 293 5874</a>
                      </div>

                      <div className="mail">
                        <h6>Projects</h6>
                        <a href="mailto:info@newtoktech.com">
                          info@newtoktech.com
                        </a>
                      </div>
                      <div className="mail">
                        <h6>Career</h6>
                        <a href="mailto:careers@newtoktech.com">
                          careers@newtoktech.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
