import React from 'react'

interface contect {
    h: string;
    para: string;
    h2: string;
}

const ServiceLastHeading = (props:contect) => {
  return (
    <div>
         <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-semibold">
          <span className="">{props.h} </span>
          <span className="text-primary">{props.h2}</span>
        </h1>
        <div className="flex justify-center">
          <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center font-light max-w-screen-sm">
            {props.para}
          </p>
        </div>
    </div>
  )
}

export default ServiceLastHeading