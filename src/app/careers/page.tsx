/* eslint-disable react/no-unescaped-entities */
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
                        Java Developer
                        </a>



                        {/* Link to close accordion, hidden when closed */}
                        <a href="#accordion" id="close-accordion1" title="close">
                            Java Developer
                        </a>

                        {/* Accordion content goes in this div */}
                        <div className="accordion-content">
                            <h1 className='text-primary'>Essential skills</h1>
                            <span className='text-secondary'>Spring Boot, Microservices, MySQL, Kafka</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Experience</h1>
                            <span className='text-secondary'>3+ years</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Desirable Skills and Expertise</h1>
                            <span className='text-secondary'>We are seeking a highly skilled and experienced Senior Software Engineer to join our dynamic team. The ideal candidate should have a minimum of 3 years of experience in Spring Boot, Microservices, MySQL, and Kafka, along with an M.Tech degree in a related field. This position will play a critical role in designing, developing, and maintaining our microservices architecture and data integration solutions. If you are a passionate and creative software engineer with a strong technical background, this is an exciting opportunity to contribute to the growth and innovation of our organization.</span>
                            <br />
                            <br />
                            {/* <h1 className='text-primary'>Qualification</h1>
                            <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br /> */}
                        </div>
                    </div>



                    {/* Second Accordion Option */}
                    <div className=''>
                        <span className="target-fix" id="accordion2"></span>
                        <a href="#accordion2" id="open-accordion2" title="open">
                            Database Architect
                        </a>
                        <a href="#accordion" id="close-accordion2" title="close">
                            Database Architect
                        </a>
                        <div className="accordion-content">
                            <h1 className='text-primary'>Essential skills</h1>
                            <span>MySQL, PostgreSQL, MongoDB</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Experience</h1>
                            <span className='text-secondary'>5+ years</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Desirable Skills and Expertise</h1>
                            <span className='text-secondary'>We are seeking a highly experienced and talented Senior Database Architect with a minimum of 5 years of extensive hands-on experience in database design, optimization, and management. As a Senior Database Architect, you will be responsible for designing and managing our organization's database architecture, ensuring data integrity, performance, and scalability across various database systems. If you are a seasoned professional with a deep understanding of database technologies and a track record of successfully architecting and maintaining complex databases, this is an exciting opportunity to lead our data management efforts.</span>
                            {/* <br />
                            <br />
                            <h1 className='text-primary'>Qualification</h1>
                            <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br /> */}
                        </div>
                    </div>



                    {/* Third Accordion Option */}
                    <div>
                        <span className="target-fix" id="accordion3"></span>
                        <a href="#accordion3" id="open-accordion3" title="open">
                            Project Team Lead
                        </a>
                        <a href="#accordion" id="close-accordion3" title="close">
                            Project Team Lead
                        </a>
                        <div className="accordion-content">
                            <h1 className='text-primary'>Essential skills</h1>
                            <span className='text-secondary'>Full Stack Web Development</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Experience</h1>
                            <span className='text-secondary'>3+ years</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Desirable Skills and Expertise</h1>
                            <span className='text-secondary'>We are seeking an experienced Full Stack Development Team Lead with a minimum of 3 years of team leadership experience, and a background as a full stack developer. In this role, you will be responsible for leading a team of developers and coordinating the delivery of full stack web and application projects. This position requires a unique blend of technical expertise and leadership skills. If you have a strong background in full stack development and proven leadership abilities, this role offers an exciting opportunity to lead and contribute to our development projects' success.</span>
                            {/* <br />
                            <br />
                            <h1 className='text-primary'>Qualification</h1>
                            <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br /> */}
                        </div>
                    </div>



                    {/* Fourth Accordion Option */}
                    {/* <div>
                        <span className="target-fix" id="accordion4"></span>
                        <a href="#accordion4" id="open-accordion4" title="open">
                            Senior Software Engineer- Team Lead
                        </a>
                        <a href="#accordion" id="close-accordion4" title="close">
                            Senior Software Engineer- Team Lead
                        </a>
                        <div className="accordion-content">
                            <h1 className='text-primary'>Essential skills</h1>
                            <span>PHP, MySQL</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Experience</h1>
                            <span>4 years</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Desirable Skills and Expertise</h1>
                            <span>PHP, Codeigniter/Laravel/Yii, Clouds, APIs, HTML, CSS, Javascript, JQuery, AJAX, JSON, XML, Linux, Apache</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Qualification</h1>
                            <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br />
                        </div>
                    </div> */}



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
                            <h1 className='text-primary'>Essential skills</h1>
                              <span>PHP, MySQL</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Experience</h1>
                              <span>4 years</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Desirable Skills and Expertise</h1>
                              <span>PHP, Codeigniter/Laravel/Yii, Clouds, APIs, HTML, CSS, Javascript, JQuery, AJAX, JSON, XML, Linux, Apache</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Qualification</h1>
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
                            <h1 className='text-primary'>Essential skills</h1>
                              <span>PHP, MySQL</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Experience</h1>
                              <span>4 years</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Desirable Skills and Expertise</h1>
                              <span>PHP, Codeigniter/Laravel/Yii, Clouds, APIs, HTML, CSS, Javascript, JQuery, AJAX, JSON, XML, Linux, Apache</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Qualification</h1>
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
                            <h1 className='text-primary'>Essential skills</h1>
                              <span>PHP, MySQL</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Experience</h1>
                              <span>4 years</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Desirable Skills and Expertise</h1>
                              <span>PHP, Codeigniter/Laravel/Yii, Clouds, APIs, HTML, CSS, Javascript, JQuery, AJAX, JSON, XML, Linux, Apache</span>
                            <br />
                            <br />
                            <h1 className='text-primary'>Qualification</h1>
                              <span>B.E/B-Tech/MCA/BCA/Bsc(CS)</span>
                            <br />
                            <br />
                        </div>
                    </div> */}

                    <div className="career-container">
                    <div className='flex justify-center'>
                            <p className="text-secondary lg:text-[18px]  mt-5 text-center  max-w-lg font-semibold">
                                SEND RESUME TO
                            </p>
                        </div>
                        <h1 className="text-secondary lg:text-[30px] text-[20px]  text-center font-semibold">
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
