import React, { useState, useEffect } from 'react'
import './Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Terminal from '@mui/icons-material/Terminal';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header1 ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <Terminal className='header-icon logo-icon' sx={{ fontSize: 32 }}/>
          <h2 className='textname'>Amanuel<span className="accent-text">.dev</span></h2>
        </div>
        <div className='icons'>
          <a href="https://github.com/Amanuelm" target="_blank" rel="noopener noreferrer" className="iconlink" aria-label="GitHub">
            <GitHubIcon className='header-icon' sx={{ fontSize: 28 }}/>
          </a>
          <a href="https://www.linkedin.com/in/amanuel-mehari-83a580243/" target="_blank" rel="noopener noreferrer" className="iconlink" aria-label="LinkedIn">
            <LinkedInIcon className='header-icon' sx={{ fontSize: 30 }}/>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header