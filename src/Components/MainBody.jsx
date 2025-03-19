import React from 'react'
import './MainBody.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function MainBody() {
  return (
   
    <div className='firstmain'> <div class="noise-overlay"></div>
      <div className='maintext'>
        <h1 className='name'>Amanuel Mehari</h1>
        <h6 className='othertext'>Hello i am a Software Engineer who graduated from<br/> <a href="https://hilcoe.net/" target="_blank" className="linkh">HiLCoE School of Computer Science and Technology.</a><br></br>
        I am Passionate about web and mobile development. </h6> 
      <div className='iconholderholder'>
      <a href="https://github.com/Amanuelm" target="_blank" className="iconholder">
      <LinkedInIcon className='icon' sx={{ fontSize: 35 }}/>
      </a>
      
      <a href="https://github.com/Amanuelm" target="_blank" className="iconholder">
      <GitHubIcon className='icon' sx={{ fontSize: 30 }}/>
      </a>
      </div>
      </div>
    </div>
    
  )
}

export default MainBody