
// import Css
import "./carusel.css";

// import images
import carusel1 from '../../assets/images/carusel-img/carusel1.png'
import carusel2 from '../../assets/images/carusel-img/carusel2.png'
import carusel3 from '../../assets/images/carusel-img/carusel3.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Carusel = () => {
  return (
    <>
      <div className="carusel">
        <div className="container carusel-box">
          <div className="carusel__title">
            <div className="main_title">
              <h1>Contents Strategies</h1>
            </div>
            <div className="carusel__subtitle">
              <p>
                We focus on ergonomics and meeting you where you work. It's only
                a keystroke away.
              </p>
            </div>
          </div>
          <div className="main__carusel">
          <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[ Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper__first">
                        <div className="swipper__main">
                            <div className="swipper__1">
                                <div className="swipper__main__img">
                                    <img src={carusel1} alt="" />
                                </div>
                                <div className="swipper__bottom">
                                    <div className="swipper__bottom__subtitle">
                                        <p>By <strong>Wahid Ari</strong>  |  03 March 2019</p>
                                    </div>
                                    <div className="swipper__bottom__title">
                                        <h3>Increasing Prosperity With Positive Thinking</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper__first">
                        <div className="swipper__main">
                            <div className="swipper__1">
                                <div className="swipper__main__img">
                                    <img src={carusel2} alt="" />
                                </div>
                                <div className="swipper__bottom">
                                    <div className="swipper__bottom__subtitle">
                                        <p>By <strong>Wahid Ari</strong>  |  03 March 2019</p>
                                    </div>
                                    <div className="swipper__bottom__title">
                                        <h3>Motivation Is The First Step To Success</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper__first">
                        <div className="swipper__main">
                            <div className="swipper__1">
                                <div className="swipper__main__img">
                                    <img src={carusel3} alt="" />
                                </div>
                                <div className="swipper__bottom">
                                    <div className="swipper__bottom__subtitle">
                                        <p>By <strong>Wahid Ari</strong>  |  03 March 2019</p>
                                    </div>
                                    <div className="swipper__bottom__title">
                                        <h3>Success Steps For Your Personal Or Business</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper__first">
                        <div className="swipper__main">
                            <div className="swipper__1">
                                <div className="swipper__main__img">
                                    <img src={carusel1} alt="" />
                                </div>
                                <div className="swipper__bottom">
                                    <div className="swipper__bottom__subtitle">
                                        <p>By <strong>Wahid Ari</strong>  |  03 March 2019</p>
                                    </div>
                                    <div className="swipper__bottom__title">
                                        <h3>Increasing Prosperity With Positive Thinking</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper__first">
                        <div className="swipper__main">
                            <div className="swipper__1">
                                <div className="swipper__main__img">
                                    <img src={carusel2} alt="" />
                                </div>
                                <div className="swipper__bottom">
                                    <div className="swipper__bottom__subtitle">
                                        <p>By <strong>Wahid Ari</strong>  |  03 March 2019</p>
                                    </div>
                                    <div className="swipper__bottom__title">
                                        <h3>Motivation Is The First Step To Success</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carusel;
