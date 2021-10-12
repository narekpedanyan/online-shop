import React, {useState} from "react";
import Description from "../../components/create/description";
import Additional from "../../components/create/additional";
import Resources from "../../components/create/resources";
import Publish from "../../components/create/publish";
import "./index.scss";
import {carInfoModel} from "../../constants/carInfo";

const steps = {
  description: {
    key: "description",
    label: "Description",
    route: Description,
  },
  additional: {
    key: "additional",
    label: "Additional",
    route: Additional,
  },
  resources: {
    key: "resources",
    label: "Resources",
    route: Resources,
  },
  publish: {
    key: "publish",
    label: "Publish",
    route: Publish,
  },
};

const Create = () => {
  const [step, setStep] = useState(steps["description"]);
  const [productInfo, setProductInfo] = useState(carInfoModel);
  const {route} = step;
  const handleFieldChange = (e) => {
    const {name, value} = e.target;
    setProductInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const changeStep = (routeData) => {
    setStep(routeData);
  };

  return (
    <section className="crate-screen">
      <div className="crate-content">
        <div className="steps-control">
          <div className="container">
            <div className="steps-control-list">
              {Object.keys(steps).map((item) => {
                const {label} = steps[item];
                let activeClassname = '';
                if (item === step.key) {
                  activeClassname = 'active';
                }
                return (
                  <button
                    onClick={() => changeStep(steps[item])}
                    type="button"
                    key={item}
                    className={activeClassname}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          {route({handleFieldChange, productInfo})}
        </div>
      </div>
    </section>
  );
};

export default Create;
