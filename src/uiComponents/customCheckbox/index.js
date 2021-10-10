import React from 'react';
import './index.scss';

const CustomCheckBox = ({
                          onChange=  () => null,
                          checked,
                          name,
                          label = ''
                        }) => {
  return (
    <div className="custom-checkbox" onClick={() => onChange(name)}>
      <div className={`checkbox-wd ${checked ? 'icon-check' : '' }`} />
      <label>
        {label || (checked ? 'Uncheck' : 'Check')}
      </label>
    </div>
  )
}

export default CustomCheckBox;
