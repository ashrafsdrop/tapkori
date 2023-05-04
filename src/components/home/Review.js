import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import face2 from './assets/images/face2.jpg'
// import face3 from './assets/images/face3.jpg'
// import face20 from './assets/images/face20.jpg'
// import face15 from './assets/images/face15.jpg'
// import face16 from './assets/images/face16.jpg'
// import face1 from './assets/images/face1.jpg'



function Review() {
  return (
    <section className="customer-feedback" id="feedback-section">
    <div className="row">
      <div className="col-12 text-center pb-5">
        <h2>What our customers have to say</h2>
        <h6 className="section-subtitle text-muted m-0">
          Lorem ipsum dolor sit amet, tincidunt vestibulum.
        </h6>
      </div>
      <OwlCarousel  className='owl-theme grid-margin' responsive={
      {
          0: {
              items: 1,
          },
          600: {
              items: 1,
          },
          1000: {
              items: 3,
          },
      }
      }>
        <div className="card customer-cards">
          <div className="card-body">
            <div className="text-center">
              <img
                src={face2}
                alt=""
                className="img-customer"
              />
              <p className="m-0 py-3 text-muted">
                Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
                consectetuer turpis, suspendisse.
              </p>
              <div className="content-divider m-auto" />
              <h6 className="card-title pt-3">Tony Martinez</h6>
              <h6 className="customer-designation text-muted m-0">
                Marketing Manager
              </h6>
            </div>
          </div>
        </div>
        <div className="card customer-cards">
          <div className="card-body">
            <div className="text-center">
              <img
                src={face2}
                alt=""
                className="img-customer"
              />
              <p className="m-0 py-3 text-muted">
                Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
                consectetuer turpis, suspendisse.
              </p>
              <div className="content-divider m-auto" />
              <h6 className="card-title pt-3">Tony Martinez</h6>
              <h6 className="customer-designation text-muted m-0">
                Marketing Manager
              </h6>
            </div>
          </div>
        </div>
        <div className="card customer-cards">
          <div className="card-body">
            <div className="text-center">
              <img
                src={face2}
                alt=""
                className="img-customer"
              />
              <p className="m-0 py-3 text-muted">
                Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
                consectetuer turpis, suspendisse.
              </p>
              <div className="content-divider m-auto" />
              <h6 className="card-title pt-3">Tony Martinez</h6>
              <h6 className="customer-designation text-muted m-0">
                Marketing Manager
              </h6>
            </div>
          </div>
        </div>
        
        
      </OwlCarousel>
    </div>
  </section>
  

  )
}

export default Review