import React from 'react'
import ResumeImg from '../assets/resume.jpg'

const Resume = () => {
  return (
    <section className='clr-3 flex flex-col md:flex-row px-5 py-16 lg:py-28 justify-end' id='resume'>
        <div className=' md:w-1/3 py-10'>
            <img src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 mb-5 w-[135px] font-bold  border-line-clr-1'>Resume</h1>
            <p className='pb-5'>You can view my resume <a className='btn' href='https://drive.google.com/file/d/1OGS4wKaab-AmOdeaqqYCDYLhsOVRgCpa/view?usp=drivesdk'>View</a></p>
        </div>
        </div>
    </section>
  )
}

export default Resume
