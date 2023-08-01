import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github } from '../assets'
import { SectionWrapper } from './hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import ProjectCard from './ProjectCard'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText} >My work</p>
        <h2 className={styles.heroHeadText} >Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[15px] max-w-3xl leading-[30px]'
        >    
          The presented projects demonstrate my skills and experience through tangible real-world instances of my work. 
          Each project is concisely described and accompanied by links to the respective code repositories and video demos. 
          They exemplify my proficiency in tackling intricate challenges, 
          adeptness in handling diverse technologies, and effectiveness in project management.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, id)=>(
          <ProjectCard key={`project-${id}`} index = {id} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")