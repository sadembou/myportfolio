import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import ServiceCard from './ServiceCard'
import { SectionWrapper } from './hoc'


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText} >Introduction</p>
        <h2 className={styles.heroHeadText} >Overview.</h2>
      </motion.div>
      <motion.p
        variants={
          fadeIn("", "", 0.1, 1)
        }
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a software developer specializing in 
        JavaScript for front-end development and Computer Vision with Python. 
         I enjoy creating innovative solutions and have experience in real-time web applications that integrate both fields. 
        Let's build something amazing together!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,id)=>
          <ServiceCard index={id} title={service.title} icon={service.icon} />
        )}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")