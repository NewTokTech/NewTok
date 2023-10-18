import React from "react";
import Image from "next/image";
import PortfolioImages from "./PortfolioImages";

interface Props {
  props: Data;
  index: number;
}
interface Data {
  title: string[];
  description: string;
  client: string;
  images: string[];
}

const Portfolio = (props: Props) => {
  const { title, description, client, images } = props.props;
  const { index } = props;

  return (
    <div className="lg:p-10 text-secondary pt-10">
      <div className="m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div
          className={`space-y-6 md:space-y-0 lg:flex lg:justify-center md:gap-6 rounded-lg lg:items-center lg:gap-12 ${
            index % 2 == 1 ? "lg:flex-row-reverse" : "bg-white"
          }`}
        >
          <div className="md:w-7/12 lg:w-6/12 p-10 flex justify-center relative">
            <PortfolioImages images={images} />
          </div>

          <div className="md:w-7/12 lg:w-6/12 xl:p-20 py-10 px-5">
            <h2 className="text-[18px] md:text-[24px] lg:text-[30px] font-semibold xl:mt-10 mt-0 lg:block flex justify-center">
              {title[0]}
              <span className="text-primary">{title[1]} </span>
            </h2>
            <h2 className="mt-0">
              <span className="lg:block hidden"> Client</span>
              {/* <br className='lg:block hidden' /> */}
              <span className="text-lg lg:block flex justify-center ">
                {" "}
                {client}
              </span>
            </h2>
            <p className="mt-6 text-[14px] font-[500] leading-5">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
