import React from 'react'
// import { FaEye } from "react-icons/fa";
import Projest1 from '../assets/project1.png'
import Projest2 from '../assets/project2.png'
import Projest3 from '../assets/project3.png'

const Projects = () => {
  return (
    <section className='clr-2 flex flex-col py-20 px-5 lg:py-48 justify-center' id='projests'>
        <div className='w-1/2'>
          <div className='flex justify-center'>
            <h1 className='text-4xl text-white border-b-4 border-line-clr-2 mb-20 w-[135px] font-bold'>Projests</h1>
          </div>
        </div>

        <div className=' w-full'>
          <div className='flex justify-center flex-col md:flex-row px-10 gap-12 '>

            <div className='relative'>
              <img className='h-[200px]' src={Projest1} />
              <div className='clr-4 absolute left-0 right-0 bottom-0 top-0 text-black opacity-0 duration-500 hover:opacity-100'>
                <p className='text-center py-5 px-5'>Rock Paper Scissor buit by using HTML CSS JavaScript</p>
                <p className='text-center font-bold'><a href='https://github.com/rajeshwaran24/rock-paper-scissors'>View code</a></p>
              </div>
            </div>

            <div className='relative'>
              <img className='h-[200px]' src={Projest2} />
              <div className='clr-4 absolute left-0 right-0 bottom-0 top-0 text-black px-5 py-5 opacity-0 duration-500 hover:opacity-100'>
              <p className='text-center py-5 px-5'> Product filter is a website created by using HTML,CSS,JAVASCRIPT.</p>
              <p className='text-center font-bold'><a href='https://github.com/rajeshwaran24/product-filter'>View code</a></p>
              </div>
            </div>

            <div className='relative'>
              <img className='h-[200px]' src={Projest3} />
              <div className='clr-4 absolute left-0 right-0 bottom-0 top-0 text-black px-5 py-5 opacity-0 duration-500 hover:opacity-100'>
              <p className='text-center py-5 px-5'> A simple CRUD list application created by using ReactJS.</p>
              <p className='text-center font-bold'><a href='https://github.com/rajeshwaran24/react-crud'>View code</a></p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects
