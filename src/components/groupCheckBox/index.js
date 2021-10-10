import React, {useCallback} from 'react';
import CustomCheckBox from "../../uiComponents/customCheckbox";

const GroupCheckBox = ({ options, selectedOptions =[],onChange}) => {

  return (
    <div>
      {
        options.map(({ name, label }) => {
          const isChecked = selectedOptions.find(findName => findName === name);
          return (
            <CustomCheckBox
              checked={isChecked}
              label={label}
              name={name}
              key={name}
              onChange={onChange}
            />
          )
        })
      }
    </div>
  )
}

export default GroupCheckBox;
