import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addProduct} from "../../features/products/productsSlice";

 const Add=()=> {
  const dispatch = useDispatch();
  const [state,setState] = useState({
    mark:"",
    model:""
  });

  const onSubmit = () => {
    dispatch(addProduct(state));
  };

  return(
    <div>
      <input
        onChange={ (e) =>
          setState({...state,mark:e.target.value})}
        name="mark"/>
      <input
        onChange={ (e) =>
          setState({...state,model:e.target.value})}
        name="model"/>
      <button type="button" onClick={onSubmit}>Add</button>
    </div>
  )
}

export default Add