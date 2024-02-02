// import Css
import './easy.css'

// import images
import easy1 from '../../assets/images/easy-img/easy-1.png'
import easy2 from '../../assets/images/easy-img/easy-2.png'
import easy3 from '../../assets/images/easy-img/easy-3.png'
import easy4 from '../../assets/images/easy-img/easy-4.png'


const Easy = () => {
  return (
    <>
      <section className="easy">
        <div className="container easy__box">
            <div className="easy__title">
                <div className="easy__main__title">
                    <h1>Quick & Easy Process</h1>
                </div>
                <div className="easy__main__subtitle">
                    <p className='sub__title'>
                        Do you require some help for your project: Conception workshop,
                        prototyping, marketing strategy, landing page, Ux/UI?
                    </p>
                </div>
            </div>
            <div className="easy__interest">
              <div className="left__interst">
                <div className="line1">
                  <img src={easy1} alt="" className='interest__img' />
                  <div className="interest__desription">
                    <p>I can take care of your pitch</p>
                  </div>
                </div>
                <div className="line1 revers">
                  <div className="interest__desription">
                    <p>I can design you website</p>
                  </div>
                  <img src={easy3} alt="" className='interest__img' />
                </div>
              </div>
              <div className="left__interst">
                <div className="line1 revers">
                  <div className="interest__desription">
                    <p>I can take care of your pitch</p>
                  </div>
                  <img src={easy2} alt="" className='interest__img' />
                </div>
                <div className="line1">
                  <img src={easy4} alt="" className='interest__img' />
                  <div className="interest__desription">
                    <p>I can design you website</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="easy__btn">
              <a href="+9989916980700">Contact our expert</a>
            </div>
        </div>
      </section>
    </>
  )
}

export default Easy;
