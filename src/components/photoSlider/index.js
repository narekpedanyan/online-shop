import React, {useState} from "react";

const Slider = ({images}) => {
  const [state, setState] = useState(0)

  return (
    <div className="photoBox">
      <img src={images[state] && images[state].base64}/>
      {
        images.length > 1 && (<div className="slider-box">

          {
            images.map((el, index) => {
              return (
                <span onMouseEnter={() => setState(index)} key={index} className="slide-hover"/>
              )
            })

          }
        </div>)
      }

    </div>

  )
};

export default Slider;