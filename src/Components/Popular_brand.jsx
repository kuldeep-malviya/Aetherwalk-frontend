import React from "react";
import brand1 from "../assets/imgs/Champion_shooe.webp"
import brand2 from "../assets/imgs/puma_shoes.webp"
import brand3 from "../assets/imgs/fila_shoee.webp"
import brandLogo1 from "../assets/imgs/ch.webp"
import brandLogo2 from "../assets/imgs/puma_logo.webp"
import brandLogo3 from "../assets/imgs/fila_logo.webp"

const PopularBrand = () => {
  return (
    <div className="popular">
      <div className="container">
        <div className="row">
          <h1 className="Popular_heading">most popular brands</h1>
          <p>
            "Explore our collection of popular brands known for quality, style,
            and reliability. Trusted by millions, these brands bring you the
            best in innovation and design. Find the perfect choice to match your
            taste and lifestyle!"
          </p>
          <div className="col-md-4">
            <div className="brands">
              <img
                src={brand1}
                alt="not found"
                className="img-fluid"
              />
              <div className="shoe_logo">
                <img src={brandLogo1} alt="not found" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="brands">
              <img
                src={brand2}
                alt="not found"
                className="img-fluid"
              />
              <div className="shoe_logo">
                <img src={brandLogo2} alt="not found" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="brands">
              <img
                src={brand3}
                alt="not found"
                className="img-fluid"
              />
              <div className="shoe_logo">
                <img src={brandLogo3} alt="not found" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBrand;
