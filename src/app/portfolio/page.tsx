import React, { useEffect, useState } from "react";
import Portfolio from "@/components/portfolio/Portfolio";

const page = () => {
  // const imgArray = [
  //     test,
  //     hello,
  //     test
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0)

  // useEffect(() => {
  //     const intervalId = setInterval(() => {
  //         setCurrentIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
  //     }, 2000);
  //     return () => {
  //         clearInterval(intervalId);
  //     };
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [imgArray, 2000]);

  const portfolioData = [
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
  ];

  return (
    <section className="w-screen mx-auto mt-36 mb-10">
      <h1 className="text-secondary lg:text-[40px] mt-5 text-center  font-semibold">
        <span className="">Prot</span>
        <span className="text-primary">folio</span>
      </h1>
      <div className="flex justify-center">
        <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center  font-semibold max-w-screen-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the an unknown printer took a galley
        </p>
      </div>

      {portfolioData.map((data, index) => (
        <>
          <Portfolio props={data} />
        </>
      ))}
    </section>
  );
};

export default page;
