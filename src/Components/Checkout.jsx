import React, { useRef, useState } from "react";

const Checkout = ({ setdone }) => {
  const name = useRef();
  const phone = useRef();
  const pincode = useRef();
  const stateRef = useRef();
  const city = useRef();
  const house = useRef();
  const road = useRef();

  const [errors, setErrors] = useState({});

  const OncheckoutHandler = (e) => {
    e.preventDefault();

    const nameVal = name.current.value.trim();
    const phoneVal = phone.current.value.trim();
    const pincodeVal = pincode.current.value.trim();
    const stateVal = stateRef.current.value.trim();
    const cityVal = city.current.value.trim();
    const houseVal = house.current.value.trim();
    const roadVal = road.current.value.trim();

    const newErrors = {};

    if (!nameVal) newErrors.name = "Please enter your full name";
    else if (!isNaN(nameVal)) newErrors.name = "Please enter a valid name";

    if (!phoneVal) newErrors.phone = "Please enter your mobile number";
    else if (phoneVal.length !== 10) newErrors.phone = "Phone must be 10 digits";

    if (!pincodeVal) newErrors.pincode = "Please enter pincode";
    else if (pincodeVal.length !== 6) newErrors.pincode = "Pincode must be 6 digits";

    if (!stateVal) newErrors.state = "Please enter your state";
    if (!cityVal) newErrors.city = "Please enter your city";
    if (!houseVal) newErrors.house = "Please enter house/building name";
    if (!roadVal) newErrors.road = "Please enter road/area name";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setdone(false);
      // You can also submit form data here
    }
  };

  return (
    <div className="checkout_parent">
      <form className="checkout_form" onSubmit={OncheckoutHandler}>
        <h1 className="checkout_heading">Checkout</h1>

        <div className="form_group">
          <input type="text" placeholder="Full Name (Required)*" ref={name} />
          {errors.name && <h6 className="text-danger">{errors.name}</h6>}
        </div>

        <div className="form_group">
          <input type="text" placeholder="Phone Number (Required)*" ref={phone} />
          {errors.phone && <h6 className="text-danger">{errors.phone}</h6>}
        </div>

        <div className="form_group">
          <input type="number" placeholder="Pincode (Required)*" ref={pincode} />
          {errors.pincode && <h6 className="text-danger">{errors.pincode}</h6>}
        </div>

        <div className="form_row">
          <div className="form_group flex_item">
            <input type="text" placeholder="State (Required)*" ref={stateRef} />
            {errors.state && <h6 className="text-danger">{errors.state}</h6>}
          </div>
          <div className="form_group flex_item">
            <input type="text" placeholder="City (Required)*" ref={city} />
            {errors.city && <h6 className="text-danger">{errors.city}</h6>}
          </div>
        </div>

        <div className="form_group">
          <input
            type="text"
            placeholder="House No./Building Name (Required)*"
            ref={house}
          />
          {errors.house && <h6 className="text-danger">{errors.house}</h6>}
        </div>

        <div className="form_group">
          <input type="text" placeholder="Road Name / Area (Required)*" ref={road} />
          {errors.road && <h6 className="text-danger">{errors.road}</h6>}
        </div>

        <div className="place_order">
          <button type="submit" className="place_order_btn">
            Place Order
          </button>
        </div>
      </form>

      {/* Inline Styling / Theme */}
      <style jsx>{`
        .checkout_parent {
          max-width: 700px;
          margin: 50px auto;
          padding: 20px;
          background: #f5f5f5;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .checkout_heading {
          text-align: center;
          margin-bottom: 25px;
          color: #333;
          font-weight: 700;
        }
        .form_group {
          margin-bottom: 15px;
          display: flex;
          flex-direction: column;
        }
        .form_group input {
          padding: 10px 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }
        .form_row {
          display: flex;
          gap: 10px;
        }
        .flex_item {
          flex: 1;
        }
        .text-danger {
          font-size: 0.85rem;
          margin-top: 3px;
        }
        .place_order {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .place_order_btn {
          background: #0d6efd;
          color: white;
          padding: 12px 25px;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: 0.3s;
        }
        .place_order_btn:hover {
          background: #0056b3;
        }
        @media (max-width: 600px) {
          .form_row {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Checkout;
