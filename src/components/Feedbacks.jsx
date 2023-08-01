import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { testimonials } from '../constants'
import { textVariant } from '../utils/motion'
import FeedbackCard from './FeedbackCard'
import { SectionWrapper } from './hoc'

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]' >
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()} >
          <p className={`${styles.sectionSubText}`} >What others say</p>
          <h2 className={`${styles.sectionHeadText}`} >Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, id)=> (
          <FeedbackCard key={testimonial.name} index={id} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")