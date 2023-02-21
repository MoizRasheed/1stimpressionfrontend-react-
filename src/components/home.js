import React from "react";
import {
  Link
} from "react-router-dom";
import Pic1 from "../assets/interior1.jpg";
import Pic2 from "../assets/interior2.jpg";
import Pic3 from "../assets/interior3.jpg";
import Pic4 from "../assets/interior4.jpg";
import Pic5 from "../assets/interior5.jpg";
import Slider from "react-slick";

function Home() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  }
  return (
    <div className="homepage">
  {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
      {/* <div id="carouselExampleCaptions" className="homeo carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Pic1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <div>
          <button type="button" className="link-btn me-3"><Link to="/design-consultation">Design Consultation</Link></button>
          <button type="button" className="link-btn"><Link to="/shopping">Shopping</Link></button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Pic2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <div>
          <button type="button" className="link-btn me-3"><Link to="/design-consultation">Design Consultation</Link></button>
          <button type="button" className="link-btn"><Link to="/shopping">Shopping</Link></button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Pic3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <div>
          <button type="button" className="link-btn me-3"><Link to="/design-consultation">Design Consultation</Link></button>
          <button type="button" className="link-btn"><Link to="/shopping">Shopping</Link></button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Pic4} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <div>
          <button type="button" className="link-btn me-3"><Link to="/design-consultation">Design Consultation</Link></button>
          <button type="button" className="link-btn"><Link to="/shopping">Shopping</Link></button>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Pic5} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <div>
          <button type="button" className="link-btn me-3"><Link to="/design-consultation">Design Consultation</Link></button>
          <button type="button" className="link-btn"><Link to="/shopping">Shopping</Link></button>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
<div className="position-relative">
<div className="home-slide-btn">
          <button type="button" className="link-btn me-3"><Link to="/design-consultation">Design Consultation</Link></button>
          <button type="button" className="link-btn"><Link to="/shopping">Shopping</Link></button>
        </div>
<Slider pauseOnHover={true} {...settings}>
<div className="home-slide">
<img src={Pic1} alt="slider 1" />
        </div>
        <div className="home-slide">
<img src={Pic2} alt="slider 2" />
        </div>
        <div className="home-slide">
<img src={Pic3} alt="slider 3" />
        </div>
        <div className="home-slide">
<img src={Pic4} alt="slider 4" />
        </div>
        <div className="home-slide">
<img src={Pic5} alt="slider 5" />
        </div>
</Slider>
</div>
    </div>
  );
}

export default Home;
