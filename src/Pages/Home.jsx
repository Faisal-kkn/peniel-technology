import React from 'react'
import { TopHeader, Header, Banner, Clients, Service } from '../Components/index'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Slider from "react-slick";
import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function Home() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    const services = [
        {
            img: 'https://img.freepik.com/free-photo/paperwork_1098-18036.jpg?w=996&t=st=1674209406~exp=1674210006~hmac=58d68544ccf8ae6097fe280fb4bc8b885c47a3b71704648321a398ebdd2a9ea8',
            heading: 'Research Project',
            disc: 'The first step of the successful implementation of any software is analysis and planning.'
        },
        {
            img: 'https://img.freepik.com/free-photo/businessman-showing-changes-report_1098-3504.jpg?w=996&t=st=1674209274~exp=1674209874~hmac=d5934e9766148fc0e249cf6679881eadaeb01840c7fab9207ffc2c12639166f1',
            heading: 'Business Solutions',
            disc: 'Our dedicated team of well-qualified Customer Support Engineers, Technical Engineers, Developers, Designers, and Trainers.'
        },
        {
            img: 'https://img.freepik.com/free-photo/cloud-computing-banner-background-smart-city_53876-108504.jpg?w=996&t=st=1674209330~exp=1674209930~hmac=74f1d7686563830471a30be261f4c19c8aed9c64d795cba8e16690868dccdceb',
            heading: 'Cloud-based',
            disc: 'Our Cloud-based applications are highly configurable to the last extent with a profound understanding.'
        },
        {
            img: 'https://img.freepik.com/free-photo/closeup-economist-using-calculator-while-going-through-bills-taxes-office_637285-3156.jpg?w=996&t=st=1674209367~exp=1674209967~hmac=3611a7c9da53694e537f8e352c7a9ba728a78fcad578aa6e9dea573adb4497f1',
            heading: 'Tax Accounting',
            disc: 'We provide VAT Compatible Accounting Software and our technical engineers are experts in effective implementation.'
        }
    ]

    const clients = [
        'https://www.penieltech.com/assets/images/upload/compnay-logo-5.webp',
        'https://www.penieltech.com/assets/images/upload/compnay-logo-2.webp',
        'https://www.penieltech.com/assets/images/upload/compnay-logo-4.webp',
        'https://www.penieltech.com/assets/images/upload/compnay-logo-3.webp',
        'https://www.penieltech.com/assets/images/upload/compnay-logo-1.webp',
        'https://www.penieltech.com/assets/images/upload/compnay-logo-6.webp'
    ]

    return (
        <>

            <div className='bg-main text-[13px] hidden md:block'>
                <TopHeader />
            </div>
            <div className="banner h-auto md:h-[100vh]" style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/business-team.jpg')` }}>
                <div className='background-overlay'>
                    <Header />
                    <Banner />
                </div>
            </div>
            <div className='mx-auto max-w-7xl px-6 py-[70px] '>
                <p className='text-center text-black text-[17px] pb-4'>We are partnered with following softwares to solve your accounting and digital transformation needs</p>
                <div className=" ">
                    <Slider {...settings}>
                        {
                            clients.map((item, index) => {
                                return (
                                    <div><img src={item} key={index} alt="" /></div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            <section className="about " style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/professional-business-team.jpg')` }}>
                <div className='bg-[rgba(21,73,87,0.7)] py-[100px]'>
                    <div className='mx-auto max-w-7xl px-6 py-2' >
                        <div className='w-6/12 text-white '>
                            <p className='text-[#aed1f9] text-[14px] mb-[10px] tracking-normal font-medium'>What We Do</p>
                            <h2 className='text-[45px] font-bold mb-[20px]'>Your IT Partner.</h2>
                            <p className='text-[16px] font-medium leading-7'>We are the trustworthy suppliers of all sorts of accounting software in Dubai, UAE, Bahrain, Sharjah, Abu Dhabi and, all other Middle East. Our main objective is to organize, strategize and implement solutions to your business with Tally ERP 9, Intuit QuickBooks, Sage 50 US, Sage 50 UK, Sage 100, Sage 300, Elate CRM, Elate HRMS, and Elate POS, etc. We are the exclusive distributor of Elate HRMS and Custom-developed software in UAE, Oman, and Bahrain.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='services py-[70px] bg-[#f9fafc]'>
                <div className='mx-auto max-w-7xl px-6 py-2'>
                    <p className='text-main text-[14px] mb-[10px] tracking-normal font-medium text-center'>OUR SERVICES</p>
                    <h2 className='text-[25px] font-bold mb-[10px] text-center'>Accounting - Inventory - Bookkeeping Management and ERP Solution Provider</h2>
                    <p className='text-[14px] font-normal leading-7 mb-[40px] text-center'>
                        Peniel Technology LLC is the best solution provider for
                        <span className='text-main'> ERP (Enterprise Resource Planning), CRM (Customer Resource Management) </span>
                        and HCM (Human Capital Management) and Accounting Software in UAE.  With more than 270,000 flourishing businesses in Dubai itself, we have our headquarters located in Dubai, aiming to cater to all their  accounting and
                        management requirements and also provide excellent support to all our customers.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 ">
                        {
                            services.map((item, index) => {
                                return (
                                    <Service item={item} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="team py-[70px]">
                <div className='mx-auto max-w-7xl px-6 py-2 flex' >
                    <div className='w-6/12 text-black '>
                        <p className='text-main text-[14px] mb-[10px] tracking-normal font-medium'>Why Peniel Technology?</p>
                        <h2 className='text-[45px] font-bold mb-[20px]'>With Expert Team.</h2>
                        <p className='text-[16px] font-medium leading-7 text-[#868686]'>You can be stress-free since Peniel Technology LLC will take care of your business development and management.</p>
                        <div>
                            <div className='flex gap-4 mt-5 items-center'>
                                <span className='p-1 bg-[rgba(21,101,192,0.2)] rounded-full'>
                                    <CheckCircleIcon className='w-8 h-8 text-main' />
                                </span>
                                <div>
                                    <p>A one-stop-hub for all your Accounting, ERP, CRM and payroll needs.</p>
                                </div>
                            </div>
                            <div className='flex gap-4 mt-5 items-center'>
                                <span className='p-1 bg-[rgba(21,101,192,0.2)] rounded-full'>
                                    <CheckCircleIcon className='w-8 h-8 text-main' />
                                </span>
                                <div>
                                    <p>Provide cost-efficient mobility solutions</p>
                                </div>
                            </div>
                            <div className='flex gap-4 mt-5 items-center'>
                                <span className='p-1 bg-[rgba(21,101,192,0.2)] rounded-full'>
                                    <CheckCircleIcon className='w-8 h-8 text-main' />
                                </span>
                                <div>
                                    <p>Flawlessly embed new technologies to facilitate better governance.</p>
                                </div>
                            </div>
                            <div className='flex gap-4 mt-5 items-center'>
                                <span className='p-1 bg-[rgba(21,101,192,0.2)] rounded-full'>
                                    <CheckCircleIcon className='w-8 h-8 text-main' />
                                </span>
                                <div>
                                    <p>Focus on the customer for accelerated growth.</p>
                                </div>
                            </div>
                            <div className='flex gap-4 mt-5 items-center'>
                                <span className='p-1 bg-[rgba(21,101,192,0.2)] rounded-full'>
                                    <CheckCircleIcon className='w-8 h-8 text-main' />
                                </span>
                                <div>
                                    <p>Customized apps and software tuned to the needs of the customer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-6/12 text-black relative' >
                        <div className='team-bg w-10/12 ml-auto z-30 mb-5 relative rounded-md' style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/preparing-annual-accounts-with-coworkers-1536x1024.jpg')` }}>
                            <div className='bg-white text-center absolute p-6 rounded-full bottom-[-50px] right-[-50px] h-[200px] flex items-center flex-col justify-center' style={{ boxShadow: '0px 30px 60px 0px rgb(0 0 0 / 10%)' }}>
                                <span className='text-[50px] font-bold text-main'>13+</span>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                        <div className='absolute bottom-0 left-0 z-[-1]' style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/bg_2.png')`, height: '200px', width: '170px', backgroundSize: 'cover' }}>

                        </div>
                    </div>
                </div>
            </section>

            <section className="team py-[70px]">
                <div className='mx-auto max-w-7xl px-6 py-2 flex gap-5' >
                    <div className='w-6/12 text-black relative flex gap-5 '  >
                        <div className='team-bg w-6/12  z-30 mb-5 relative rounded-md mt-16' style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/woman-doing-accounting-1536x1071.jpg')` }}>

                        </div>
                        <div className='team-bg w-6/12 z-30 mb-5 relative rounded-md ' style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/preparing-annual-accounts-with-coworkers-1536x1024.jpg')` }}>

                        </div>
                        <div className='absolute bottom-5 right-[-50px] z-[-1]' style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/bg_2.png')`, height: '200px', width: '170px', backgroundSize: 'cover' }}>

                        </div>
                    </div>
                    <div className='w-5/12 text-black  ml-auto'>
                        <p className='text-main text-[14px] mb-[10px] tracking-normal font-medium'>We Prepare Startups For Accelerators</p>
                        <h2 className='text-[45px] font-bold mb-[20px]'>Our services</h2>
                        <p className='text-[16px] font-medium leading-7 text-[#868686] mb-6'>As a pioneer IT solutions firm, we provide accounting, Trading, Invoicing, bookkeeping and management software solutions for all your business requirements. Additionally, we provide software customization, software development according to the necessities of our clients. We also provide hardware equipment for your office along with its installation and demo. All the necessary training for our products is also given by us so that you can start your duties on a fast pace. We also develop eye-catching websites at request for your business.</p>
                        <button className='btn text-white'>Get started now</button>
                    </div>

                </div>
            </section>

            <section className="We_are " style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/multiethnic-business-people-working-together-in-the-office.jpg')` }}>
                <div className='bg-[rgba(21,73,87,0.7)] py-[100px]'>
                    <div className='mx-auto max-w-7xl px-6 flex items-center' >
                        <div className='w-6/12 text-white '>
                            <h2 className='text-[45px] font-bold mb-[20px]'>We are.</h2>
                            <ul className='list-disc list-inside leading-10 '>
                                <li>Tally ERP 9 (Prime) Gold Partner in Dubai, UAE</li>
                                <li> QuickBooks Dealer, Partner, Consultant, Provider, Pro Advisor in Dubai, UAE</li>
                                <li>Sage Accounting Software Partner, Dealer in Dubai, UAE.</li>
                                <li> Official Fortinet Distributor, Dealer, Partner in Dubai, UAE</li>
                                <li> Official Odoo Development, Dealer, Partner in Dubai, UAE</li>
                                <li>Official ERPNext Partner in Dubai, UAE</li>
                            </ul>
                            <h2 className='text-[45px] font-bold mb-[20px] mt-10'>Our support.</h2>
                            <p className='text-[16px] font-medium leading-7'>With more than 2000 satisfied customers, we have built a prominent brand name in the market due to our reliable customer support and unparalleled services. We provide online support via remote-controlled, desktop sharing software and also conduct on-site visits to our customers for training, installation, setup, and other issues that arise which need on-site attention.</p>
                        </div>
                        <div className='w-6/12  '>
                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
                                <div className='mb-4'>
                                    <h2 className='text-[45px] font-bold mb-[10px] text-center'>Contact Form</h2>
                                    <p className='text-center text-[16px] font-medium '>Contact us for custom quote</p>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Your name
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Your Email Address
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Your Phone Number 
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        Product
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                        message
                                    </label>
                                    <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' rows="5"></textarea>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className='btn text-white w-full'> Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
