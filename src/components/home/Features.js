import React from 'react'
import startup from './assets/images/startup.png'
import nfc from './assets/images/nfc.png'
import stopwatch from './assets/images/stopwatch.png'

function Features() {
  return (
    <section className="features-overview" id="features-section">
      <div className="content-header">
        <h2>How does it works</h2>
        <h6 className="section-subtitle text-muted">
          One theme that serves as an easy-to-use operational toolkit
          <br />
          that meets customer's needs.
        </h6>
      </div>
      <div className="d-md-flex justify-content-between">
        <div className="grid-margin d-flex justify-content-start">
          <div className="features-width">
            <img src={startup} alt="" className="img-icons" />
            <h5 className="py-3">
              Speed
              <br />
              Optimisation
            </h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
              consectetuer turpis, suspendisse.
            </p>
            {/* <a href="#">
              <p className="readmore-link">Readmore</p>
            </a> */}
          </div>
        </div>
        <div className="grid-margin d-flex justify-content-center">
          <div className="features-width">
            <img src={nfc} alt="" className="img-icons" />
            <h5 className="py-3">
              SEO and
              <br />
              Backlinks
            </h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
              consectetuer turpis, suspendisse.
            </p>
            {/* <a href="#">
              <p className="readmore-link">Readmore</p>
            </a> */}
          </div>
        </div>
        <div className="grid-margin d-flex justify-content-end">
          <div className="features-width">
            <img src={stopwatch} alt="" className="img-icons" />
            <h5 className="py-3">
              Content
              <br />
              Marketing
            </h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
              consectetuer turpis, suspendisse.
            </p>
            {/* <a href="#">
              <p className="readmore-link">Readmore</p>
            </a> */}
          </div>
        </div>
      </div>
    </section>


  )
}

export default Features