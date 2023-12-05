// React Imports
import React from 'react'
// Image Imports
import coryLogo from "../img/cory-logo-new.png"
import webdevLogo from "../img/webdev-logo.png"
// Animation Imports
import { motion as m } from 'framer-motion';

export default function Home() {
    return (
        <m.div className='home'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
            <img
                className='logo cory-logo'
                src={coryLogo} alt="Cory logo" />
            <img
                className='logo webdev-logo'
                src={webdevLogo} alt="Webdev logo" />
            <h1>Web App Solutions</h1>
        </m.div>
    )
}
