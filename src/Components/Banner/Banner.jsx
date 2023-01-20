import { motion } from "framer-motion"

const form = [
    {
        name: '',
        placeHolder: 'Full Name',
        type: 'text'
    },
    {
        name: '',
        placeHolder: 'Phone',
        type: 'number'
    },
    {
        name: '',
        placeHolder: 'Email',
        type: 'email'
    },
    {
        name: '',
        placeHolder: 'Sellect product',
        type: 'text'
    },
]

function Banner() {
    return (
        <div className='mx-auto max-w-7xl px-6 py-2 text-white flex-col flex gap-7 items-center justify-center h-[90%]'>
            <div className='text-center w-12/12 md:w-8/12 mx-auto'>
                <motion.h1 initial={{ x: -300}}
                    animate={{ x: 0}}
                    transition={{ duration: 0.5 }}
                    className='text-[35px] md:text-[55px] font-black '>
                    COMPLETE
                    ACCOUNTING & IT
                    SOLUTIONS.
                </motion.h1>
                <motion.p initial={{ x: 300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-[16px]">
                    Accounting software that manages your finances, keeps you VAT compliant,
                    automates business workflows, and helps you work collectively across
                    departments. A one-stop-hub for all your Accounting, ERP, CRM and Payroll.
                </motion.p>
            </div>
            <motion.button initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }} className='bg-main p-3 rounded-[3px] uppercase btn mb-5'>Get in touch</motion.button>
        </div>
    )
}

export default Banner
