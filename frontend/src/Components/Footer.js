import React from 'react';

const Footer = () => {
    return (
      <footer id='jumboFooter' className='jumbotron align-items-end'>
      <div className='row align-items-center'>
      <div className='col-4'>
          <p className='footerText'>Phone: 604.709.5661</p>
          <p className='footerText'>Toll-Free: 1.877.262.0022</p>
          <p className='footerText'>Email: info@wstcoast.org</p>
          <p className='footerText'>2772 East Broadway, Vancouver BC V5M 1Y8</p> 
        </div>
        <div className='col-4'>
          <h5>Child Care Search Portal</h5>
        </div>
        <div className='col-4'>
          <img id='picture' alt='logo' src='/images/covlogo-share.png'/>
        </div>
      </div>
      </footer>
    )
  }

export default Footer;