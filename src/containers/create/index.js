import React, {useState} from "react";
import Description from "../../components/create/description";
import Additional from "../../components/create/additional";
import Resources from "../../components/create/resources";
import Publish from "../../components/create/publish";
import "./index.scss";
import {carInfoModel} from "../../constants/carInfo";

const STEPS = {
  description: 'description',
  additional: 'additional',
  resources: 'resources',
  publish: 'publish'
};

const RouteComponent = ({ name, handleFieldChange, productInfo }) => {
  const data = {
    handleFieldChange: handleFieldChange,
    productInfo: productInfo
  };
  switch(name) {
    case STEPS.description:
      return <Description {...data}/>;
    case STEPS.additional:
      return <Additional {...data}/>;
    case STEPS.resources:
      return <Resources {...data}/>;
    case STEPS.publish:
      return <Publish {...data}/>;
    default:
      return null;
  }
}

const steps = {
  description: {
    key: STEPS.description,
    label: "Description",
    route: Description,
  },
  additional: {
    key: STEPS.additional,
    label: "Additional",
    route: Additional,
  },
  resources: {
    key: STEPS.resources,
    label: "Resources",
    route: Resources,
  },
  publish: {
    key: STEPS.publish,
    label: "Publish",
    route: Publish,
  },
};

const Create = () => {
  const [step, setStep] = useState(steps["description"]);
  const [productInfo, setProductInfo] = useState(carInfoModel);
  const handleFieldChange = (e) => {
    if (!e) {
      setProductInfo(carInfoModel);
      return;
    }
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
          <RouteComponent
            handleFieldChange={handleFieldChange}
            productInfo={productInfo}
            name={step.key}
          />
        </div>
      </div>
    </section>
  );
};

export default Create;
