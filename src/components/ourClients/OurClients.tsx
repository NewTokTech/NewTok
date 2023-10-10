import React from "react";

const OurClients = () => {
  return (
    <div className="flex justify-center w-screen">
      <div className="w-full ">
        <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-inter font-semibold">
          Our Clients
        </h1>
        <p className="text-secondary lg:text-[18px] mt-5 text-center font-inter font-semibold">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 flex justify-center ">
            <div className="bg-blue-200 p-4">Item 1</div>
            <div className="bg-green-200 p-4">Item 2</div>
            <div className="bg-yellow-200 p-4">Item 3</div>
            <div className="bg-pink-200 p-4">Item 4</div>
            <div className="bg-purple-200 p-4">Item 5</div>
            <div className="bg-orange-200 p-4">Item 6</div>
            <div className="bg-red-200 p-4">Item 7</div>
            <div className="bg-teal-200 p-4">Item 8</div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
