import React from "react";
import "./clientlist.css";

const ClientList = () => {
  const client = [
    {
      name: "SummitSoft Corporation",
      location: "USA",
    },
    {
      name: "Virtual Training Company(VTC)",
      location: "USA",
    },
    {
      name: "WishFairy",
      location: "USA",
    },
    {
      name: "CheerHosting",
      location: "USA",
    },
    {
      name: "Put-In -Cups",
      location: "USA",
    },
    {
      name: "FirstMarketing Solutions",
      location: "USA",
    },
    {
      name: "Reynolds & Reynolds",
      location: "Australia",
    },
    {
      name: "Designersites",
      location: "Australia",
    },
    {
      name: "ABC Skoltrojor",
      location: "Taby, Sweden",
    },
    {
      name: "Bridgeway Group",
      location: "Dubai",
    },
    {
      name: "Galaxy Infotech Corporation",
      location: "USA, Abu Dhabi, Dubai.",
    },
    {
      name: "WebHostingSolutions 4U",
      location: "Dubai",
    },
    {
      name: "Futurestars",
      location: "Dubai",
    },
    {
      name: "PeeVees Group Company",
      location: "India",
    },
    {
      name: "Kinlet Packaging, Kinfra Food Park",
      location: "Calicut, India",
    },
    {
      name: "Indus Motors Co. Ltd",
      location: "Cochin, India",
    },
    {
      name: "BridgMe",
      location: "USA",
    },
    {
      name: "AminSoft",
      location: "USA",
    },
    {
      name: "Straight Path International School",
      location: "India",
    },
    {
      name: "Micaza Holidays",
      location: "India",
    },
    {
      name: "Ciudad Builders",
      location: "India",
    },
  ];
  return (
    <>
      <div className="mx-12 my-16 text-secondary">
        <div className="text-center md:py-28 py-10">
          <h1 className="md:text-[36px] text-[24px] font-bold">
            Proudly Serving{" "}
            <span className="md:text-[36px] text-[24px] text-primary">
              Fortune Clients:
            </span>
          </h1>
          <p className="text-secondary text-[12px] md:text-[16px] font-semibold">
            We are committed to 100% customer satisfaction. We measure our
            success in terms of the success of our customers.
          </p>
        </div>
        <div className="slider text-black">
          <div className="slide-track">
            {client.map((item, index) => (
              <div
                key={index}
                className="slide text-center hover:scale-110 transform ease-in-out transition-all duration-300"
              >
                <h1 className="font-bold">{item.name}</h1>
                <p className="font-semibold">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientList;
