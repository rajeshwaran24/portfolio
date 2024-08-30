import React from 'react';
import HeroImg from '../assets/hero.png'
import { BsLinkedin , BsGithub} from "react-icons/bs";

const Hero = () => {
  return (
    <>
    <section className='clr-2 flex px-5 py-24 lg:py-52 justify-center items-center flex-col md:flex-row' id='hero'>
      <div className='md:w-1/2'>
        <h1 className='text-white text-5xl font-font-1'>Hi,<br/>Im Rajeshwaran G
        <p className='text-2xl'>Im a Front-End Developer</p>
        </h1>
        <div className='flex py-7 '>
          <a href='https://www.linkedin.com/in/rajesh-waran-94aa7326a/' className='pr-6 hover:text-white'><BsLinkedin size={35}/></a>
          <a href='https://github.com/rajeshwaran24' className='hover:text-white'><BsGithub size={35}/></a>
        </div>
      </div>
    <img className='md:w-1/3 ' src={HeroImg} />
    </section>
    </>
  )
}

export default Hero
