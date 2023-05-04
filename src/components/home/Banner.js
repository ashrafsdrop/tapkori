import React from 'react'
// import $ from 'jquery';
import bannerimage from './assets/images/gg1.png'

function Banner() {
    // const [active, setIsActive] = useState(false);
    // window.onscroll = function() {scrollFunction()};
    // var element = document.getElementById("body");
    // function scrollFunction() {
    // if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    //     setIsActive(true);
    //     // $(".navbar").addClass("fixed-top");
    //     // element.classList.add("header-small");
    //     // $("body").addClass("body-top-padding");

    // } else {
    //     setIsActive(false);
    //     // $(".navbar").removeClass("fixed-top");
    //     // element.classList.remove("header-small");
    //     // $("body").removeClass("body-top-padding");
    // }
    // }
  return (
    <div className="banner">
        <div className="container">
            <h1 className="font-weight-semibold">
            A contactless technology <br />
            reason to a new era.
            </h1>
            <h6 className="font-weight-normal text-muted pb-3">
            Simple is a simple template with a creative design that solves all your
            marketing and SEO queries.
            </h6>
            <div className="images-front">
            <button className="btn btn-opacity-light mr-1">Get started</button>
            <button className="btn btn-opacity-success ml-1">Learn more</button>
            </div>
            <img src={bannerimage} alt="" className="img-fluid" />
        </div>
    </div>

  )
}

export default Banner