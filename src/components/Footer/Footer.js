import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'





const Footer = ()=> {
return (

    <div className="footer">
        <p>&copy; Copyright: Jonathan Riley <a href="https://www.nashvillesoftwareschool.com">Nashville Software School</a></p>
        <SocialIcon className="icon" url="https://twitter.com/JonnnyBravo" />
        <SocialIcon className="icon" url="https://www.facebook.com/jonathan.riley.58/" />
        <SocialIcon className="icon" url="https://www.instagram.com/jonathan_riley56/?hl=en" />
        <SocialIcon url="https://github.com/Jonrrile" />
        <SocialIcon url="https://www.linkedin.com/in/jonathan-r-riley/" />
        <SocialIcon url="https://www.spotify.com/us/account/overview/" />
    </div>

)}

export default Footer;