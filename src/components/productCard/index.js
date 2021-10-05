import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import inchVorMIBan from '../../assets/media/car.png';

const ProductCard = ({data}) => {
    const {mark,
      model,
      price,
      mileage,
      fuel,
      year,
      engine
    } = data;
    return (
        <div className="product-card">
            <div className="photoBox">
              <img src={inchVorMIBan} alt="" />
            </div>
            <h4 className="carModelText">{mark} {model}  {engine}</h4>
            <p className="carPrice">{price}</p>
            <div className="carCardFooter">
              <p className="footerText">{mileage}</p>
              <p className="footerText">{fuel}</p>
              <p className="footerText">{year}</p>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    data: PropTypes.object.isRequired
};

export default ProductCard;
