import React from 'react'

function Service({ item }) {
  return (
    <div className='bg-white w-full rounded-md overflow-hidden'>
      <img src={item.img} alt={item.heading} />
      <div className='flex flex-col'>
        <div className='p-5 h-auto md:h-[140px] lg:h-[150px] '>
          <h2 className='text-[20px] font-bold '>{item.heading}</h2>
          <p className='text-[14px]'>{item.disc}</p>
        </div>
        <div className='w-full bg-main px-5 py-3 text-white text-center font-light uppercase text-[13px]'>Learn more</div>
      </div>
    </div>
  )
}

export default Service
