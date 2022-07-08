import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "normalize.css"
import { motion } from "framer-motion"

import '../assets/css/main.css'
const Layout = ({children}) => {
  return (
  
    <div>
        <Navbar />
        
        <motion.main
          initial={{
            opacity: 3,
            x: -200
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 3,
            x: 200
          }}
          transition={{
            type: "spring",
            
            
            mass: 0.5,
            stiffness: 75,
            duration: 0.01
          }}
        >
          {children}
          <Footer/>
        </motion.main>
        
    </div>
  )
}

export default Layout