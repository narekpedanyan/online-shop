import {useSelector} from "react-redux";

const DrawDetailedInfo = ({name, data}) => {
  if (name === 'img') {
    return (
      <div>
        {
          data.map((item) => <img src={item.base64} />)
        }
      </div>
    )
  }
  if (typeof data === 'boolean') {
    return (
      <div>
        <span>{name}</span>
        <span>:</span>
        <span>
          {data ? 'Yes' : 'No'}
        </span>
      </div>
    )
  }
  return (
    <div>
      <span>{name}</span>
      <span>{data}</span>
    </div>
  )
}

const SelectedProduct = ({match: {params: {productId}}}) => {
  const productsData = useSelector(state => state.products.data);
  const targetObj = productsData.find(item => item.productId === productId);
  if (targetObj) {
    return (
      <div>
        {
          Object.keys(targetObj).map(key => {
            const itemInfo = targetObj[key];
            return (
              <div style={{display: 'flex'}}>
                <DrawDetailedInfo
                  name={key}
                  data={itemInfo}
                />
              </div>
            )

          })
        }
      </div>
    )
  }
  return (<div>SOmething went wrong</div>)

}

export default SelectedProduct