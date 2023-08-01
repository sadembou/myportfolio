import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { Tilt } from 'react-tilt'
import { github, live } from '../assets'

const ProjectCard = ({index, name, description, source_code_link, live_site_link, tags, image}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index*0.3, 0.5)} >
       <Tilt
        options={{
            max : 18,
            speed : 400,
            scale:1
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" 
       >
            <div className='relative w-full h-[230px] p-' >
                <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
                <div className="absolute flex justify-end inset-0 m-3 gap-1 ">
                    <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        onClick={()=>window.open(source_code_link, "_blanck")}
                    >
                        <img src={github} alt='github'/>
                    </div>
                    <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        onClick={()=>window.open(live_site_link, "_blanck")}
                    >
                        <img src={live} alt='live' className="w-1/2 h-1/2" />
                    </div>
                </div>
            </div>
            
            <div className="mt-5">
                <h3 className='text-white font-bold text-[25px]' >{name}</h3>
                <p className='mt-2 text-secondary text-[16px]' > {description} </p>
            </div>
            <div className="mt-4  flex flex-wrap gap-2">
                {tags.map((tag)=>(
                    <p className={`text-[14px] ${tag.color} font-bold`} >
                        #{tag.name}
                    </p>
                ))}
            </div>
       </Tilt>
    </motion.div>
  )
}

export default ProjectCard