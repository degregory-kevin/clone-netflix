import React from 'react';
import './footer.scss'
import Facebook from "@material-ui/icons/Facebook"
import Instagram from "@material-ui/icons/Instagram"
import Twitter from "@material-ui/icons/Twitter"
import YouTube from "@material-ui/icons/YouTube"


const Footer = () => {
    return (
      <footer className="footer">
          <div className="container">
              <div className="footer__socials">
              <a href='/' className="footer__social" >
              <Facebook/>
              </a>
              <a href='/' className="footer__social" >
              <Instagram/>
              </a>
              <a href='/' className="footer__social" >
              <Twitter/>
              </a>
              <a href='/' className="footer__social" >
              <YouTube/>
              </a> 
              </div>
              <ul className="footer__links">
                  <li className="footer__link">
                      <a href='/'  >
                    Lien footer
                </a>
                  </li>
                  <li className="footer__link">
                      <a href='/'  >
                    Lien footer
                </a>
                  </li>
                  <li className="footer__link">
                      <a href='/'  >
                    Lien footer
                </a>
                  </li>
                  <li className="footer__link">
                      <a href='/'  >
                    Lien footer
                </a>
                  </li>
                  <li className="footer__link">
                      <a href='/'  >
                    Lien footer
                </a>
                  </li>
                  <li className="footer__link">
                      <a href='/'  >
                    Lien footer
                </a>
                  </li>
                  <li className="footer__link">
                      <a href='/'  >
                    Lien footer
                </a>
                  </li>
                  <li className="footer__link">
                      <a href='/'  >
                    Lien footer
                </a>
                  </li>
              </ul>
              <div className="footer__copy">
                  Netflix Clone - tous droits résévés
              </div>
          </div>
      </footer>
    );
};

export default Footer;