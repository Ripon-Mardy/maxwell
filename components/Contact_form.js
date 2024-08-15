import React from 'react'

const Contact_form = () => {
  return (
    <>
    <div className='bg-gray-900 text-white p-4 py-5 rounded-md'>
       <div className='text-center'>
       <h1 className='text-3xl font-medium'>Contact Us</h1>
       <div className='w-full bg-gray-600 h-0.5 mb-6 mt-2'></div>
       </div>


        <form action="#" className='flex flex-col gap-4'>
           <div className='flex items-center justify-center gap-6'>
            <input type="text" className='w-full p-2 border border-gray-300 outline-none rounded-sm px-3 text-black' placeholder='Name' required />
            <input type="email" className='w-full p-2 border border-gray-300 outline-none rounded-sm px-3 text-black' placeholder='Email Address' required />
           </div>
           <textarea className='w-full p-2 border border-gray-300 outline-none rounded-sm px-3 text-black' name="" id="" rows={7} placeholder='Message'></textarea>
           <button type='submit' className='bg-gray-500 p-2 px-4 rounded-sm text-lg -tracking-tighter border border-gray-400 hover:bg-gray-800 duration-200 ease-in-out'>send inquiry</button>
        </form>


    </div>
    </>
  )
}

export default Contact_form
