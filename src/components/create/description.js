import React from 'react';

const Description = ({handleFieldChange}) => {

  return (
    <div>
      <input name="mark" type="text" onChange={handleFieldChange}/>
    </div>
  )
}

export default Description;
