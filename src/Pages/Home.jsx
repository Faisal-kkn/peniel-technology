import React from 'react'
import { TopHeader, Header, Banner, Clients, Service } from '../Components/index'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Slider from "react-slick";
import { motion } from "framer-motion"
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
            <motion.div initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }} className='mx-auto max-w-7xl px-6 py-[70px] overflow-x-hidden'>
                <p className='text-center text-black text-[17px] pb-4'>We are partnered with following softwares to solve your accounting and digital transformation needs</p>
                <div className="overflow-hidden ">
                    <Slider {...settings}>
                        {
                            clients.map((item, index) => {
                                return (
                                    <div key={index} ><img src={item} alt="" /></div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </motion.div>
            <section className="about " style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/professional-business-team.jpg')` }}>
                <div className='bg-[rgba(21,73,87,0.7)] py-[100px]'>
                    <motion.div initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }} className='mx-auto max-w-7xl px-6 py-2' >
                        <div className='w-12/2 md:w-8/12 lg:w-6/12 text-white '>
                            <p className='text-[#aed1f9] text-[14px] mb-[10px] tracking-normal font-medium'>What We Do</p>
                            <h2 className='text-[45px] font-bold mb-[20px]'>Your IT Partner.</h2>
                            <p className='text-[16px] font-medium leading-7'>We are the trustworthy suppliers of all sorts of accounting software in Dubai, UAE, Bahrain, Sharjah, Abu Dhabi and, all other Middle East. Our main objective is to organize, strategize and implement solutions to your business with Tally ERP 9, Intuit QuickBooks, Sage 50 US, Sage 50 UK, Sage 100, Sage 300, Elate CRM, Elate HRMS, and Elate POS, etc. We are the exclusive distributor of Elate HRMS and Custom-developed software in UAE, Oman, and Bahrain.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className='services py-[70px] bg-[#f9fafc]'>
                <div className='mx-auto max-w-7xl px-6 py-2'>
                    <motion.p initial={{ y: -150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }} className='text-main text-[14px] mb-[10px] tracking-normal font-medium text-center'>OUR SERVICES</motion.p>
                    <motion.h2 initial={{ y: -150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }} className='text-[25px] font-bold mb-[10px] text-center'>Accounting - Inventory - Bookkeeping Management and ERP Solution Provider</motion.h2>
                    <motion.p initial={{ y: -150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }} className='text-[14px] font-normal leading-7 mb-[40px] text-center'>
                        Peniel Technology LLC is the best solution provider for
                        <span className='text-main'> ERP (Enterprise Resource Planning), CRM (Customer Resource Management) </span>
                        and HCM (Human Capital Management) and Accounting Software in UAE.  With more than 270,000 flourishing businesses in Dubai itself, we have our headquarters located in Dubai, aiming to cater to all their  accounting and
                        management requirements and also provide excellent support to all our customers.
                    </motion.p>
                    <motion.div initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }} className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {
                            services.map((item, index) => {
                                return (
                                    <Service item={item} key={index} />
                                )
                            })
                        }
                    </motion.div>
                </div>
            </section>
            <section className="team py-[70px]">
                <div className='mx-auto max-w-7xl px-6 py-2 flex md:flex-row flex-col'  >
                    <div className='w-12/12 md:w-6/12 text-black '>
                        <motion.p initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }} className='text-main text-[14px] mb-[10px] tracking-normal font-medium'>Why Peniel Technology?</motion.p>
                        <motion.h2 initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }} className='text-[45px] font-bold mb-[20px]'>With Expert Team.</motion.h2>
                        <motion.p initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }} className='text-[16px] font-medium leading-7 text-[#868686]'>You can be stress-free since Peniel Technology LLC will take care of your business development and management.</motion.p>
                        <div>
                            <motion.div initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }} className='flex gap-4 mt-5 items-center'>
                                <span className='p-1 bg-[rgba(21,101,192,0.2)] rounded-full'>
                                    <CheckCircleIcon className='w-8 h-8 text-main' />
                                </span>
                                <div>
                                    <p>A one-stop-hub for all your Accounting, ERP, CRM and payroll needs.</p>
                                </div>
                            </motion.div>
                            <motion.div initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }} className='flex gap-4 mt-5 items-center'>
                                <span className='p-1 bg-[rgba(21,101,192,0.2)] rounded-full'>
                                    <CheckCircleIcon className='w-8 h-8 text-main' />
                                </span>
                                <div>
                                    <p>Provide cost-efficient mobility solutions</p>
                                </div>
                            </motion.div>
                            <motion.div initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7 }} className='flex gap-4 mt-5 items-center'>
                                <span className='p-1 bg-[rgba(21,101,192,0.2)] rounded-full'>
                                    <CheckCircleIcon className='w-8 h-8 text-main' />
                                </span>
                                <div>
                                    <p>Flawlessly embed new technologies to facilitate better governance.</p>
                                </div>
                            </motion.div>
                            <motion.div initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }} className='flex gap-4 mt-5 items-center'>
                                <span className='p-1 bg-[rgba(21,101,192,0.2)] rounded-full'>
                                    <CheckCircleIcon className='w-8 h-8 text-main' />
                                </span>
                                <div>
                                    <p>Focus on the customer for accelerated growth.</p>
                                </div>
                            </motion.div>
                            <motion.div initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.9 }} className='flex gap-4 mt-5 items-center'>
                                <span className='p-1 bg-[rgba(21,101,192,0.2)] rounded-full'>
                                    <CheckCircleIcon className='w-8 h-8 text-main' />
                                </span>
                                <div>
                                    <p>Customized apps and software tuned to the needs of the customer.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className='w-12/12 md:w-6/12 text-black relative mt-10 md:mt-0' >
                        <div className='team-bg w-11/12 mx-auto md:ml-auto z-30 mb-5 relative rounded-md' style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/preparing-annual-accounts-with-coworkers-1536x1024.jpg')` }}>
                            <div className='bg-white text-center absolute p-6 rounded-full bottom-[-50px] right-[-20px] md:right-[-30px] lg:right-[-50px] h-[200px] flex items-center flex-col justify-center ' style={{ boxShadow: '0px 30px 60px 0px rgb(0 0 0 / 10%)' }}>
                                <span className='text-[50px] font-bold text-main'>13+</span>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                        <div className='absolute bottom-0 left-0 z-[-1] ' style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/bg_2.png')`, height: '200px', width: '170px', backgroundSize: 'cover' }}></div>
                    </div>
                </div>
            </section>

            <section className="team py-[70px] overflow-hidden">
                <div className='mx-auto max-w-7xl px-6 py-2 flex flex-col md:flex-row gap-5' >
                    <motion.div initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }} className='w-12/12 md:w-6/12 text-black relative flex gap-5 '  >
                        <div className='team-bg w-6/12  z-30 mb-5 relative rounded-md mt-16' style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/woman-doing-accounting-1536x1071.jpg')` }}>

                        </div>
                        <div className='team-bg w-6/12 z-30 mb-5 relative rounded-md ' style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/preparing-annual-accounts-with-coworkers-1536x1024.jpg')` }}>

                        </div>
                        <div className='absolute bottom-5 right-[-20px] md:right-[-50px] z-[-1]' style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/bg_2.png')`, height: '200px', width: '170px', backgroundSize: 'cover' }}>

                        </div>
                    </motion.div>
                    <motion.div initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.9 }} className='w-12/12 md:w-5/12 text-black  ml-auto'>
                        <p className='text-main text-[14px] mb-[10px] tracking-normal font-medium'>We Prepare Startups For Accelerators</p>
                        <h2 className='text-[45px] font-bold mb-[20px]'>Our services</h2>
                        <p className='text-[16px] font-medium leading-7 text-[#868686] mb-6'>As a pioneer IT solutions firm, we provide accounting, Trading, Invoicing, bookkeeping and management software solutions for all your business requirements. Additionally, we provide software customization, software development according to the necessities of our clients. We also provide hardware equipment for your office along with its installation and demo. All the necessary training for our products is also given by us so that you can start your duties on a fast pace. We also develop eye-catching websites at request for your business.</p>
                        <motion.button initial={{ opacity: 0, scale: 0.4 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }} className='btn text-white'>Get started now</motion.button>
                    </motion.div>

                </div>
            </section>

            <section className="We_are overflow-hidden" style={{ backgroundImage: `url('https://kitnew.moxcreative.com/mocounta/wp-content/uploads/sites/20/2022/11/multiethnic-business-people-working-together-in-the-office.jpg')` }}>
                <div className='bg-[rgba(21,73,87,0.7)] py-[100px]'>
                    <div className='mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center overflow-hidden' >
                        <motion.div className='w-12/12 lg:w-6/12 text-white'>
                            <h2 className='text-[45px] font-bold mb-[20px]'>We are.</h2>
                            <ul className='list-disc list-inside leading-10 '>
                                <motion.li initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }} >Tally ERP 9 (Prime) Gold Partner in Dubai, UAE</motion.li>
                                <motion.li initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }} > QuickBooks Dealer, Partner, Consultant, Provider, Pro Advisor in Dubai, UAE</motion.li>
                                <motion.li initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }} >Sage Accounting Software Partner, Dealer in Dubai, UAE.</motion.li>
                                <motion.li initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }} > Official Fortinet Distributor, Dealer, Partner in Dubai, UAE</motion.li>
                                <motion.li initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.9 }} > Official Odoo Development, Dealer, Partner in Dubai, UAE</motion.li>
                                <motion.li initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }} >Official ERPNext Partner in Dubai, UAE</motion.li>
                            </ul>
                            <motion.h2  initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}  className='text-[45px] font-bold mb-[20px] mt-10'>Our support.</motion.h2>
                            <motion.p  initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: .7 }}
                            transition={{ duration: .5 }}  className='text-[16px] font-medium leading-7'>With more than 2000 satisfied customers, we have built a prominent brand name in the market due to our reliable customer support and unparalleled services. We provide online support via remote-controlled, desktop sharing software and also conduct on-site visits to our customers for training, installation, setup, and other issues that arise which need on-site attention.</motion.p>
                        </motion.div>
                        <motion.div initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.9 }} className='w-full lg:w-6/12 mt-10 lg:mt-0'>
                            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
                                <div className='mb-4'>
                                    <h2 className='text-[25px] md:text-[35px] lg:text-[45px] font-bold mb-[10px] text-center'>Contact Form</h2>
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

                        </motion.div>
                    </div>
                </div>
            </section>
            <section className='py-[60px] pb-3'>
                <div className='mx-auto max-w-7xl px-6' >
                    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                            <div className="mb-6 md:mb-0">
                                <img src="https://www.penieltech.com/assets/images/peniel-technology-logo.png" className="h-8 mr-3 mb-5" alt="FlowBite Logo" />
                                <p className='text-[14px]'>Authorized Accounting Software Dealer and IT Solutions Provider in Dubai, Sharjah, Ajman, Abu Dhabi, Fujairah, Al ain - United Arab Emirates</p>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">QUICK LINKS</h2>
                                <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
                                    <li className="mb-4">
                                        <a className="hover:underline">Odoo</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Tally Prime</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">ERPNext</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Quickbooks</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Hardware</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">VAT</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Sage</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Shop.penieltech.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">ELATE PRODUCTS</h2>
                                <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
                                    <li className="mb-4">
                                        <a className="hover:underline">Elate HRMS</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Elate CRM</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Elate TMS</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Elate POS</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Elate QBAddins</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">ERP Software</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">GET IN TOUCH</h2>
                                <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
                                    <li className="mb-4">
                                        <a className="hover:underline">Odoo</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Tally Prime</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">ERPNext</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Quickbooks</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Hardware</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">VAT</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Sage</a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="hover:underline">Shop.penieltech.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">2022 © All Rights Reserved | Designed by <a href="https://www.penieltech.com/" className="hover:underline"> Peniel Technology LLC</a>.
                            </span>
                            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                                <a href="https://www.facebook.com/penieltech" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                                    <span className="sr-only">Instagram page</span>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    <span className="sr-only">Twitter page</span>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                    <span className="sr-only">GitHub account</span>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                    <span className="sr-only">Dribbbel account</span>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>


            </section>
        </>
    )
}

export default Home
