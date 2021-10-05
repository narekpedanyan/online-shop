import React from "react";
import { descriptionData } from "../../constants/carInfo";

const Description = ({ handleFieldChange }) => {
  const { leftBlockData, rightBlockData } = descriptionData;

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
                  />
                </div>
              );
            })}
          </div>
          <div className="description-content-right">
            <div>dabbdbabda</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
