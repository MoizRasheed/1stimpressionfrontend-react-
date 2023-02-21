import React from "react";
import lamps from "../assets/lamps.jpg";
import office from "../assets/office.jpg";
import sofas from "../assets/sofas.jpg";
// import room from "../assets/room.jpg";
// import rugs from "../assets/rugs.jpg";
// import bicycle from "../assets/bicycle.png";
// import motorcycle from "../assets/motorcycle.png";
// import car from "../assets/car.png";
import bed from "../assets/Bed.png";
import lamp from "../assets/Lamp.png";
import rug from "../assets/Rug.png";
import cusion from "../assets/Cusion.png";
import shelf from "../assets/Shelf.png";
import sofa from "../assets/Sofa.png";
import dining from "../assets/Dining.png";
import beanBag from "../assets/BeanBag.png";
import Slider from "react-slick";
// import waisCoat from "../assets/waiscoat.png";
// import Shirt from "../assets/shirt.png";
// import Coat from "../assets/coat.png";
// import Tshirt1 from "../assets/tshirt1.png";
// import Tshirt2 from "../assets/tshirt2.png";
// import Carousal from "react-elastic-carousel";
// import Cap from "../assets/cap.png";
// import Belt from "../assets/belt.png";

function Shopping() {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  
  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
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
    <>
      <div className='mainly'>
        <div className='buxi'>
        {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={sofas} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={lamps} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={office} className="d-block w-100" alt="..." />
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
          {/* <Carousal>
            <img src={lamps} alt="slider 1" />
            <img src={sofas} alt="slider 2" />
            <img src={office} alt="slider 3" />
          </Carousal> */}
          <Slider pauseOnHover={true} {...settings}>
            <img src={lamps} alt="slider 1" />
            <img src={sofas} alt="slider 2" />
            <img src={office} alt="slider 3" />
          </Slider>
        </div>
        {/* <div className='buxi ps-3'>
          <img className='im1' src={room} alt="room" />
          <img className='im2' src={rugs} alt="rug" />
        </div> */}
        {/* <img className='cycle' src={bicycle} alt="cycle" width="33.3%" />
        <img className='motorcycle' src={motorcycle} alt="motorcycle" width="33.3%" />
        <img className='car' src={car} alt="car" width="33.3%" /> */}
        <div className='text-center itema'>
          <span className='d-inline-block'>
            <img src={beanBag} alt="beanbag" />
            <p>Bean Bag</p>
          </span>
          <span className='d-inline-block'>
            <img src={bed} alt="bed" />
            <p>Bed</p>
          </span>
          <span className='d-inline-block'>
            <img src={lamp} alt="lamp" />
            <p>Lamp</p>
          </span>
          <span className='d-inline-block'>
            <img src={sofa} alt="sofa" />
            <p>Sofa</p>
          </span>
        </div>
        <div className='text-center itema'>
          <span className='d-inline-block'>
            <img src={rug} alt="rug" />
            <p>Rug</p>
          </span>
          <span className='d-inline-block'>
            <img src={cusion} alt="cusion" />
            <p>Cusion</p>
          </span>
          <span className='d-inline-block'>
            <img src={shelf} alt="shelf" />
            <p>Shelf</p>
          </span>
          <span className='d-inline-block'>
            <img src={dining} alt="dining" />
            <p>Dining</p>
          </span>
        </div>
        {/* <div>
        <div className="main-card-div">
          <div className="card">
            <img src={waisCoat} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">C</h5>
              <p className="card-text">Some content</p>
            </div>
          </div>
        </div>
        <div className="main-card-div">
          <div className="card">
            <img src={Shirt} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">C</h5>
              <p className="card-text">Some content</p>
            </div>
          </div>
        </div>
        <div className="main-card-div">
          <div className="card">
            <img src={Coat} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">C</h5>
              <p className="card-text">Some content</p>
            </div>
          </div>
        </div>
        <div className="main-card-div">
          <div className="card">
            <img src={Tshirt1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">C</h5>
              <p className="card-text">Some content</p>
            </div>
          </div>
        </div>
        <div className="main-card-div">
          <div className="card">
            <img src={Tshirt2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">C</h5>
              <p className="card-text">Some content</p>
            </div>
          </div>
        </div>
        </div> */}
      </div>
    </>
  );
}

export default Shopping;
