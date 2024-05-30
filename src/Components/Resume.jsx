import React from 'react'
import Resumeimg from '../images/resume.jpeg'
import CV from '../CV/Jegadeesh Resume.pdf'

function Resume() {
  return (
    <section id='Resume' className="flex flex-col md:flex-row bg-slate-900  text-white px-5 py-32">
    <div className='md:w-1/2 flex justify-center md:justify-end'>
        <img src={Resumeimg} alt="About"  className="rounded-full w-96 h-96"/>
    </div>
    
    <div className='md:w-1/2 flex justify-center'>
    <div className=' flex flex-col justify-center py-6' >
        <h1 className='text-4xl border-b-4 mb-4 w-[130px] font-bold border-[#e6c702]'>Resume</h1>
        <p className='pb-5 text-2xl'>You can view my resume <a className='btn' href={CV} download={CV}>Download CV</a>  </p>
         
    </div>
    </div>
   </section>
  )
}

export default Resume