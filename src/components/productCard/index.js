import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

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

    } = data;
    return (
        <div className="product-card">
            <div className="photoBox">
                <img src={img} alt=""/>
            </div>
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
        </div>
    )
}

ProductCard.propTypes = {
    data: PropTypes.object.isRequired
};

export default ProductCard;
