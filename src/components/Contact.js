import React from 'react'

const Contact = () => {
  return (
    <section className='clr-2 flex flex-col  px-5 py-32' id='contact'>
        <div className='flex flex-col items-center text-white'>
            <h1 className='text-4xl border-b-4 mb-5 w-[135px] font-bold  border-line-clr-2'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            {/* <p><span className='font-bold text-white'>Email : </span><a href="mailto:rajeshwaran7ms@gmail.com">rajeshwaran7ms@gmail.com</a></p> */}
            <p><span className='font-bold pb-3 '>Email : </span>rajeshwaran7ms@gmail.com</p>
            <p><span className='font-bold pb-3 '>Phone : </span>+91 9080068881</p>
        </div>
    </section>
  )
}

export default Contact
