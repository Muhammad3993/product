// css
import './built.css'
// img 
import img from '../../assets/images/built_img/img.png'
import img1 from '../../assets/images/built_img/img1.png'
import img2 from '../../assets/images/built_img/img2.png'
import img3 from '../../assets/images/built_img/img3.png'
import { Link } from 'react-router-dom'
// data
const data = [
    {
        id: 1,
        img: img,
        name: 'First click tests',
        desc: 'While most people enjoy casino gambling.'
    },
    {
        id: 2,
        img: img1,
        name: 'Design surveys',
        desc: 'Sports betting, lottery and bingo playing for the fun'
    },
    {
        id: 3,
        img: img2,
        name: 'Preference tests',
        desc: 'The Myspace page defines the individual.'
    },
    {
        id: 4,
        img: img3,
        name: 'Five second tests',
        desc: 'Personal choices and the overall personality of the person.'
    },
]

const Built = () => {
    return (
        <div className='built'>
            <div className="container">
                <div className="built_main">
                    <p className='built_main_p'>Product  was Built Specifically <br /> for You</p>
                    <div className='built_main_divs'>
                        {
                            data.map(item => (
                                <div className="built_main_div" key={item.id}>
                                    <div className="built_main_divs_img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <p className='built_main_div_p'>{item.name}</p>
                                    <p>{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                    <Link to='/' className="hero_main_text_btn built_main_text_btn">
                        SIGN UP NOW
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Built
