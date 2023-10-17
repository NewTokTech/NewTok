import React from 'react';
import './career.css'
import Link from 'next/link';

function Career() {
    return (
        <section className='my-28'>
            <div>
                <h1 className="text-secondary lg:text-[40px] text-[30px] mt-5 text-center font-semibold">
                    <span className="text-secondary"></span>Care<span className="text-primary">ers</span>

                </h1>
                <div className='flex justify-center'>
                    <p className="text-secondary lg:text-[18px]  mt-5 text-center  max-w-lg font-semibold">
                        We believe our power is our people. We value the employee relationship and understand the importance of a positive work environment where you can develop your life and career in ways that are unique to your own abilities. Our culture is centered on a casual environment, which promotes teamwork, creativity and fun.
                    </p>
                </div>

            </div>
            <div>
                <h1 className="text-secondary  text-[20px] mt-5 text-center font-semibold">
                    <span className="text-secondary"></span> <span className="text-secondary">OPENINGS</span>

                </h1>
                <div className="accordion ">
                    {/* Span to target fix closing accordion */}
                    <span className="target-fix" id="accordion"></span>

                    {/* First Accordion Option */}
                    <div>
                        {/* Span to target fix accordion */}
                        <span className="target-fix" id="accordion1"></span>

                        {/* Link to open accordion, hidden when open */}
                        <a href="#accordion1" id="open-accordion1" title="open">
                            First Accordion
                        </a>



                        {/* Link to close accordion, hidden when closed */}
                        <a href="#accordion" id="close-accordion1" title="close">
                            First Accordion
                        </a>

                        {/* Accordion content goes in this div */}
                        <div className="accordion-content">
                            <h1 className='text-secondary'>Essential skills</h1>
                            <span>PHP, MySQL</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Experience</h1>
                            <span>4 years</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Desirable Skills and Expertise</h1>
                            <span>PHP, Codeigniter/Laravel/Yii, Clouds, APIs, HTML, CSS, Javascript, JQuery, AJAX, JSON, XML, Linux, Apache</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Qualification</h1>
                            <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br />
                        </div>
                    </div>



                    {/* Second Accordion Option */}
                    <div className=''>
                        <span className="target-fix" id="accordion2"></span>
                        <a href="#accordion2" id="open-accordion2" title="open">
                            Second Accordion
                        </a>
                        <a href="#accordion" id="close-accordion2" title="close">
                            Second Accordion
                        </a>
                        <div className="accordion-content">
                            <h1 className='text-secondary'>Essential skills</h1>
                            <span>PHP, MySQL</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Experience</h1>
                            <span>4 years</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Desirable Skills and Expertise</h1>
                            <span>PHP, Codeigniter/Laravel/Yii, Clouds, APIs, HTML, CSS, Javascript, JQuery, AJAX, JSON, XML, Linux, Apache</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Qualification</h1>
                            <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br />
                        </div>
                    </div>



                    {/* Third Accordion Option */}
                    <div>
                        <span className="target-fix" id="accordion3"></span>
                        <a href="#accordion3" id="open-accordion3" title="open">
                            Third Accordion
                        </a>
                        <a href="#accordion" id="close-accordion3" title="close">
                            Third Accordion
                        </a>
                        <div className="accordion-content">
                            <h1 className='text-secondary'>Essential skills</h1>
                            <span>PHP, MySQL</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Experience</h1>
                            <span>4 years</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Desirable Skills and Expertise</h1>
                            <span>PHP, Codeigniter/Laravel/Yii, Clouds, APIs, HTML, CSS, Javascript, JQuery, AJAX, JSON, XML, Linux, Apache</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Qualification</h1>
                            <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br />
                        </div>
                    </div>



                    {/* Fourth Accordion Option */}
                    <div>
                        <span className="target-fix" id="accordion4"></span>
                        <a href="#accordion4" id="open-accordion4" title="open">
                            Senior Software Engineer- Team Lead
                        </a>
                        <a href="#accordion" id="close-accordion4" title="close">
                            Senior Software Engineer- Team Lead
                        </a>
                        <div className="accordion-content">
                            <h1 className='text-secondary'>Essential skills</h1>
                            <span>PHP, MySQL</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Experience</h1>
                            <span>4 years</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Desirable Skills and Expertise</h1>
                            <span>PHP, Codeigniter/Laravel/Yii, Clouds, APIs, HTML, CSS, Javascript, JQuery, AJAX, JSON, XML, Linux, Apache</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Qualification</h1>
                            <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br />
                        </div>
                    </div>



                    {/* Fifth Accordion Option */}
                    {/* <div>
                        <span className="target-fix" id="accordion5"></span>
                        <a href="#accordion5" id="open-accordion5" title="open">
                            Fifth Accordion
                        </a>
                        <a href="#accordion" id="close-accordion5" title="close">
                            Fifth Accordion
                        </a>
                        <div className="accordion-content">
                            <h1 className='text-secondary'>Essential skills</h1>
                              <span>PHP, MySQL</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Experience</h1>
                              <span>4 years</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Desirable Skills and Expertise</h1>
                              <span>PHP, Codeigniter/Laravel/Yii, Clouds, APIs, HTML, CSS, Javascript, JQuery, AJAX, JSON, XML, Linux, Apache</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Qualification</h1>
                              <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br />
                        </div>
                    </div> */}

                    {/* Sixth Accordion Option */}
                    {/* <div>
                        <span className="target-fix" id="accordion6"></span>
                        <a href="#accordion6" id="open-accordion6" title="open">
                            Sixth Accordion
                        </a>
                        <a href="#accordion" id="close-accordion6" title="close">
                            Sixth Accordion
                        </a>
                        <div className="accordion-content">
                            <h1 className='text-secondary'>Essential skills</h1>
                              <span>PHP, MySQL</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Experience</h1>
                              <span>4 years</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Desirable Skills and Expertise</h1>
                              <span>PHP, Codeigniter/Laravel/Yii, Clouds, APIs, HTML, CSS, Javascript, JQuery, AJAX, JSON, XML, Linux, Apache</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Qualification</h1>
                              <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br />
                        </div>
                    </div> */}

                    {/* Seventh Accordion Option */}
                    {/* <div>
                        <span className="target-fix" id="accordion7"></span>
                        <a href="#accordion7" id="open-accordion7" title="open">
                            Seventh Accordion
                        </a>
                        <a href="#accordion" id="close-accordion7" title="close">
                            Seventh Accordion
                        </a>
                        <div className="accordion-content">
                            <h1 className='text-secondary'>Essential skills</h1>
                              <span>PHP, MySQL</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Experience</h1>
                              <span>4 years</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Desirable Skills and Expertise</h1>
                              <span>PHP, Codeigniter/Laravel/Yii, Clouds, APIs, HTML, CSS, Javascript, JQuery, AJAX, JSON, XML, Linux, Apache</span>
                            <br />
                            <br />
                            <h1 className='text-secondary'>Qualification</h1>
                              <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br />
                        </div>
                    </div> */}

                    <div className="career-container">
                    <div className='flex justify-center'>
                            <p className="text-secondary lg:text-[18px]  mt-5 text-center  max-w-lg font-semibold">
                                Send Resume
                            </p>
                        </div>
                        <h1 className="text-secondary lg:text-[30px] text-[30px]  text-center font-semibold">
                            <Link href='mailto:career@newtoktech.com'></Link>
                            <span className="text-primary">career@newtoktech.com</span>
                        </h1>
                     
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Career;
