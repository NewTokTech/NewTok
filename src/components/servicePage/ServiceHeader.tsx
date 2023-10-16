import React from 'react'

interface HeaderProps {
    heading: string
    headingTwo: string  | null
    Paragraph: string
    OneHeadingTwo: string | null
    OneHeading: string | null
}

const ServiceHeader = (props: HeaderProps) => {
    return (
        <div>
            <h1 className="text-secondary lg:text-[40px] mt-4 text-center font-semibold">
                <span className="">{props.heading}</span>
                <span className="text-primary">{props.OneHeading}</span>
            </h1>
            <div className="flex justify-center">
                <p className="text-secondary lg:text-[15px] mt-5 mb-5 text-center font-light max-w-screen-sm">
                    {props.Paragraph}
                </p>
            </div>
            {props.headingTwo &&
                (<h1 className="text-secondary lg:text-[40px] lg:mt-4 text-center font-semibold">
                    <span className="">{props.headingTwo}</span>
                    <span className="text-primary"> {props.OneHeadingTwo}</span>
                </h1>)}
          </div>
    )
}

export default ServiceHeader