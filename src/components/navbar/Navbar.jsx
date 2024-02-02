// react hook
import { useContext } from 'react';
// react-router-dom
import { Link } from 'react-router-dom';
// img
import img from '../../assets/images/navbar_img/img.png'
// icons
import { FiMenu } from 'react-icons/fi'
import { VscColorMode } from 'react-icons/vsc'
import { MdClose } from 'react-icons/md'
// css
import './navbar.css'
// Context
import Context from '../../context/Context';

const Navbar = () => {
    const { menu, setMenu, handleDark } = useContext(Context);
    const handleMenu = () => setMenu(!menu);

    return (
        <div className='navbar'>
            <div className="container">
                <div className="navbar_main">
                    <Link to='/' className="navbar_main_logo">
                        <img src={img} alt="" />
                        <p className='navbar_main_logo_p'>Product</p>
                    </Link>
                    <div className={menu ? 'navbar_main_div navbar_main_div_active' : 'navbar_main_div'}>
                        <div className="navbar_main_links">
                            <Link to='/' className='navbar_main_link navbar_main_link_active'>Product</Link>
                            <Link to='/' className='navbar_main_link'>Customers</Link>
                            <Link to='/' className='navbar_main_link'>Pricing</Link>
                            <Link to='/' className='navbar_main_link'>Resources</Link>
                        </div>
                        <div className="navbar_main_btns">
                            <Link to='/' className='navbar_main_btn'>Sign In</Link>
                            <Link to='/' className='navbar_main_btn1'>Sign Up</Link>
                            <button className='navbar_main_btn2 navbar_main_btn2_flex' onClick={handleDark}><VscColorMode /></button>
                        </div>
                    </div>
                    <button className='navbar_main_btn2 navbar_main_btn2_none' onClick={handleDark}><VscColorMode /></button>
                    <button className='navbar_main_btn3' onClick={handleMenu}>
                        {
                            !menu ? <FiMenu /> : <MdClose />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
