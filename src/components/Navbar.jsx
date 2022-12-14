import React, { useState } from 'react'
import Button from './Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import '../styles/components/Navbar.scss'
import BrandName from './BrandName'
import { motion } from 'framer-motion'
import { navbarAnimation } from '../utils/Animations'

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false)
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar)
  }

  return (
    <motion.div
      className={`navbar ${toggleNavbar === true ? 'active' : ''}`}
      variants={navbarAnimation}
      transition={{ delay: 0.5 }}
    >
      <div className='col'>
        <BrandName />
        <div className='collapsible-button'>
          {!toggleNavbar ? (
            <GiHamburgerMenu onClick={navbarToggler} />
          ) : (
            <MdClose onClick={navbarToggler} />
          )}
        </div>
      </div>
      <nav>
        <div className='links'>
          <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#testimonial'>Testimonial</a>
            </li>
            <li>
              <a href='#blog'>Blog</a>
            </li>
            <li>
              <Button content='Contact' />
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  )
}
