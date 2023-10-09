"use client"

import React, { useState } from "react";
import './navbar.css';
import { animated, useSpring } from '@react-spring/web'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Initial path data for pathA, pathB, and pathC
  const initialPathA = "M 30 40 L 70 40 C 90 40 90 75 60 85 A 40 40 0 0 1 20 20 L 80 80";
  const initialPathB = "M 30 50 L 70 50";
  const initialPathC = "M 70 60 L 30 60 C 10 60 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20";

  const pathAProps = useSpring({
    from: { d: initialPathA },
    to: { d: isOpen ? 'M 8 32 L 70 40 C 90 40 90 25 60 15 A 40 40 0 0 1 20 80 L 80 20' : initialPathA },
    config: { tension: 280, friction: 30 },
  });

  const pathBProps = useSpring({
    from: { d: initialPathB },
    to: { d: isOpen ? 'M 30 50 L 70 50' : initialPathB },
    config: { tension: 280, friction: 30 },
  });

  const pathCProps = useSpring({
    from: { d: initialPathC },
    to: { d: isOpen ? 'M 70 60 L 30 60 C 10 60 10 80 40 85 A 40 38 0 1 1 20 20 L 80 80' : initialPathC },
    config: { tension: 280, friction: 30 },
  });


  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };

  return (
    <>
      <header className="main_header">
        <div className="col-container">
          <div className="logo">
            <h1>
              {" "}
              E-Commerce Development Company in Kochi, Kerala, India{" "}
              <a href="index.html">
                <svg
                  className=""
                  style={{ fill: "#ffffff" }}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="logo"
                  x="0px"
                  y="0px"
                  viewBox="0 0 94.5 24.8"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      className="st0"
                      d="M7.9,5.6c5.4,0,7.2,1.2,7.2,5.2c0,5.3-1.3,6-6.8,5.9H3.6c0.1,1.1,0.2,1.7,0.2,1.7c0.5,3.1,1.3,4.4,10.5,2.8   l0.5,2.4c0,0-2.7,1.1-7.3,1.1c-5.3,0-7.3-2.2-7.3-9.6C0.1,8.8,0.3,5.6,7.9,5.6z M7.7,13.8c3.8,0,4.3-0.2,4.3-2.4   c0-2.4-0.4-2.7-4.2-2.7c-3.3,0-4.3,0.7-4.3,3.5c0,0.6,0,1.1,0,1.6L7.7,13.8z"
                    />
                    <path
                      className="st0"
                      d="M19.5,0.1l4.4,20.2l4.3-20.2h3.1l4.4,20.2L40,0.1h3.3l-5.5,24.4l-4.4,0L29.9,7.9l-3.8,16.6h-4.5L16.1,0.1H19.5   z"
                    />
                    <path
                      className="st0"
                      d="M60.7,14.6c0,7.6-2.6,10.1-8.1,10.1c-6,0-8.3-2.2-8.3-10.1c0-6.8,2.8-9,8.3-9C58.1,5.6,60.7,7.9,60.7,14.6z    M57.2,14.6c0-5-1.2-5.8-4.6-5.8c-3.3,0-4.7,0.6-4.7,5.8c0,5.8,1.2,7.1,4.7,7.1C56,21.7,57.2,20.3,57.2,14.6z"
                    />
                    <path
                      className="st0"
                      d="M66.8,0.1V14l7.4-8.1h4.3l-7.6,8.2l8.4,10.3h-4.2l-6.5-8l-1.7,1.8v6.2h-3.5V0.1H66.8z"
                    />
                    <path
                      className="st0"
                      d="M87.3,5.6c5.4,0,7.2,1.2,7.2,5.2c0,5.3-1.3,6-6.8,5.9h-4.7c0.1,1.1,0.2,1.7,0.2,1.7c0.5,3.1,1.3,4.4,10.5,2.8   l0.5,2.4c0,0-2.7,1.1-7.3,1.1c-5.3,0-7.3-2.2-7.3-9.6C79.4,8.8,79.6,5.6,87.3,5.6z M87,13.8c3.8,0,4.3-0.2,4.3-2.4   c0-2.4-0.4-2.7-4.2-2.7c-3.3,0-4.3,0.7-4.3,3.5c0,0.6,0,1.1,0,1.6L87,13.8z"
                    />
                  </g>
                </svg>
              </a>
            </h1>
          </div>
          <div className="menu-toggle">
            <div id="menu-icon-wrapper" onClick={toggleMenu} className="menu-icon-wrapper">
              {/* <animated.svg className="menu-icon" width="100px" height="100px">
                <animated.path id="pathA" d={pathAProps.d} />
                <animated.path id="pathB" d={pathBProps.d} />
                <animated.path id="pathC" d={pathCProps.d} />
              </animated.svg> */}

<svg className="menu-icon" width="100px" height="100px">
  <path
    id="pathA"
    d="M 30 40 L 70 40 C 90 40 90 75 60 85 A 40 40 0 0 1 20 20 L 80 80"
  />
  <path id="pathB" d="M 30 50 L 70 50" />
  <path
    id="pathC"
    d="M 70 60 L 30 60 C 10 60 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20"
  />
</svg>

              <button id="menu-icon-trigger" className="menu-icon-trigger" />
            </div>
          </div>
          <div className={`main-menu ${isOpen ? 'open' : ''}`}>
            <div className="copyright">© 2012 - 2023</div>
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
                <a href="skype:ewokesoft?call" className="skype" target="_blank">
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
              <div className="col-container">
                <div className="menu-content">
                  <div className="menu-div">
                    <ul className="menu-list">
                      <li>
                        <span>1.</span>
                        <a href="about-us/index.html">
                          <span data-hover="About Us">About Us</span>
                        </a>
                      </li>
                      <li>
                        <span>2.</span>
                        <a href="services.1.html">
                          <span data-hover="Services">Services</span>
                        </a>
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
                      <li>
                        <span>6.</span>
                        <a href="blog/index.html">
                          <span data-hover="Blog">Blog</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-div">
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
                      <a href="mailto:mail@ewokesoft.com">mail@ewokesoft.com</a>
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

    </>
  );
};

export default Navbar;
