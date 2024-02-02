// import Css
import './join.css'

// import Images
import join from '../../assets/images/join-img/join.png'

const Join = () => {
  return (
        <>
            <section className="join">
                <div className="container join_box">
                    <div className="left__join">
                        <h1>Join 100 Compannies who boost their business with Product</h1>
                        <div className="btn__join">
                            <a href="+998916980700">Get This</a>
                        </div>
                    </div>
                    <div className="right__join">
                        <img src={join} alt="" className='join__img'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Join