import React from 'react'
import Title from '../components/Title'
import Testimonial from '../components/Testimonial'
import '../styles/sections/Testimonials.scss'
import { textAnimation, cardAnimation } from '../utils/Animations'
import { useScroll } from '../components/useScroll'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const [element, controls] = useScroll()

  return (
    <div className='testimonials-container' id='testimonial' ref={element}>
      <div className='container'>
        <motion.div
          className='title-container'
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title='Testimonials' color='blue' lineCenter={true} />
          <p>See what our clients are saying about us</p>
        </motion.div>
        <div className='testimonials'>
          <Testimonial
            content='The best on the net! Software development saved my business. I use Software development often. I am really satisfied with my Software Development.'
            name='Trushit Vyas'
            designation='Co-Founder'
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content='Mobile application developer is exactly what our business has been lacking. I have gotten at least 50 times the value from mobile application'
            name='Kishan H. Sheth'
            designation='Founder & CEO'
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definitely worth the investment"
            name='Romit Gandhi'
            designation='Founder'
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  )
}
