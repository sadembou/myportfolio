import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'


const FeedbackCard = ({index,testimonial, name, designation, company,image }) => {
  return (
    <motion.div 
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-black-200 p-10 rounded-3xl xs:w-[300px] w-full'
    >
        <p className='text-white font-black text-[48px]' >"</p>
        <div className="mt-1">
            <p className='text-white tracking-wider text-[17px]' > {testimonial} </p>
            <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex flex-col flex-1">
                    <p className='text-white font-medium text-[16px]' >
                        <span className='blue-text-gradient' >@</span> {name} 
                    </p>
                    <p className='mt-1 text-secondary text-[14px]' >
                        {designation}, {company}
                    </p>
                </div>
                <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover' />
            </div>
        </div>
    </motion.div>
  )
}

export default FeedbackCard