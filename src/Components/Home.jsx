import React from 'react'
import Homeimg from '../images/Home.jpeg'
import { ImLinkedin} from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Home = () => {
const config = {
  social:{
    linkedin:"https://www.linkedin.com/in/jegadeesh-b-developer/",
    github:"https://github.com/jegadeeshk11",
    Facebook:"https://www.facebook.com/"

  }
}

  return (
    <section id='Home' className='flex flex-col md:flex-row px-5 py-32  bg-slate-900 justify-center' >
<div className='w-1/2 text-white  py-32 flex flex-col'>
  <h1 className='text-3xl'>Hello, its Me</h1>
  <h2 className='text-5xl'>Jeagdeesh</h2><br/>
  <p className='text-3xl'>  I'm a <span className='text-amber-400'>Front-End Developer</span></p><br />
  <p className='text-1xl'>I Can Bring Designs To The World</p> <br/>
  <div className='text-white flex' >
<a href={config.social.linkedin} className='pr-4 hover:text-yellow-300'><ImLinkedin size={35} /></a>
<a href={config.social.github} className='pr-4 hover:text-yellow-300' ><FaGithubSquare size={35} /></a>
<a href={config.social.Facebook} className=' hover:text-yellow-300'><FaFacebook size={35}/></a>
</div>

</div >


<img src={Homeimg} className="md:rounded-full w-96 h-96 py-1 " alt='my-img'/> 




    </section>
  )
}

export default Home