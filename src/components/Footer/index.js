import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
render() {
  return(
    <div className="Footer">
      <div className="footerText">Site and design © 2018 Grailsoft Technical Solutions</div>
      <a href='https://www.linkedin.com/company/grailsoft-technologies-llc/' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-linkedin-square"></span></a>
      <a href='https://github.com/GrailsoftTechnologies' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-github-square"></span></a>
      <a href='https://twitter.com/GrailsoftTech' target="_blank" rel="noreferrer noopener"><span className="footer-icon icon fa fa-twitter-square"></span></a>
    </div>
    );
  }
}

export default Footer;
