// import Css
import './price.css'



const Price = () => {

    const data = [
        {
            id: 1,
            title: 'Free',
            subtitle: 'Brief price description',
            price: 0,
            date: 'Per / month',
            only1: 'Only 2 Operators',
            only2: 'Notifications',
            only3: 'Landing Pages',
            btn: 'Order Now'
        },
        {
            id: 2,
            title: 'Standard',
            subtitle: 'Brief price description',
            price: 5,
            date: 'Per / month',
            only1: '5+ Operators',
            only2: 'Notifications',
            only3: 'Landing Pages',
            btn: 'Order Now'
        },
        {
            id: 3,
            title: 'Premium',
            subtitle: 'Brief price description',
            price: 10,
            date: 'Per / month',
            only1: '10+ Operators',
            only2: 'Notifications',
            only3: 'Landing Pages',
            btn: 'Order Now'
        }
    ]


  return (
    <>
      <section className="price">
        <div className="container price-box">
            <div className="price__title">
                <div className="title">
                    <h1>Price Table</h1>
                </div>
                <div className="sub_title">
                    <p>We offer competitive price</p>
                </div>
            </div>
            <div className="price__data">
                {
                    data.map(item=>(
                        <div className="price__column1" key={item.id}>
                            <div className="title">
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                            <div className="pricec__data">
                                <div className="left__price">
                                    <h1>{item.price}</h1>
                                </div>
                                <div className="right__price">
                                    <h1>$</h1>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            <div className="onlylar">
                                <p>{item.only1}</p>
                                <p>{item.only2}</p>
                                <p>{item.only3}</p>
                            </div>
                            <div className="btn__price">
                                <a href="+998916980700" className='btn__price__btn'>{item.btn}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default Price
