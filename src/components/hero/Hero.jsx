// css
import './hero.css'
// icon
import {RiArrowRightSFill} from 'react-icons/ri'
// img
import img from '../../assets/images/hero_img/img.png'
// react-router-dom
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="hero_main">
                    <div className="hero_main_text">
                        <p className='hero_main_text_p'>Work at the speed of thought</p>
                        <p className='hero_main_text_p1'>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                        <div className="hero_main_text_btns">
                            <Link to='/' className="hero_main_text_btn">
                                Get started
                            </Link>
                            <Link to='/' className="hero_main_text_btn1">
                                <RiArrowRightSFill className='hero_main_text_btn1_i'/>
                                Watch the Video
                            </Link>
                        </div>
                    </div>
                    <div className="hero_main_img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
