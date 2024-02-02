// css
import './product_flex.css'
// img
import img from '../../assets/images/product_flex_img/img.png'
import img1 from '../../assets/images/product_flex_img/img1.png'
import img2 from '../../assets/images/product_flex_img/img2.png'
import img3 from '../../assets/images/product_flex_img/img3.png'
import img4 from '../../assets/images/product_flex_img/img4.png'
import img5 from '../../assets/images/product_flex_img/img5.png'


const Product_flex = () => {
    return (
        <div className='product_flex'>
            <div className="container">
                <div className="product_flex_main">

                    <div className="product_flex_main_product">
                        <div className="product_flex_main_product_text">
                            <p className='product_flex_main_product_text_p'>Effortless Validation for</p>
                            <p className='product_flex_main_product_text_p1'>Management</p>
                            <p className='product_flex_main_product_text_p2'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
                            <p className='product_flex_main_product_text_p3'>Accessory makers</p>
                            <p className='product_flex_main_product_text_p2'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                            <p className='product_flex_main_product_text_p3'>Alterationists</p>
                            <p className='product_flex_main_product_text_p2'>If you are looking for a new way to promote your business that won’t cost you more money,</p>
                        </div>
                        <div className="product_flex_main_product_img">
                            <img src={img} alt="" />
                        </div>
                    </div>

                    <div className="product_flex_main_product reverse">
                        <div className="product_flex_main_product_img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="product_flex_main_product_text">
                            <p className='product_flex_main_product_text_p'>Easier decision making for</p>
                            <p className='product_flex_main_product_text_p1'>Customer Support</p>
                            <p className='product_flex_main_product_text_p2'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
                            <p className='product_flex_main_product_text_p3'>
                                <img src={img3} alt="" />
                                Never worry about overpaying for your energy again.
                            </p>
                            <p className='product_flex_main_product_text_p3'>
                                <img src={img4} alt="" />
                                While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun
                            </p>
                            <p className='product_flex_main_product_text_p3'>
                                <img src={img5} alt="" />
                                We track the markets daily and know where the savings are.
                            </p>
                        </div>
                    </div>

                    <div className="product_flex_main_product">
                        <div className="product_flex_main_product_text">
                            <p className='product_flex_main_product_text_p'>Optimisation for</p>
                            <p className='product_flex_main_product_text_p1'>Collaborative</p>
                            <p className='product_flex_main_product_text_p2'>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                            <p className='product_flex_main_product_text_p3'>Accessory makers</p>
                            <p className='product_flex_main_product_text_p2'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                            <p className='product_flex_main_product_text_p3'>Alterationists</p>
                            <p className='product_flex_main_product_text_p2'>If you are looking for a new way to promote your business that won’t cost you more money,</p>
                        </div>
                        <div className="product_flex_main_product_img">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_flex
