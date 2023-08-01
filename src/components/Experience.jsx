import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences } from '../constants'
import { SectionWrapper } from './hoc'
import { textVariant } from '../utils/motion'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText} >So Far</p>
        <h2 className={styles.heroHeadText} >Work Experience.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col' >
        <VerticalTimeline>
          {experiences && experiences.map((experience, id)=>(
            <ExperienceCard experience={experience} key={id} />
          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")