import React from 'react'
import cv from '../assets/logo_cv.png'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <>
      <img
        src={cv}
        alt="logo_cv"
        className="sm:w-[50px] w-[30px] sm:h-[50px] h-[30px] object-contain cursor-pointer sm:mt-5 mt-2 sm:mb-[-4rem] mb-[-3rem] ml-[17rem] sm:ml-[70rem]"
        onClick={() =>
          handleIconClick(
            'https://drive.google.com/file/d/1QsRRhaw762fGHloKwI91MM8jpXFC6wzP/view?usp=drive_link',
          )
        }
      />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-5 text-[#d2c9c9] text-justify sm:text-[18px] text-[13px] max-w-3xl leading-[30px]"
      >
        I am a serious and invested person, ready to assume missions as a web
        developer for the development , maintenance and management of sites. <br /> I'm
        currently working for Precious Infosystem Pvt. Ltd. as a front-end developer . <br /> I continue my
        professional and personal development through self-training on
        programming languages and new technologies.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, 'about')
