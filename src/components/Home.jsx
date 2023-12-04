// React Imports
import React from 'react'
// Image Imports
//import logo from "../img/cory-logo-new.svg"
import logo from "../img/webdev-logo.png"

export default function Home() {
    return (
        <div className='home'>
            <img
                className='logo'
                src={logo} alt="logo" />
            <h1>Innovative Web App Solutions for Production Facilities</h1>
        </div>
    )
}
