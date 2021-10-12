import React from 'react';
import GroupCheckBox from "../groupCheckBox";
import {additionalInfoOptions} from "../../constants/additionalInfoOptions";


const Additional = ({ handleFieldChange, productInfo }) => {

  const handleOptionsChange = (newName) => {
    handleFieldChange({
      target: {
        name: newName,
        value: !productInfo[newName]
      }
    })
  }

  const selectedOptions = (() => {
      return additionalInfoOptions.reduce((aggr,option) => {
        if(productInfo[option.name]) {
          aggr.push(option.name);
        }
        return aggr
      } ,[])
  })();

  return (
    <div>
      <div className="container">
        <GroupCheckBox
          selectedOptions={selectedOptions}
          options={additionalInfoOptions}
          onChange={handleOptionsChange}
        />
      </div>
    </div>
  )
}

export default Additional;
