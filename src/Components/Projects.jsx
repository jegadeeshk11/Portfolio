import React from 'react'
import qrcode from '../images/QR-CODE.png'
import weather from '../images/weather.jpg'
import bookshop from '../images/Bookshop.png'

function Projects() {

const config ={
    Projects :[

        {
            image:qrcode,
            Description:"QR code generator using React.js, Tailwind CSS, useState, functions, conditional rendering, and download functionality.",
            link:"https://jegadeeshk11.github.io/QR-CODE/"

        },


        {
            image:weather,
            Description:"Weather app. build with HTML, CSS and JavaScript.",
            link:"https://github.com/jegadeeshk11/Wheather.git"

        },
        
        {
            image:bookshop,
            Description:"Bookshop. build with HTML, CSS and JavaScript.",
            link:"https://jegadeeshk11.github.io/Bookish-Delights/"

        }


    ]
}



  return (
   <section id='Projects' className="flex flex-col py-32 px-5 justify-center  bg-slate-900  text-white">
<div className="w-1/2 " > 
<div className='flex flex-col px-10 py-6 ' >
<h1 className='text-4xl border-b-4 mb-4 w-[138px] font-bold border-[#e6c702] '>Projects</h1>
<p>This are my best projects. I have built it with ReactJS and vanila CSS. check them out.</p>
</div>

</div>
<div className="w-full ">
    <div className='flex flex-col md:flex-row px-5 gap-6 '>
        {config.Projects.map((Project)=>(

<div className='relative'>
<img className='h-[300px] w-[500px]'  src={Project.image} alt="wheather"/>
<div className='absolute left-0 right-0 bottom-0 top-0 bg-blue-800 opacity-0 duration -500 hover:opacity-100'>
    <p className='text-center py-6'>{Project.Description} </p>
    <div className='flex justify-center'>
        <a className='viewbtn' target='_blank' rel="noreferrer" href={Project.link} > View Project</a>
    </div>
    </div>
</div>
        ))}




{/* <div className='relative'>
<img className='h-[300px] w-[500px]' src={calimg} alt="calculator" />
<div className='absolute left-0 right-0 bottom-0 top-0 bg-blue-800 opacity-0 duration -500 hover:opacity-100' >
    <p className='text-center px-5 py-6'> </p>
    </div>
    
</div> */}



{/* <div className='relative'>
<img className='h-[300px] w-[500px]' src={bookshop} alt="Bookshop" />
<div className='absolute left-0 right-0 bottom-0 top-0 bg-blue-800 opacity-0 duration -500 hover:opacity-100'>
    <p className='text-center py-6'></p>
    </div>
</div> */}

    
    </div>
    
    </div>

   </section>
    
  )
}

export default Projects