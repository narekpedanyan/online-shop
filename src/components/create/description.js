import React from "react";
import {descriptionData} from "../../constants/carInfo";
import {avalableCurrencies} from "../../constants/avalable_currencies";

const Description = ({handleFieldChange}) => {
  const {leftBlockData, rightBlockData} = descriptionData;

  const handleCurrencyChange = (newValue) => {
    handleFieldChange({
      target: {
        name: "currency",
        value: newValue
      }
    })
  }

  const handleCheckboxChange = (e) => {
    handleFieldChange({
      target: {
        name: e.target.name,
        value: e.target.value === 'on'
      }
    })
  };

  const handleRadioChange = (e) => {
    handleFieldChange({
      target: {
        name: e.target.name,
        value: e.target.value === 'yes'
      }
    })
  };

  return (
    <div className="description">
      {/* <input name="mark" type="text" onChange={handleFieldChange} /> */}
      <div className="container">
        <div className="description-content">
          <div className="description-content-left">
            {leftBlockData.map((inputName) => {
              return (
                <div className="description-content-left_item">
                  <label>{inputName}</label>
                  <input
                    className="description-input"
                    name={inputName}
                    type={
                      inputName === "year" ||
                      inputName === "engine" ||
                      inputName === "mileage"
                        ? "number"
                        : "text"
                    }
                    onChange={handleFieldChange}
                  />
                </div>
              );
            })}
          </div>
          <div className="description-content-right">
            <div className="price-control">
              <div>
                <div>
                  <div>
                    <p>Price*</p>
                    <input type="number" name="price" onChange={handleFieldChange}/>
                  </div>
                </div>
                <div>
                  {
                    avalableCurrencies.map((item) => {
                      return (
                        <button key={item} onClick={() => handleCurrencyChange(item)}>{item}</button>
                      )
                    })
                  }
                </div>
              </div>
              <p>
                Խորհուրդ ենք տալիս ավտոմեքենայի գինը նշել ՀՀ դրամով՝ ՙՙ Արժութային կարգավորման և արճութային
                վերահսկողության մասին՚՚ օրենքի համաձայն
              </p>
            </div>
            <div>
              <div>
                <input name='isConditional' onChange={handleCheckboxChange} type='checkbox'/>
                <label>Պայմանագրային</label>
              </div>
              <div>
                <input name='isChangeable' onChange={handleCheckboxChange} type='checkbox'/>
                <label>Փոխանակում </label>
              </div><div>
              <input name='isPartPayable' onChange={handleCheckboxChange} type='checkbox'/>
              <label>Մաս - մաս վճարում </label>
            </div>
            </div>
          </div>
          <div className='vinCode'>
            <div>
              <label>VIN / Թափքի համարը</label>
              <input type='text'  name='vin' onChange={handleFieldChange}/>
            </div>
          </div>
          <div className='vinCode'>
            <div>
              <label>Մաքսազերծված է *
              </label>
              <input value="yes" name="isMax" onChange={handleRadioChange} type='radio' id="yes"/>
              <label htmlFor="yes">Այո</label>
            </div>
            <div>
              <input value="no" name="isMax" onChange={handleRadioChange} type='radio' id="no"/>
              <label htmlFor="no">Ոչ</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
