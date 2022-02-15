import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import logo from "../../Assets/logo_white.png"
const locationurl = "https://www.google.com/maps/place/D.Y.+Patil+College+of+Engineering/@18.6449794,73.7562764,16.5z/data=!4m9!1m2!2m1!1sD.+Y.+Patil+College+of+Engineering,+D.+Y.+Patil+Educational+Complex,+Sector+29,+Nigdi+Pradhikaran,+Akurdi,+Pune+411044.!3m5!1s0x3bc2b9f1ca8dab03:0x6237cfbd36f9acf9!8m2!3d18.6448378!4d73.7582119!15sCndELiBZLiBQYXRpbCBDb2xsZWdlIG9mIEVuZ2luZWVyaW5nLCBELiBZLiBQYXRpbCBFZHVjYXRpb25hbCBDb21wbGV4LCBTZWN0b3IgMjksIE5pZ2RpIFByYWRoaWthcmFuLCBBa3VyZGksIFB1bmUgNDExMDQ0LlptImtkeSBwYXRpbCBjb2xsZWdlIG9mIGVuZ2luZWVyaW5nIGR5IHBhdGlsIGVkdWNhdGlvbmFsIGNvbXBsZXggc2VjdG9yIDI5IG5pZ2RpIHByYWRoaWthcmFuIGFrdXJkaSBwdW5lIDQxMTA0NJIBB2NvbGxlZ2WaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUnZNM010VEdGbkVBRQ"

const Footer = () => {
    return (
        <>
        <div className="footer_section">
            <div className="footer">
                <div className='footer_intro'>
                    <img src={logo} className="footer_image" alt="draicimg" />
                    <h1>DRAIC DYPCOE</h1>
                    <p>Let's ready to dive into Robotics</p>
                </div>
                <div className='footer_links_section'>
                <div className='footer_links'>
                    <h1 className='footer_links_name'>Links</h1>
                    <ul>
                        <li className='footer_link'><a>Home</a></li>
                        <li className='footer_link'><a>Projects</a></li>
                        <li className='footer_link'><a>Achievements</a></li>
                        <li className='footer_link'><a>About Us</a></li>
                        <li className='footer_link'><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className='footer_links'>
                    <h1 className='footer_links_name'>Teams</h1>
                    <ul>
                        <li className='footer_link'><a>Programming</a></li>
                        <li className='footer_link'><a>Mechanical</a></li>
                        <li className='footer_link'><a>Electrical</a></li>
                    </ul>
                </div>
                </div>
                <div className='footer_address'>
                    <div className='footer_locate'>
                        <img alt=" " className='footer_location_pin' src="https://img.icons8.com/color-glass/48/4a90e2/google-maps-new.png"/>
                        <h1 className='footer_locateus'>Locate Us</h1>
                    </div>
                    <a href={locationurl} target='_blank' className='footer_location'>D. Y. Patil College of Engineering, D. Y. Patil<br/>Educational Complex, Sector 29, Nigdi<br/>Pradhikaran, Akurdi, Pune 411044.</a>
                </div>
                <div className='footer_social'>
                    <Link className='footer_social_links' to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img className='footer_social_img' src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linkedin"/></Link>
                    <Link className='footer_social_links' to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img className='footer_social_img' src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="Instagram" /></Link>
                    <Link className='footer_social_links' to='//www.linkedin.com/company/d-y-patil-robotics-ai-club' target="_blank" ><img className='footer_social_img' src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="Twitter"/></Link>
                </div>
            </div>
            <div className="footer_copyrights">
                <p>@ 2022 D.Y. Patil Robotics & Ai Club</p>
                <p>All Rights Reserved.</p>
            </div>
        </div>  
        </>
    )
}

export default Footer
