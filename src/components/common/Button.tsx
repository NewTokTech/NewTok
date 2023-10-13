import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  link: string;
}
const Button = ({ text, link }: Props) => {
  return (
    <>
      <Link
        href={link}
        className="my-5 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary/60 rounded-xl group"
      >
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary/80 rounded-2xl group-hover:mb-12 group-hover:translate-x-0" />
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          {text}
        </span>
      </Link>
    </>
  );
};

export default Button;
