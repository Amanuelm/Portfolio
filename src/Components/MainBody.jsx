import React from 'react'
import './MainBody.css'

function MainBody() {
  return (
    <section className='hero-section'>
      <div className='hero-content'>
        <p className="hero-subtitle">Hi, my name is</p>
        <h1 className='hero-title'>Amanuel Mehari.</h1>
        <h2 className='hero-tagline'>I build things for the web and mobile.</h2>
        <p className='hero-description'>
          I am a Software Engineer and recent graduate from <a href="https://hilcoe.net/" target="_blank" rel="noopener noreferrer" className="hero-link">HiLCoE School of Computer Science and Technology</a>.<br/>
          I am passionate about creating modern, responsive web and mobile applications with excellent user experiences.
        </p> 
        <div className='hero-cta-container'>
          <a href="#projects" className="btn-primary">View My Work</a>
        </div>
      </div>
    </section>
  )
}

export default MainBody