import React from 'react'

function Clients() {
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
      {
              clients.map((item, index)=>{
                return(
                    <img src={item} key={index} alt="" />
                )
              })
      }
    </>
  )
}

export default Clients
