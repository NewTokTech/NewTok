"use client";

import React, { useEffect, useState } from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";
import "./footer.css";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";

const FooterTest = () => {
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
      <div className="min-h-screen bg-[#090b0a] flex flex-col justify-end text-white pt-10">
        <div className="py-24 px-2 xl:px-24 border-b-[1px] border-[#171919] lg:mx-auto flex justify-center justify-items-center items-center">
          <div className="flex justify-between align-baseline gap-36">
            <div className="flex flex-col justify-between gap-3 mx-auto ">
              <h1 className="text-[30px]">
                Newtok <span className="text-primary">India</span>
              </h1>
              <p className="text-white">
                Newtok Technologies Pvt Ltd.
                <br />
                Kochi
                <br />
                Kerala, India
              </p>
              <span className="flex phone-number gap-2 text-[20px] text-primary hover:text-white">
                <BiSolidPhoneCall />{" "}
                <a href="tel:+917012935874"> +91 7012935874</a>
              </span>
            </div>

            <div className="flex-col justify-between gap-3 hidden lg:flex">
              <h1 className="text-[30px]">
                Newtok <span className="text-primary">Dubai</span>
              </h1>
              <p className="text-white">
                Newtok Technologies Pvt Ltd.
                <br />
                Dubai
                <br />
                <br />
              </p>
              <span className="flex phone-number gap-2 text-[20px] text-primary hover:text-white">
                <BiSolidPhoneCall />{" "}
                <a href="tel:+971-567944354"> +971-567944354</a>
              </span>
            </div>

            <div className="flex-col justify-between gap-3 hidden lg:flex">
              <h1 className="text-[30px]">
                Newtok <span className="text-primary">Bahrain</span>
              </h1>
              <p className="text-white">
                Newtok Technologies Pvt Ltd.
                <br />
                Bahrain
                <br />
                <br />
              </p>
              <span className="flex phone-number gap-2 text-[20px] text-primary hover:text-white">
                <BiSolidPhoneCall />{" "}
                <a href="tel:+971554552949"> +971554552949</a>
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-around items-center mb-16 p-10 my-auto">
          <div className="copyright text-primary">© 2003 - 2023</div>
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

          <div className="it-service hidden md:block">
            <h2 className="text-primary text-xl font-bold ">IT SERVICES</h2>

            <div className="block lg:flex lg:justify-between text-white gap-16">
              <div className="pt-4">
                <ul className="space-y-5">
                  <li className="hover:text-primary list-item list-disc">
                    <Link href="/services/digital-engineering">
                      Mobile Application Development
                    </Link>
                  </li>
                  <li className="hover:text-primary list-item list-disc">
                    <Link href="/services/digital-engineering">
                      Enterprise Solutions
                    </Link>
                  </li>
                  <li className="hover:text-primary list-item list-disc">
                    <Link href="/services/digital-engineering">
                      Custom Application Development
                    </Link>
                  </li>
                  <li className="hover:text-primary list-item list-disc">
                    <Link href="/services/data-ai"> Advanced Analytics</Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 hidden lg:block">
                <ul className=" list-disc space-y-5">
                  <li className="hover:text-primary list-item list-disc">
                    <Link href="/services/digital-engineering">
                      Low-code Development
                    </Link>
                  </li>
                  <li className="hover:text-primary list-item list-disc">
                    <Link href="/services/digital-experience">
                      {" "}
                      Digital Commerce
                    </Link>
                  </li>
                  <li className="hover:text-primary list-item list-disc">
                    <Link href="/services/data-ai">Data Visualization</Link>
                  </li>
                  <li className="hover:text-primary list-item list-disc">
                    <Link href="/digital-experience">UI/UX</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-primary text-xl font-bold mb-4">Links</h2>
            <div className="mt-4 md:mt-0">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/digital-engineering"
                    className="hover:text-primary"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-primary">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full border-t-[1px] border-[#171919] text-center">
            <p className="font-xs text-white text-center hover:text-primary py-5">
              Newtok Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTest;
