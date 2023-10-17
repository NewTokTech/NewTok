import React from "react";

interface WhyUsItem {
  head: string;
  p: string;
}

interface Props {
  whyUsArray: WhyUsItem[];
}

let secontArray;

const ServiceWhyUs: React.FC<Props> = ({ whyUsArray }) => {
  const firstArray = whyUsArray.slice(0, 3);

  if (whyUsArray.length <= 6) {
    secontArray = whyUsArray.slice(3, 6);
  } else {
    secontArray = whyUsArray.slice(3, 5);
  }

  return (
    <>
      <section className="my-10">
        <h1 className="text-secondary lg:text-[40px] text-[30px] mt-5 text-center font-semibold">
          <span className="">Why </span>
          <span className="text-primary">Us?</span>
        </h1>

        <div className="flex justify-center lg:pt-24 ">
          <div className="w-10/12 lg:flex block">
            {/* <div className="flex justify-center">
              <hr className="w-[100px] h-[1px]  bg-secondary mt-10 mb-10 lg:mt-7 border-0 rounded lg:block hidden lg:rotate-90"></hr>
            </div> */}
            {firstArray.map((value, index) => {
              return (
                <>
                  <div className="lg:w-4/12 w-full h-24  flex justify-center my-5" key={index}>
                    <div className="flex flex-col items-center">
                      <h5 className="mb-1  text-xl font-medium text-gray-900 text-center ">
                        <span className="text-secondary ">
                          {value.head.substring(0, 4)}
                        </span>
                        <span className="text-primary text-center">
                          {value.head.substring(4, value.head.length)}
                        </span>
                      </h5>
                      <span className="text-sm text-secondary text-center mt-4">
                        {value.p}
                      </span>
                    </div>
                  </div>

                  {index !== 2 && (
                    <div className="flex justify-center lg:mt-16">
                      <hr className="w-[75px] h-[1px]  bg-secondary mt-10 mb-10 lg:my-7  my-5 border-0 rounded opacity-20 block lg:rotate-90"></hr>
                    </div>
                  )}

                  {index == 2 && (
                    <div className="flex justify-center lg:mt-16">
                      <hr className="w-[75px] h-[1px]  bg-secondary mt-10 mb-10 lg:my-7  my-5 border-0 rounded opacity-20 block lg:hidden"></hr>
                    </div>
                  )}

                </>
              );
            })}
          </div>
        </div>

        {/* <div className='flex justify-center'>
                    <hr className="w-[100px] h-[1px]  bg-secondary mt-10 mb-10 lg:mt-7 border-0 rounded lg:hidden block "></hr>
                </div> */}

        <div className="flex justify-center lg:mt-20">
          <div className="w-10/12 lg:flex block justify-center">
            {/* <div className="flex justify-center">
              <hr className="w-[100px] h-[1px]  bg-secondary mt-10 mb-10 lg:mt-7 border-0 rounded lg:block hidden lg:rotate-90"></hr>
            </div> */}
            {secontArray.map((value, index) => {
              return (
                <>
                  <div className="lg:w-4/12 w-full   flex justify-center " key={index}>
                    <div className="flex flex-col items-center">
                      <h5 className="mb-1  text-xl font-medium text-gray-900 text-center ">
                        <span className="text-secondary ">
                          {value.head.substring(0, 4)}
                        </span>
                        <span className="text-primary text-center">
                          {value.head.substring(4, value.head.length)}
                        </span>
                      </h5>
                      <span className="text-sm text-secondary text-center my-4 ">
                        {value.p}
                      </span>
                    </div>
                  </div>

                  {(index !== 2 && secontArray.length === 3) && (
                    <div className="flex justify-center lg:mt-16">
                      <hr className="w-[75px] h-[1px]  bg-secondary mt-10 mb-10 lg:my-7  my-5 border-0 rounded opacity-20 block lg:rotate-90"></hr>
                    </div>
                  )}

                  {(index == 0 && secontArray.length === 2) && (
                    <div className="flex justify-center lg:mt-16">
                      <hr className="w-[75px] h-[1px]  bg-secondary mt-10 mb-10 lg:my-7  my-5 border-0 rounded opacity-20 block lg:rotate-90"></hr>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceWhyUs;
