import React, { useEffect, useState } from "react";
import Portfolio from "@/components/portfolio/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Newtok Technologies has excellent and long-lasting solutions to all your IT needs.",
};
const page = () => {
  const portfolioData = [
    {
      title: ["LOGO", " DESIGN STUDIO"],
      description:
        "Logo Design Studio's new vector drawing and editable vector graphics software. Using this vector design software you can create razor sharp graphics from business cards to billboards!",
      client: "SummitSoftCorp, USA",
      images: [
        "/portfolio/logo-design/pic1.png",
        "/portfolio/logo-design/pic2.png",
        "/portfolio/logo-design/pic3.png",
        "/portfolio/logo-design/pic4.png",
        "/portfolio/logo-design/pic5.png",
      ],
    },
    {
      title: ["PST", "SYNC"],
      description:
        "PSTSync is the ultimate solution for all of your PST file management problems. PSTSync can handle all types of Outlook mail folders. PSTSync will help you keep your mobile laptop in sync with your desktop at all times. Just select the PST files from the PSTSync screen and check off which folders to synchronize and click the synchronize button. That’s it! It has tons of other features that you wont find in other Outlook synchronization tools.",
      client: "AminSoft, USA",
      images: [
        "/portfolio/pstsync/pic1.jpg",
        "/portfolio/pstsync/pic2.jpg",
        "/portfolio/pstsync/pic3.jpg",
        "/portfolio/pstsync/pic4.jpg",
      ],
    },
    {
      title: ["LOGO", " DESIGN IOS"],
      description: "Logo Design IOS presents a cutting-edge vector drawing and editable vector graphics software that empowers you to craft precision graphics, whether it's for business cards or billboards. Unleash your creativity and design prowess with our user-friendly IOS software, making your graphic projects shine with impeccable clarity and precision.",
      client: "SummitSoftCorp, USA",
      images: [
        "/portfolio/logo-designios/pic1.jpg",
        "/portfolio/logo-designios/pic2.jpg",
        "/portfolio/logo-designios/pic3.jpg",
      ],
    },
    {
      title: ["CHARTS", " AND GRAPHS"],
      description:
        "Charts & Graphs is an Add-In which Works with Microsoft Word, Excel and PowerPoint. The program allows you to create and edit stunning 3-D charts and graphs without having to switch back and forth from your data files.",
      client: "SummitSoftCorp, USA",
      images: [
        "/portfolio/chart/pic1.png",
        "/portfolio/chart/pic2.png",
        "/portfolio/chart/pic3.png",
        "/portfolio/chart/pic4.png",
      ],
    },

    {
      title: ["IN", " CONTACT"],
      description:
        "In Contact is online marketing solution, making bulk marketing emails and bounce mail management effortless. Send and manage marketing emails with ease, streamlining your online marketing endeavors.",
      client: "SummitSoftCorp, USA",
      images: [
        "/portfolio/contact/pic1.jpg",
        "/portfolio/contact/pic2.jpg",
        "/portfolio/contact/pic3.jpg",
        "/portfolio/contact/pic4.jpg",
      ],
    },

    {
      title: ["BUSINESS", " CARD STUDIO"],
      description:
        "Business Card Studio is the easiest solution for designing and printing professional business cards with Business Card Studio. Effortlessly create and print business cards that make a lasting impression. It's your go-to tool for hassle-free business card design",
      client: "SummitSoftCorp, USA",
      images: [
        "/portfolio/business-card/pic1.jpg",
        "/portfolio/business-card/pic2.jpg",
        "/portfolio/business-card/pic3.jpg",
      ],
    },

    {
      title: ["MAC", " FONTS"],
      description: "Mac Fonts is the ultimate macOS font management solution, streamlining font organization and activation while seamlessly integrating with your Mac OS X environment. Enhancing your font workflow, it's designed for both professionals and font enthusiasts, ensuring easy access to your fonts and boosting your creativity.",
      client: "SummitSoftCorp, USA",
      images: [
        "/portfolio/mac-fonts/pic1.jpg",
        "/portfolio/mac-fonts/pic2.jpg",
        "/portfolio/mac-fonts/pic3.jpg",
        "/portfolio/mac-fonts/pic4.jpg",
      ],
    },

    {
      title: ["FONT", " MANAGER"],
      description: "A powerful font management software designed for Windows. Organize, activate, and streamline your font library effortlessly with our user-friendly and efficient solution. Enhance your design and creative projects with Font Manager's seamless integration and comprehensive features, ensuring a smooth font management experience for Windows users.",
      client: "SummitSoftCorp, USA",
      images: [
        "/portfolio/font-manager/pic1.png",
        "/portfolio/font-manager/pic2.png",
        "/portfolio/font-manager/pic3.png",
      ],
    },

    {
      title: ["IQ", " TEASER"],
      description: "A simple yet engaging puzzle app designed for iPhone users. Put your cognitive skills to the test as you solve a variety of mind-bending puzzles, all while enjoying a user-friendly interface and a seamless mobile gaming experience. Whether you're a casual gamer or a puzzle enthusiast, iQteaser promises a delightful and intellectually stimulating adventure right on your iPhone.",
      client: "AminSoft, USA",
      images: [
        "/portfolio/iQTeaser/pic1.png",
        "/portfolio/iQTeaser/pic2.png",
        "/portfolio/iQTeaser/pic3.png",
      ],
    },
  ];

  return (
    <section className="w-screen mx-auto mt-36 mb-10">
      <h1 className="text-secondary lg:text-[40px] mt-5 text-center  font-semibold">
        <span className="">Prot</span>
        <span className="text-primary">folio</span>
      </h1>
      <div className="flex justify-center">
        <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center  font-semibold max-w-screen-sm">
          Newtok Technologies has excellent and long-lasting solutions to all
          your IT needs.
        </p>
      </div>

      {portfolioData.map((data, index) => (
        <>
          <Portfolio key={index} index={index} props={data} />
        </>
      ))}
    </section>
  );
};

export default page;
