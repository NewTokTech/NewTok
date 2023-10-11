"use client"

import React, { useEffect, useState } from "react";
import "./footer.css"
import { BiLogoFacebook, BiLogoLinkedinSquare } from "react-icons/bi"

const Footer = () => {

  return (
    <>
      <footer className="main-footer">
      
        <div className="copyright">© 2003 - 2023</div>
        <a href="index.html#!" className="go-to-top">
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
        </a>
        <ul className="social">
          <li>
            <a
              href="https://www.facebook.com/ewokesoft/"
              className="facebook"
              target="_blank"
            >
                <BiLogoFacebook />
              
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/newtoktech"
              className="instagram"
              target="_blank"
            >
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/newtok-technologies-pvt-ltd-india/"
              className="linkedin"
              target="_blank"
            >
              <BiLogoLinkedinSquare />
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
        
          <div className="row col-container address">
            <div className="inline col-3">
              <div className="address-div">
                <h5 className="address-title">
                  eWoke <span>Canada</span>
                </h5>
                <p>
                  Ewoke Innovative Solutions
                  <br />
                  1430 street, Pembina hwy,
                  <br />
                  Winnipeg, Canada
                </p>
                <a href="tel:+12049607672">+1 204 960 7672</a>
              </div>
            </div>
            <div className="inline col-3">
              <div className="address-div">
                <h5 className="address-title">
                  eWoke <span>Middle East</span>
                </h5>
                <p>
                  Mars Infotech - An associates of Ewoke <br />
                  PO Box 158, Postal Code 133, <br />
                  Muscat, Sultanate of Oman
                </p>
                <a href="tel:+96893861384">+968 93 861 384</a>
              </div>
            </div>
            <div className="inline col-3">
              <div className="address-div">
                <h5 className="address-title">
                  eWoke 
                  <span>India</span>
                </h5>
                <p>
                  Ewoke Innovative Solutions Pvt. Ltd. <br />
                  4th Floor, Monlash Business Centre, <br />
                  Crescens Tower, Kochi - 682033
                </p>
                <a href="tel:+914844011448">+91 907 238 2964</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>

      </footer>
    </>
  );
};

export default Footer;
