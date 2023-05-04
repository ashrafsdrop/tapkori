import React from 'react'

function Footer() {
  return (
    <>
    <section className="contact-details" id="contact-details-section">
        <div className="row text-center text-md-left">
        <div className="col-12 col-md-6 col-lg-3 grid-margin">
            <img
            src="images/TapKori.png"
            style={{ height: 100, width: 100 }}
            alt=""
            className="pb-2"
            />
            <div className="pt-2">
            <p className="text-muted m-0">mikayla_beer@feil.name</p>
            <p className="text-muted m-0">906-179-8309</p>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 grid-margin">
            <h5 className="pb-2">Get in Touch</h5>
            <p className="text-muted">
            Don’t miss any updates of our new templates and extensions.!
            </p>
            <form>
            <input
                type="text"
                className="form-control"
                id="Email"
                placeholder="Email id"
            />
            </form>
            <div className="pt-3">
            <button className="btn btn-dark">Subscribe</button>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 grid-margin">
            <h5 className="pb-2">Our Guidelines</h5>
            <a href="#">
            <p className="custom m-0 pb-2">Terms</p>
            </a>
            <a href="#">
            <p className="custom m-0 pt-1 pb-2">Privacy policy</p>
            </a>
            <a href="#">
            <p className="custom m-0 pt-1 pb-2">Cookie Policy</p>
            </a>
            <a href="#">
            <p className="custom m-0 pt-1">Discover</p>
            </a>
        </div>
        <div className="col-12 col-md-6 col-lg-3 grid-margin">
            <h5 className="pb-2">Our address</h5>
            <p className="text-muted">
            518 Schmeler Neck
            <br />
            Bartlett. Illinois
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
            <a href="#">
                <span className="mdi mdi-facebook" />
            </a>
            <a href="#">
                <span className="mdi mdi-twitter" />
            </a>
            <a href="#">
                <span className="mdi mdi-instagram" />
            </a>
            <a href="#">
                <span className="mdi mdi-linkedin" />
            </a>
            </div>
        </div>
        </div>
    </section>
    <footer className="border-top">
        <p className="text-center text-muted pt-4">
        Copyright © 2023
        <a
            href="https://www.bootstrapdash.com/"
            style={{ color: "#ffff79" }}
            className="px-1"
        >
            TapKori.
        </a>
        All rights reserved.
        </p>
    </footer>
    </>
  )
}

export default Footer