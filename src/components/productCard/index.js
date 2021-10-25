import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Slider from "../photoSlider";
import {Link} from "react-router-dom";

const ProductCard = ({data}) => {
  const {
    mark,
    model,
    price,
    mileage,
    fuel,
    year,
    engine,
    isSaleImmediat,
    img,
    productId
  } = data;
  return (
    <Link to={`/detailed/${productId}`} className="product-card">
      <Slider images={img}/>
        <h4 className="carModelText">{mark} {model} {engine}</h4>
        <div className="praceAndImmediate">
          <p className="carPrice">{price}</p>
          {isSaleImmediat && <div className="immediat">Շտապ</div>}
        </div>

        <div className="carCardFooter">
          <p className="footerText">{mileage}</p>
          <p className="footerText">{fuel}</p>
          <p className="footerText">{year}</p>
        </div>
    </Link>
)
}

ProductCard.propTypes =
  {
    data: PropTypes.object.isRequired
  }
;

export default ProductCard;
