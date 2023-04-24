import React from 'react'
import img from "../Images/aboutt.jpg"
import { BsFacebook,BsTwitter,BsInstagram,BsGithub } from 'react-icons/bs';
function About() {
  return (
    <section className="about" id="about">
    <div className="about-section">
        <h1 className="about-main">About Me</h1>
        <div className="about-content">
            <div className="about-left">
                <img src={img} alt="about"/>
            </div>
            <div className="about-right">
                <h1 className="about-title">
                    What i do?
                </h1>
                <p className="about-text">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Facere, error? consectetur adipisicing elit. Deleniti itaque
                    dolor quia optio
                    soluta vel.</p>
                <br/>
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem veniam,
                    assumenda dolorem totam
                    quibusdam debitis.</p>
                <div className="social-icons">
                    <a href="#"> <BsFacebook/> </a>
                    <a href="#"> <BsTwitter/></a>
                    <a href="#"> <BsInstagram/></a>
                    <a href="#"> <BsGithub/></a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About