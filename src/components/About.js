import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {
  return (
    <section className='clr-3 flex flex-col md:flex-row px-5 py-20 justify-between ' id='about'>
        <div className=' md:w-1/3 py-10'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 mb-5 w-[170px] font-bold  border-line-clr-1'>About Me</h1>
            <p className='pb-5'>Hi My name is Rajeshwaran G .I am a highly motivated Front End Developer with a passion for
            creating user-friendly websites and applications. I specialise in
            HTML5, CSS3, JavaScript, React ,Tailwind css.</p>
            <p className='pb-5'>
            I have a proven ability to
            collaborate effectively with both technical and non-technical teams,
            and am always looking for ways to improve my knowledge and skills.
            </p> 
            <p className='pb-5'>
            Am looking forward to prove my excellence with the dynamically
            growing company who appreciates quality.</p>
        </div>
        </div>
    </section>
  )
}

export default About
