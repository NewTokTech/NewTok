"use client";

import React, { useEffect, useState } from "react";
import "./footer.css";
import {
  RiTwitterXFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollDuration = 1000; // Duration of the scroll animation in milliseconds
    const start = window.scrollY;
    const startTime = performance.now();

    const scroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const t = Math.min(1, elapsedTime / scrollDuration);
      const scrollTo = start - start * t;

      window.scrollTo(0, scrollTo);

      if (t < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <footer className="main-footer h-screen">
        <div className="copyright">© 2003 - 2023</div>
        <button className="go-to-top" onClick={scrollToTop}>
          scroll up
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 477.886 477.886"
            style={{ backgroundColor: "new 0 0 477.886 477.886" }}
            xmlSpace="preserve"
            className="arrow"
          >
            <g>
              <g>
                <path
                  style={{ fill: "#eaeaea" }}
                  d="M476.091,231.332c-1.654-3.318-4.343-6.008-7.662-7.662L24.695,1.804C16.264-2.41,6.013,1.01,1.8,9.442    c-1.185,2.371-1.801,4.986-1.8,7.637v443.733c-0.004,9.426,7.633,17.07,17.059,17.075c2.651,0.001,5.266-0.615,7.637-1.8    L468.429,254.22C476.865,250.015,480.295,239.768,476.091,231.332z"
                />
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 409.6 409.6"
            style={{ backgroundColor: "new 0 0 409.6 409.6" }}
            xmlSpace="preserve"
            className="first-line"
          >
            <g>
              <g>
                <path
                  style={{ fill: "#eaeaea" }}
                  d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467    c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"
                />
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 409.6 409.6"
            style={{ backgroundColor: "new 0 0 409.6 409.6" }}
            xmlSpace="preserve"
            className="second-line"
          >
            <g>
              <g>
                <path
                  style={{ fill: "#eaeaea" }}
                  d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467    c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"
                />
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </button>
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
        <div className="container">
          <div className="row col-container address flex">
            <div className="inline col-3">
              <div className="address-div">
                <h5 className="address-title">
                  Newtok <span>India</span>
                </h5>
                <p>
                  Newtok Technologies Pvt Ltd.
                  <br />
                  Malappuram
                  <br />
                  Kerala, India
                </p>
                <span className="flex phone-number gap-2">
                  <BiSolidPhoneCall />{" "}
                  <a href="tel:+917012935874"> +91 7012935874</a>{" "}
                </span>
              </div>
            </div>
            <div className="col-3 hidden lg:inline">
              <div className="address-div">
                <h5 className="address-title">
                  Newtok <span>India</span>
                </h5>
                <p >
                  Newtok Technologies Pvt Ltd.
                  <br />
                  Malappuram
                  <br />
                  Kerala, India
                </p>
                <span className="flex phone-number gap-2"><BiSolidPhoneCall />  <a href="tel:+917012935874"> +91 7012935874</a> </span>
              </div>
            </div>
            <div className="hidden lg:inline col-3">
              <div className="address-div">
                <h5 className="address-title">
                  Newtok <span>India</span>
                </h5>
                <p >
                  Newtok Technologies Pvt Ltd.
                  <br />
                  Malappuram
                  <br />
                  Kerala, India
                </p>
                <span className="flex phone-number gap-2"><BiSolidPhoneCall />  <a href="tel:+917012935874"> +91 7012935874</a> </span>
              </div>
            </div>
          </div>
          <div className="px-4 text-white justify-between w-full lg:flex hidden">
            <div className="it-services ">
              <h2 className="text-primary text-xl font-bold mb-4">
                IT SERVICES
              </h2>
              <div className="hidden md:block lg:flex justify-between gap-x-20">
                {/* Left Column on Larger Screens */}
                <div className="md:w-1/2 ">
                  <ul className="space-y-4">
                    <li className="hover:text-primary list-item">
                      <Link href="/">Mobile Application Development</Link>
                    </li>
                    <li className="hover:text-primary list-item">
                      <Link href="/">Embedded Software Development</Link>
                    </li>
                    <li className="hover:text-primary list-item">
                      <Link href="/">Mac OSX Application Development</Link>
                    </li>
                    <li className="hover:text-primary list-item">
                      <Link href="/">Cloud-based Application Development</Link>
                    </li>
                  </ul>
                </div>

                {/* Right Column on Larger Screens */}
                <div className="md:w-1/2 mt-4 md:mt-0">
                  <ul className="space-y-4">
                    <li className="hover:text-primary list-item">
                      <Link href="/">Windows Application Development</Link>
                    </li>
                    <li className="hover:text-primary list-item">
                      <Link href="/">Cross-Platform Development</Link>
                    </li>
                    <li className="hover:text-primary list-item">
                      <Link href="/">Web-based Application Development</Link>
                    </li>
                    <li className="hover:text-primary list-item">
                      <Link href="/">Internet of Things (IoT)</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Single Column on Smaller Screens */}
              <div className="mt-4 md:hidden">
                <ul className="space-y-2 space-x-5">
                  <li className="hover:text-primary list-item">
                    <Link href="/">Mobile Application Development</Link>
                  </li>
                  <li className="hover:text-primary list-item">
                    <Link href="/">Embedded Software Development</Link>
                  </li>
                  <li className="hover:text-primary list-item">
                    <Link href="/">Mac OSX Application Development</Link>
                  </li>
                  <li className="hover:text-primary list-item">
                    <Link href="/">Cloud-based Application Development</Link>
                  </li>
                  <li className="hover:text-primary list-item">
                    <Link href="/">Windows Application Development</Link>
                  </li>
                  <li className="hover:text-primary list-item">
                    <Link href="/">Cross-Platform Development</Link>
                  </li>
                  <li className="hover:text-primary list-item">
                    <Link href="/">Web-based Application Development</Link>
                  </li>
                  <li className="hover:text-primary list-item">
                    <Link href="/">Internet of Things (IoT)</Link>
                  </li>
                  <li className="hover:text-primary list-item">
                    <Link href="/">VoIP Development Services</Link>
                  </li>
                  <li className="hover:text-primary list-item">
                    <Link href="/">E-commerce Websites and Portals</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="links-footer ">
              <h2 className="text-primary text-xl font-bold mb-4">Links</h2>
              <div className="mt-4 md:mt-0">
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden justify-center">
            <div className="links-footer text-white">
              <h2 className="text-primary text-xl font-bold mb-4">Links</h2>
              <div className="mt-4 md:mt-0">
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-primary">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-text absolute bottom-[15px] w-full border-t-[1px] border-[#171919] p-5">
          {/* <hr className=" h-[1.5px] bg-white w-full my-6 sm:mx-auto lg:my-8"></hr> */}
          <p className="font-xs text-white text-center hover:text-primary">
            Newtok Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
