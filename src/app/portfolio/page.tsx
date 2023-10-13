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

        // {
        //     title: ["LOGO", " DESIGN IOS"],
        //     description:
        //         "Mac Fonts is a font management software for MAC OS X.",
        //     client: "SummitSoftCorp, USA",
        //     images: [
        //         "/portfolio/logo-designios/pic1.jpg",
        //         "/portfolio/logo-designios/pic2.jpg",
        //         "/portfolio/logo-designios/pic3.jpg",
        //         "/portfolio/logo-designios/pic4.jpg",
        //     ],
        // },

        {
            title: ["IN", " CONTACT"],
            description:
                "In Contact is an online marketing application. It is easy to send bulk marketting mails and manage bounce mails with this application.",
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
                "Business Card Studio is the easiest way to create & print professional business cards.",
            client: "SummitSoftCorp, USA",
            images: [
                "/portfolio/business-card/pic1.jpg",
                "/portfolio/business-card/pic2.jpg",
                "/portfolio/business-card/pic3.jpg",
                "/portfolio/business-card/pic1.jpg",
            ],
        },

        {
            title: ["MAC", " FONTS"],
            description:
                "Mac Fonts is a font management software for MAC OS X.",
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
            description:
                "A font managment software for windows.",
            client: "SummitSoftCorp, USA",
            images: [
                "/portfolio/font-manager/pic1.png",
                "/portfolio/font-manager/pic2.png",
                "/portfolio/font-manager/pic3.png",
                "/portfolio/font-manager/pic1.png",
            ],
        },

        // {
        //     title: ["IQ", " TEASER"],
        //     description:
        //         "Mac Fonts is a font management software for MAC OS X.",
        //     client: "AminSoft, USA",
        //     images: [
        //         "/portfolio/iQTeaser/pic1.png",
        //         "/portfolio/iQTeaser/pic2.png",
        //         "/portfolio/iQTeaser/pic3.png",
        //         "/portfolio/iQTeaser/pic1.png",
        //     ],
        // },
    ];

    return (
        <section className="w-screen mx-auto mt-36 mb-10">
            <h1 className="text-secondary lg:text-[40px] mt-5 text-center  font-semibold">
                <span className="">Prot</span>
                <span className="text-primary">folio</span>
            </h1>
            <div className="flex justify-center">
                <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center  font-semibold max-w-screen-sm">
                    Newtok Technologies has excellent and long-lasting solutions to all your IT needs.
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
