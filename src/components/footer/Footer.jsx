//import images
import img from '../../assets/images/footer-img/footer-logo.png'


//import icons
import {FiInstagram , FiFacebook , FiTwitter} from 'react-icons/fi'


//import style
import './footer.css'

const Footer = () => {
  return (
    <div className='container'>
        <div className="footer">
            <div className="footer-style">
                <div className="footer-texts">
                    <div className="footer-text1">
                        <div className="footer-header">
                            <img src={img} alt="" />
                        </div>
                        <div className="footer-media">
                           <div className='footer-media-icons'><a href='https://www.instagram.co'><FiInstagram/></a></div> 
                           <div className='footer-media-icons'><a href='https://www.facebook.com/'><FiFacebook/></a></div> 
                           <div className='footer-media-icons'><a href='https://twitter.com/'><FiTwitter/></a></div> 
                        </div>
                    </div>
                    <div className="footer-text2">
                        <div className="footer-header">
                            <h1>Resource</h1>
                        </div>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Contact</p>
                        <p>FAQ</p>
                    </div>
                    <div className="footer-text3">
                        <div className="footer-header">
                            <h1>Legal Stuff</h1>
                        </div>
                        <p>Disclaimer</p>
                        <p>Financing</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                    <div className="footer-text4">
                        <div className="footer-header">
                            <h1>knowing you're always on <br /> the best energy deal.</h1>
                        </div> 
                        <div className="footer-signup-section">
                            <input type="text" className='inputstyle' />
                            <button className='btn-style'>Sign up Now</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-copyright-section">
                <p>Made With Dark Coder Team  All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;