import React from 'react'

function Input({ item }) {
  return (
    <div className='mb-3'>
          <input type={item.type} name={item.name} id="" placeholder={item.placeHolder} className='bg-[#1b51777b] border-2 rounded-md w-full px-4 py-4 text-white placeholder:text-white' />
    </div>
  )
}

export default Input
