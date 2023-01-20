import Input from '../Input/Input'

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
                <h1 className='text-[35px] md:text-[55px] font-black '>
                    COMPLETE
                    ACCOUNTING & IT
                    SOLUTIONS.
                </h1>
                <p className="text-[16px]">
                    Accounting software that manages your finances, keeps you VAT compliant,
                    automates business workflows, and helps you work collectively across
                    departments. A one-stop-hub for all your Accounting, ERP, CRM and Payroll.
                </p>
            </div>
            <button className='bg-main p-3 rounded-[3px] uppercase btn mb-5'>Get in touch</button>
            {/* <div className='w-12/12  md:w-8/12 left-side'>
          </div> */}
            {/* <div className='w-12/12 md:w-4/12 '>
              {
                  form.map((item, index)=>{
                      return(
                          <Input item={item} key={index} />
                      )
                  })
              }
              <button className='text-center bg-white text-main w-full py-4 rounded-md'>CONTACT ME</button>
          </div> */}
        </div>
    )
}

export default Banner
