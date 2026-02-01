import React from "react";
import { BiHappyBeaming } from "react-icons/bi";
import { FaRecycle } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const Pride = () => {
  return (
    <div className="main_pride">
      <div className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="first_pride">
                <h1 className="pride_icon">
                  <BiHappyBeaming />
                </h1>
                <h3>2M+ happy customer</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="first_pride">
                <h1>
                  <IoEarth />
                </h1>
                <h3>proudly made in india</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="first_pride">
                <h1>
                  <FaRecycle />
                </h1>
                <h3>3.9m+ plastic bottels recycled</h3>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="first_pride">
                <h1>
                  <TbTruckDelivery />
                </h1>
                <h3>All india delivery</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pride_lines">
        <h2> Responsibility Goes Beyond Just Words.</h2>
        <p>
          We are mindful of what we create and how it shapes the world around
          us. With a focus on circularity and <br />transparency,<span>
             "we’re crafting a
          future that’s better than yesterday."</span>
        </p>
      </div>
    </div>
  );
};

export default Pride;
