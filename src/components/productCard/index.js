import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ data }) => {
  const { mark } = data;
  return (
    <div>
      {mark}
    </div>
  )
}

ProductCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProductCard;
