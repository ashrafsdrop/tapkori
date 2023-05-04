import React from 'react'
import image1 from './assets/images/8260896.jpg'
import Wavy_Tech from './assets/images/Wavy_Tech-09_Single-12.jpg'

function Blogs() {
  return (
    <section
      className="digital-marketing-service"
      id="digital-marketing-section"
    >
      <div className="row align-items-center">
        <div
          className="col-12 col-lg-7 grid-margin grid-margin-lg-0"
          data-aos="fade-right"
        >
          <h3 className="m-0">
            We Offer a Full Range
            <br />
            of Digital Marketing Services!
          </h3>
          <div className="col-lg-7 col-xl-6 p-0">
            <p className="py-4 m-0 text-muted">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
              consectetuer turpis, suspendisse.
            </p>
            <p className="font-weight-medium text-muted">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
              consectetuer
            </p>
          </div>
        </div>
        <div
          className="col-12 col-lg-5 p-0 img-digital grid-margin grid-margin-lg-0"
          data-aos="fade-left"
        >
          <img src={image1} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="row align-items-center">
        <div
          className="col-12 col-lg-7 text-center flex-item grid-margin"
          data-aos="fade-right"
        >
          <img
            src={Wavy_Tech}
            alt=""
            className="img-fluid"
          />
        </div>
        <div
          className="col-12 col-lg-5 flex-item grid-margin"
          data-aos="fade-left"
        >
          <h3 className="m-0">
            Leading Digital Agency
            <br />
            for Business Solution.
          </h3>
          <div className="col-lg-9 col-xl-8 p-0">
            <p className="py-4 m-0 text-muted">
              Power-packed with impressive features and well-optimized, this
              template is designed to provide the best performance in all
              circumstances.
            </p>
            <p className="pb-2 font-weight-medium text-muted">
              Its smart features make it a powerful stand-alone website building
              tool.
            </p>
          </div>
          <button className="btn btn-info">Readmore</button>
        </div>
      </div>
    </section>

  )
}

export default Blogs