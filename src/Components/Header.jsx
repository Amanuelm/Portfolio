import React from 'react'
import './Header.css'
import logo from "../assets/logo.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Terminal from '@mui/icons-material/Terminal';
function Header() {
  return (
    <div className="header1">
        <Terminal className='icon' sx={{ fontSize: 35 }}/>
        <h2 className='textname'>Coding Portfolio</h2>
       <div className='icons'>
       <a href="https://github.com/Amanuelm" target="_blank" className="iconlink">

       <GitHubIcon className='icon' sx={{ fontSize: 30 }}/>

       </a>

       <a href="https://www.linkedin.com/in/amanuel-mehari-83a580243/" target="_blank" className="iconlink">

        <LinkedInIcon className='icon' sx={{ fontSize: 35 }}/>

       </a>
      
       </div>
  </div>
  )
}

export default Header