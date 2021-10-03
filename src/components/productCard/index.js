import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const ProductCard = ({ data }) => {
  const { mark } = data;
  return (
    <div className="product-card">
      {mark}
    </div>
  )
}

ProductCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProductCard;
