import React from 'react'

interface WhyUsItem {
    head: string;
    p: string;
}

interface Props {
    whyUsArray: WhyUsItem[];
}

const ServiceWhyUs: React.FC<Props> = ({ whyUsArray }) => {
    const firstArray = whyUsArray.slice(0, 3);
    let secontArray
    if (whyUsArray.length <= 6) {
        secontArray = whyUsArray.slice(3, 6);
    } else {
        secontArray = whyUsArray.slice(3, 5);
    }

    return (
        <>

            <section className='my-10'>
                <h1 className="text-secondary lg:text-[40px] mt-5 text-center font-semibold">
                    <span className="">Why </span>
                    <span className="text-primary">Us ?</span>
                </h1>

                <div className="flex justify-center pt-24">

                    <div className='w-10/12 lg:flex block'>

                        {firstArray.map((value, index) => {
                            return (
                                <>

                                    <div className='flex justify-center'>
                                        <hr className="w-[100px] h-[1px]  bg-secondary mt-10 mb-10 lg:mt-7  border-0 rounded dark:bg-gray-700  block lg:rotate-90"></hr>
                                    </div>
                                    <div className="lg:w-4/12 w-full h-24  flex justify-center">
                                        <div className="flex flex-col items-center">
                                            <h5 className="mb-1  text-xl font-medium text-gray-900 text-center ">
                                                <span className="text-secondary ">{value.head}</span>
                                                <span className="text-primary text-center"> ENGINEERING</span>
                                            </h5>
                                            <span className="text-sm text-secondary text-center mt-4">
                                                {value.p}
                                            </span>

                                        </div>
                                    </div>

                                    <div className='flex justify-center'>
                                        <hr className="w-[100px] h-[1px]  bg-secondary mt-10 mb-10 lg:mt-7  border-0 rounded dark:bg-gray-700  block lg:rotate-90"></hr>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

                <div className='flex justify-center'>
                    <hr className="w-[100px] h-[1px]  bg-secondary mt-10 mb-10 lg:mt-7 border-0 rounded lg:hidden block "></hr>
                </div>




                <div className="flex justify-center lg:mt-20">
                    <div className='w-10/12 lg:flex block justify-center'>
                        {secontArray.map((value, index) => {
                            return (
                                <>
                                    <div className="lg:w-4/12 w-full h-24  flex justify-center">
                                        <div className="flex flex-col items-center">
                                            <h5 className="mb-1  text-xl font-medium text-gray-900 text-center ">
                                                <span className="text-secondary ">{value.head}</span>
                                                <span className="text-primary text-center"> ENGINEERING</span>
                                            </h5>
                                            <span className="text-sm text-secondary text-center mt-4">
                                                {value.p}
                                            </span>

                                        </div>
                                    </div>

                                    <div className='flex justify-center'>
                                        <hr className="w-[100px] h-[1px]  bg-secondary mt-10 mb-10 lg:mt-7  border-0 rounded dark:bg-gray-700  block lg:rotate-90"></hr>
                                    </div>
                                </>
                            )
                        })}


                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceWhyUs