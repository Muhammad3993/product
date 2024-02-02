import './clent.css'

// import Images
import clent1 from '../../assets/images/clent-img/clent1.png'
import clent2 from '../../assets/images/clent-img/clent2.png'
import clent3 from '../../assets/images/clent-img/clent3.png'
import boyalgan from '../../assets/images/clent-img/boyalgan.png'
import boyalmagan from '../../assets/images/clent-img/boyalmagan.png'

const Clent = () => {

    const base = [
        {
            id: 1,
            decr: 'Product helps you see how many more days you need to work to reach your financial goal.',
            img: clent1,
            name: 'Wahid Ari',
            fow: 'Designer'
        },
        {
            id: 2,
            decr: 'Product helps you see how many more days you need to work to reach your financial goal.',
            img: clent2,
            name: 'Wahid Ari',
            fow: 'Designer'
        },
        {
            id: 3,
            decr: 'Product helps you see how many more days you need to work to reach your financial goal.',
            img: clent3,
            name: 'Wahid Ari',
            fow: 'Designer'
        }
    ]


  return (
    <>
      <section className="clent">
        <div className="container clent jsx">
          <div className="clent__title">
            <div className="main__title__clent">
              <h1>What Clients Say</h1>
            </div>
            <div className="main__subtitle__clent">
              <p>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
          <div className="base__clent">
            {
                base.map(item=>(
                    <div className="main__base" key={item.id}>
                        <div className="rate">
                            <img src={boyalgan} alt="" />
                            <img src={boyalgan} alt="" />
                            <img src={boyalgan} alt="" />
                            <img src={boyalgan} alt="" />
                            <img src={boyalmagan} alt="" />
                        </div>
                        <div className="desc">
                            <p>{item.decr}</p>
                        </div>
                        <div className="rasm__name">
                            <div className="left__rasm">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="right__name">
                                <p className='name__clenr'>{item.name}</p>
                                <p className='fow__clent'>{item.fow}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Clent;
