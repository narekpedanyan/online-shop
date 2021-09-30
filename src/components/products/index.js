import React from 'react';
import { useSelector } from "react-redux";

const Products = () => {
  const cars = useSelector(state => state.products.cars);
  return (
    <div>
      {
        cars.map((item, index) => {
          return (
            <div key={index}>
              <span>{item.mark}</span>
              <span>{item.model}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products;
