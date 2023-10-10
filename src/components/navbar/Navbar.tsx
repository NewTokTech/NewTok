"use client";

import React, { useState } from "react";
import "./navbar.css";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showServices, setShowServices] = useState(false);

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

  return (
    <>
      <div className="relative">
        <header className="main_header">
          <div className="col-container">
            <div className="logo">
              <h1>
                E-Commerce Development Company in Kochi, Kerala, India
                <Link href="/">
                  <svg
                    width={170}
                    height={71.58}
                    viewBox="0 0 190 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_21_4)">
                      <mask
                        id="mask0_21_4"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={190}
                        height={80}
                      >
                        <path d="M190 0H0V80H190V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_21_4)">
                        <path
                          d="M9.49999 71.4H7.19999V79.6H4.49999V71.4H2.29999V69.2H9.49999V71.4Z"
                          fill="#706D6E"
                        />
                      </g>
                      <mask
                        id="mask1_21_4"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={190}
                        height={80}
                      >
                        <path d="M190 0H0V80H190V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask1_21_4)">
                        <path
                          d="M22.9 79.6H17V69.2H22.9V71.4H19.7V73.2H22.8V75.5H19.7V77.4H22.9V79.6Z"
                          fill="#706D6E"
                        />
                      </g>
                      <mask
                        id="mask2_21_4"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={190}
                        height={80}
                      >
                        <path d="M190 0H0V80H190V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask2_21_4)">
                        <mask
                          id="mask3_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask3_21_4)">
                          <path
                            d="M38.5 79.4C37.6 79.8 36.8 79.9 36 79.9C34.7 79.9 33.5 79.5 32.4 78.6C31.1 77.5 30.4 76.1 30.4 74.4C30.4 72.7 31.1 71.3 32.4 70.2C33.4 69.4 34.6 68.9 36 68.9C36.7 68.9 37.5 69.1 38.5 69.4V72.7C38.2 72.4 38 72.1 37.7 72C37.2 71.7 36.7 71.6 36.1 71.6C35.4 71.6 34.8 71.8 34.2 72.2C33.5 72.7 33.2 73.5 33.2 74.4C33.2 75.3 33.5 76.1 34.2 76.6C34.7 77 35.3 77.2 36.1 77.2C36.7 77.2 37.2 77.1 37.7 76.8C38 76.6 38.2 76.4 38.5 76.1V79.4Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask4_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask4_21_4)">
                          <path
                            d="M55.9 79.6H53.2V75.3H49.2V79.6H46.5V69.2H49.2V73.2H53.2V69.2H55.9V79.6Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask5_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask5_21_4)">
                          <path
                            d="M74.9 79.6H72.1L67.1 73.2V79.6H64.3V69.2H67.1L72.1 75.6V69.2H74.9V79.6Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask6_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask6_21_4)">
                          <path
                            d="M94.5 74.4C94.5 75.8 94 77.1 93.1 78.1C92 79.4 90.5 80 88.6 80C86.8 80 85.3 79.4 84.2 78.2C83.2 77.1 82.8 75.9 82.8 74.5C82.8 73.9 82.9 73.2 83.2 72.5C83.5 71.8 83.8 71.2 84.2 70.7C85.3 69.5 86.8 68.9 88.6 68.9C90.5 68.9 91.9 69.5 93 70.7C94 71.7 94.5 73 94.5 74.4ZM91.6 74.4C91.6 73.7 91.4 73 90.9 72.5C90.3 71.8 89.5 71.5 88.6 71.5C88 71.5 87.4 71.7 86.9 72C86.4 72.4 86 72.8 85.8 73.4C85.7 73.7 85.6 74.1 85.6 74.4C85.6 75.1 85.8 75.7 86.3 76.3C86.9 77 87.6 77.3 88.6 77.3C89.6 77.3 90.3 77 90.9 76.3C91.4 75.8 91.6 75.1 91.6 74.4Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask7_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask7_21_4)">
                          <path
                            d="M108.5 79.6H102.4V69.2H105.2V77.4H108.5V79.6Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask8_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask8_21_4)">
                          <path
                            d="M127.3 74.4C127.3 75.8 126.8 77.1 125.9 78.1C124.8 79.3 123.3 79.9 121.5 79.9C119.7 79.9 118.2 79.3 117.1 78.1C116.1 77 115.7 75.8 115.7 74.4C115.7 73.8 115.8 73.1 116.1 72.4C116.4 71.7 116.7 71.1 117.1 70.6C118.2 69.4 119.7 68.8 121.5 68.8C123.4 68.8 124.8 69.4 125.9 70.6C126.8 71.7 127.3 73 127.3 74.4ZM124.5 74.4C124.5 73.7 124.3 73 123.8 72.5C123.2 71.8 122.4 71.5 121.5 71.5C120.9 71.5 120.3 71.7 119.8 72C119.3 72.4 118.9 72.8 118.7 73.4C118.6 73.7 118.5 74.1 118.5 74.4C118.5 75.1 118.7 75.7 119.2 76.3C119.8 77 120.5 77.3 121.5 77.3C122.5 77.3 123.2 77 123.8 76.3C124.2 75.8 124.5 75.1 124.5 74.4Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask9_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask9_21_4)">
                          <path
                            d="M145.8 73.8C145.8 74.9 145.7 75.9 145.4 76.6C145 77.7 144.4 78.5 143.5 79.1C142.6 79.7 141.6 79.9 140.4 79.9C138.5 79.9 137 79.2 136 77.9C135.2 76.9 134.8 75.7 134.8 74.3C134.8 72.8 135.3 71.5 136.2 70.5C137.2 69.3 138.7 68.7 140.5 68.7C141.7 68.7 142.8 69 143.7 69.7C144.3 70.1 144.8 70.8 145.3 71.7L142.7 72.8C142.5 72.3 142.2 71.9 141.9 71.7C141.5 71.4 141 71.2 140.4 71.2C139.2 71.2 138.4 71.8 137.9 73C137.7 73.4 137.6 73.9 137.6 74.4C137.6 75.4 137.9 76.2 138.6 76.9C139.1 77.4 139.7 77.6 140.5 77.6C141.2 77.6 141.7 77.4 142.2 77C142.5 76.7 142.6 76.3 142.7 75.8H140.4V73.7H145.8V73.8Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask10_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask10_21_4)">
                          <path
                            d="M156.5 69.2H153.8V79.7H156.5V69.2Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask11_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask11_21_4)">
                          <path
                            d="M171 79.6H165V69.2H171V71.4H167.7V73.2H170.8V75.5H167.7V77.4H171V79.6Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask12_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask12_21_4)">
                          <path
                            d="M186.2 76.2C186.2 78 185.4 79.1 183.9 79.7C183.4 79.9 182.8 80 182.1 80C180.8 80 179.6 79.6 178.4 78.8L179.6 76.6C180.4 77.3 181.2 77.7 182 77.7C182.4 77.7 182.7 77.6 182.9 77.5C183.2 77.3 183.3 77.1 183.3 76.7C183.3 76.4 183.1 76.1 182.8 75.9C182.6 75.7 182.2 75.6 181.6 75.4C180.9 75.2 180.5 75.1 180.3 75C180 74.9 179.8 74.7 179.6 74.6C179 74.1 178.8 73.4 178.8 72.5C178.8 71.5 179.1 70.7 179.7 70.1C180.4 69.3 181.3 69 182.4 69C183.5 69 184.6 69.3 185.7 69.9L184.6 72C184 71.5 183.4 71.3 182.8 71.3C182.5 71.3 182.2 71.4 182 71.5C181.7 71.7 181.6 71.9 181.6 72.2C181.6 72.5 181.8 72.7 182.1 72.9C182.3 73 182.7 73.2 183.5 73.4C184.5 73.7 185.2 74.1 185.6 74.6C186 74.9 186.2 75.5 186.2 76.2Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask13_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask13_21_4)">
                          <path
                            d="M14 29C14.1 29 14.6 29 15.3 29.1C16.1 29.1 17 29.3 18 29.6C19 29.9 20.1 30.4 21.3 31.1C22.5 31.8 23.5 32.7 24.5 33.9C25.5 35.1 26.3 36.7 27 38.6C27.6 40.5 28 42.8 28 45.6V61.3H20.4V45.5C20.4 44.6 20.3 43.7 20.2 42.7C20 41.8 19.7 40.9 19.3 40.1C18.8 39.3 18.2 38.7 17.4 38.2C16.6 37.7 15.5 37.4 14.1 37.4C12.7 37.4 11.6 37.7 10.8 38.2C10 38.7 9.3 39.4 8.9 40.1C8.4 40.9 8.1 41.8 8 42.7C7.8 43.6 7.8 44.6 7.8 45.5V61.2H0V45.5C0 42.7 0.3 40.4 1 38.5C1.6 36.6 2.5 35.1 3.5 33.8C4.5 32.6 5.6 31.6 6.7 31C7.9 30.3 9 29.9 10 29.5C11 29.2 11.9 29 12.7 29C13.4 29 13.8 29 14 29Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask14_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask14_21_4)">
                          <path
                            d="M59.5 41.5C59.6 42.1 59.7 42.8 59.7 43.4C59.8 44.1 59.8 44.8 59.8 45.5V46.6H38C38.1 47.3 38.2 48 38.3 48.7C38.4 49.4 38.6 50.1 38.9 50.8C39.4 51.9 40.1 52.8 41 53.6C42 54.4 43.3 54.8 45 54.8C46.7 54.8 48 54.4 49 53.6C50 52.8 50.7 51.8 51.1 50.8H59.2C58.9 52.2 58.4 53.5 57.8 54.6C57.2 55.7 56.5 56.6 55.8 57.4C55.1 58.2 54.3 58.8 53.5 59.3C52.7 59.8 51.9 60.2 51.1 60.6C49.2 61.3 47.2 61.7 45.1 61.7C42.3 61.7 39.9 61.1 37.7 60C36.8 59.5 35.9 58.9 35 58.1C34.1 57.3 33.3 56.4 32.6 55.2C31.9 54 31.4 52.7 31 51.1C30.6 49.5 30.4 47.6 30.4 45.5C30.4 43.4 30.6 41.5 31 39.9C31.4 38.3 32 36.9 32.6 35.7C33.3 34.5 34.1 33.5 35 32.8C35.9 32 36.8 31.4 37.7 30.9C39.9 29.7 42.3 29.1 45.1 29C47.4 29.1 49.5 29.6 51.5 30.4C52.3 30.8 53.2 31.3 54 31.9C54.8 32.5 55.6 33.2 56.4 34.1C57.1 35 57.8 36 58.3 37.3C58.8 38.4 59.2 39.8 59.5 41.5ZM51.6 41.5C51.4 40.8 51.1 40.2 50.8 39.5C50.5 38.8 50.1 38.2 49.5 37.7C49 37.2 48.3 36.7 47.6 36.4C46.9 36.1 46 35.9 45 35.9C44 35.9 43.1 36.1 42.4 36.4C41.7 36.7 41 37.1 40.5 37.7C40 38.2 39.5 38.8 39.2 39.5C38.9 40.2 38.6 40.8 38.5 41.5H51.6Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask15_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask15_21_4)">
                          <path
                            d="M74.1 61.1H69L61.3 29.7H69L74.1 53.2L79.2 29.7H86.4L79.2 61.1H74.1ZM92 61.1H86.9L79.7 29.7H86.9L92 53.2L97.1 29.7H104.8L97.1 61.1H92Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask16_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask16_21_4)">
                          <path
                            d="M114.1 37.1V50.9C114.2 51.4 114.5 51.8 114.8 52.3C115.1 52.6 115.5 52.9 116 53.2C116.5 53.5 117.2 53.6 118 53.6H122.7V61.1H115.1C113.5 60.9 112 60.5 110.7 59.7C109.6 59.1 108.6 58.2 107.7 56.9C106.8 55.7 106.4 54 106.4 51.9V21.3H114V29.7H129.4V37.1H114.1Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask17_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask17_21_4)">
                          <path
                            d="M168.5 61.1H160.9V19.4H168.5V42.3L177.8 29.8H186.2L176.6 42.8L190 61.1H181.6L172.3 48.5L168.5 53.4V61.1Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask18_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask18_21_4)">
                          <path
                            d="M156.1 33.9C156.1 42.1 149.4 48.8 141.1 48.8C132.8 48.8 126.1 42.1 126.1 33.9C126.1 25.7 132.8 19 141.1 19C149.4 19 156.1 25.7 156.1 33.9Z"
                            fill="#7DC242"
                          />
                        </g>
                        <mask
                          id="mask19_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask19_21_4)">
                          <path
                            d="M141.2 52.7C130.8 52.7 122.3 44.3 122.3 33.9C122.3 23.5 130.8 15.1 141.2 15.1C151.6 15.1 160 23.6 160 33.9C160 44.2 151.6 52.7 141.2 52.7ZM141.2 22.9C135.1 22.9 130.1 27.8 130.1 33.9C130.1 40 135.1 44.9 141.2 44.9C147.3 44.9 152.3 40 152.3 33.9C152.3 27.8 147.3 22.9 141.2 22.9Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask20_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask20_21_4)">
                          <path
                            d="M158.4 5.5C158.4 8.5 155.9 11 152.9 11C149.9 11 147.4 8.5 147.4 5.5C147.4 2.5 149.9 0 152.9 0C155.9 0 158.4 2.5 158.4 5.5Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask21_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask21_21_4)">
                          <path
                            d="M148 21.6L144.9 20.3L150.4 6.5L153.5 7.8L148 21.6Z"
                            fill="#706D6E"
                          />
                        </g>
                        <mask
                          id="mask22_21_4"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={190}
                          height={80}
                        >
                          <path d="M190 0H0V80H190V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask22_21_4)">
                          <path
                            d="M155.2 5.4C155.2 6.6 154.2 7.5 153 7.5C151.8 7.5 150.8 6.5 150.8 5.4C150.8 4.2 151.8 3.3 153 3.3C154.2 3.3 155.2 4.2 155.2 5.4Z"
                            fill="#7DC242"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_21_4">
                        <rect width={190} height={80} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </h1>
            </div>
            <div className="menu-toggle">
              <div id="menu-icon-wrapper" className="menu-icon-wrapper">
                <svg
                  className={`menu-icon ${isOpen ? "fill-white" : ""
                  } transition-colors ease-in-out duration-100`}
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
              <div className="copyright">© 2008 - 2023</div>
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
                <div
                  className={`col-container ${
                    showServices ? "open-service" : ""
                  }`}
                >
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
                          <a className="" onClick={handleService}>
                            <span data-hover="Services">Services</span>
                          </a>
                        </li>
                        {/* {showServices && ( */}
                        <div
                          className={`${
                            showServices
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 -translate-y-4 absolute"
                          } transform transition-all ease-in-out duration-300`}
                        >
                          {" "}
                          <div className="pt-1">
                              <div className="flex flex-col md:flex-row text-white">
                                {/* Heading 1 */}
                                <div className="md:w-1/3 pt-2">
                                  <h2 className="text-lg font-semibold text-primary">
                                    Digital Engineering
                                  </h2>
                               
                                    <p>Enterprise Solutions</p>
                                    <br />
                                    <p>Application Developement</p>
                                  
                                </div>

                                {/* Heading 2 */}
                                <div className="md:w-1/3 pt-2">
                                  <h2 className="text-lg font-semibold text-primary">
                                    AI / ML
                                  </h2>
                                    <p>Advanced Analytics</p>
                                    <p>Data Visualization</p>
                                </div>

                                {/* Heading 3 */}
                                <div className="md:w-1/3 pt-2">
                                  <h2 className="text-lg font-semibold text-primary">
                                    Experience
                                  </h2>
                                    <p>UI/UX</p>
                                    <p>Digital Commerce</p>
                                </div>
                              </div>
                            </div>
                        </div>
                        {/* )} */}

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
                    <div
                      className={`${
                        showServices ? "scale-0" : "scale-100"
                      } transform transition-all ease-in-out duration-700 contact-div`}
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
