import React from 'react'
import Aboutimg from'../images/Home.jpeg'

const About = () => {
  return (
   <section id='About' className="flex flex-col md:flex-row bg-slate-900  text-white px-5 py-32">
    <div className='md:w-1/2'>
        <img src={Aboutimg} alt="About"  className="rounded-full w-96 h-96"/>
    </div>
    
    <div className='md:w-1/2 flex justify-center'>
    <div className=' flex flex-col justify-center py-6' >
        <h1 className='text-4xl border-b-4 mb-4 w-[170px] font-bold border-[#e6c702]'>About Me</h1>
        <p className='pb-5 text-2xl'>Hi, my name is Jegadeesh. I am a front-end developer. I build beautiful websites with React.js and Tailwind CSS </p>
        <p className='text-2xl'> I am proficient in frontend skills like HTML, CSS, Bootstrap, React.js, Redux, Tailwind CSS, and more.  </p>
    </div>
    </div>
   </section>
  )
}

export default About