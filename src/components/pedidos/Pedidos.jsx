import React from 'react'

export const Pedidos = () => {
  return (
    <div className='w-96 h-64 bg-white p-8 rounded-2xl ms:mx-0 mx-auto '>
      <h2 className='text-xl text-[#c3410f] font-bold'>Your Cart (0)</h2>
      <div className='text-center'>
        <img className='mx-auto my-2' src="./assets/images/illustration-empty-cart.svg" alt="paster cortado" />
        <small className='text-base'>Your added items will appear here</small>
      </div>
    </div>
  )
}
