import React, { useEffect, useState } from "react";
import API from "../api";

const Home = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const getShoes = async () => {
      try {
        const res = await API.get("/products");
        setShoes(res.data);
      } catch (err) {
        console.log("API Error", err);
      }
    };

    getShoes();
  }, []);

  return (
    <div>
      <h2>Shoes Store</h2>

      {shoes.map((item) => (
        <div key={item._id}>
          <img src={item.image} width="150" />
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
