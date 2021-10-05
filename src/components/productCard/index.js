import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
// import './Photo'

const ProductCard = ({data}) => {
    const {mark} = data;
    const {model} = data;
    const {price} = data;
    const {mileage} = data;
    const {fuel} = data;
    const {year} = data;
    const {engine} = data;
    return (
        <div className="product-card">
            <div className="photoBox">
                <img src="/Photo/car2.jpg"/>
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
