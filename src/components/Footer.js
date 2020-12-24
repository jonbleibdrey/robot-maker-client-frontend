import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Footer = () => {
    return (
      
        <div className='footer'>
               <h3 className='foottext'>BuildARobot.com</h3>
                <footer className='footerinfo'>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                </footer>
        </div>
        
    )
}

export default Footer
