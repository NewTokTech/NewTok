"use client";

import React, { useEffect, useState } from "react";
import "./navbar.css";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import Logo from "../logo/Logo";

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
      const scrollTop = window.scrollY;

      // Check if the user has scrolled close to the bottom
      if (documentHeight - scrollTop === windowHeight) {
        setLogoColorChange(true);
      } else {
        setLogoColorChange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <header className="main_header">
          <div className="col-container">
            <div className="logo">
              <h1>
                E-Commerce Development Company in Kochi, Kerala, India
                <Link href="/">
                  <Logo color={logoColorChange || isOpen ? 'white' : 'black'}/>
                </Link>
              </h1>
            </div>
            <div className="menu-toggle">
              <div id="menu-icon-wrapper" className="menu-icon-wrapper">
                <svg
                  className={`menu-icon ${
                    isOpen ? "fill-primary" : ""} ${logoColorChange ? 'fill-white' : ''} transition-colors ease-in-out duration-1000`}
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
                    href="https://www.facebook.com/ewokesoft/"
                    className="facebook"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ewoke_soft/"
                    className="instagram"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/ewokesoft/"
                    className="linkedin"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="skype:ewokesoft?call"
                    className="skype"
                    target="_blank"
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.pinterest.com/ewokesoft/_created/"
                    className="whatsapp"
                    target="_blank"
                  >
                    <i className="fa fa-pinterest" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <div className="container">
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
                          <a href="about-us/index.html">
                            <span data-hover="About Us">About Us</span>
                          </a>
                        </li>
                        <li className="relative">
                          <span>2.</span>
                          <a className="" onClick={handleService}>
                            <span data-hover="Services">Services</span>
                          </a>
                          <div className="w-full">
                            <div
                              className={`${
                                showServices
                                  ? "opacity-100 scale-100 translate-x-0"
                                  : "opacity-0 scale-0 -translate-x-72 absolute"
                              } transform transition-all ease-in-out duration-300 w-full`}
                            >
                              <div className="p-2 mb-10 px-10">
                                <div className="flex flex-col md:flex-row">
                                  {/* Heading 1 */}
                                  <div className="md:w-1/3 pt-2">
                                    <h2 className="text-xl font-bold text-primary">
                                      Digital Engineering
                                    </h2>
                                    <div className="list-service">
                                      <p><Link href={'/'}>Enterprise Solutions</Link></p>
                                      <p><Link href={'/'}>Application Developement</Link></p>
                                    </div>
                                  </div>

                                  {/* Heading 2 */}
                                  <div className="md:w-1/3 pt-2">
                                    <h2 className="text-xl font-bold text-primary">
                                      AI / ML
                                    </h2>
                                    <div className="list-service">
                                      <p><Link href={'/'}>Advanced Analytics</Link></p>
                                      <p><Link href={'/'}>Data Visualization</Link></p>

                                    </div>
                                  </div>

                                  {/* Heading 3 */}
                                  <div className="md:w-1/3 pt-2">
                                    <h2 className="text-xl font-bold text-primary">
                                      Experience
                                    </h2>
                                    <div className="list-service">
                                      <p className="hover:text-primary"><Link href={'/'} >UI/UX</Link></p>
                                      <p className="hover:text-primary"><Link href={'/'} >Digital Commerce</Link></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <span>3.</span>
                          <a href="projects/index.html">
                            <span data-hover="Projects">Projects</span>
                          </a>
                        </li>
                        <li>
                          <span>4.</span>
                          <a href="clients/index.html">
                            <span data-hover="Clients">Clients</span>
                          </a>
                        </li>
                        <li>
                          <span>5.</span>
                          <a href="https://www.ewokesoft.com/contact-us/">
                            <span data-hover="Contact Us">Contact Us</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                       className={`${
                        !showServices ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-4 scale-0'
                      } transform transition-transform ease-in-out duration-300 ease-in-out duration-300 contact-div`}
                    >
                      <div className="phone">
                        <h6>India</h6>
                        <a href="tel:+919072382964">+91 907 238 2964</a>
                        {/*<a href="tel:+919072323448">+91 907 232 3448</a>*/}
                      </div>
                      <div className="phone">
                        <h6>Canada</h6>
                        <a href="tel:+12049607672">+1 204 960 7672</a>
                      </div>
                      <div className="phone">
                        <h6>Middle East</h6>
                        <a href="tel:+96893861384">+968 93 861 384</a>
                      </div>
                      <div className="mail">
                        <h6>Projects</h6>
                        <a href="mailto:mail@ewokesoft.com">
                          mail@ewokesoft.com
                        </a>
                      </div>
                      <div className="mail">
                        <h6>Career</h6>
                        <a href="mailto:hr@ewokesoft.com">hr@ewokesoft.com</a>
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
