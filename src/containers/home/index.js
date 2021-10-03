import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import ProductCard from "../../components/productCard";

const Home = () => {
  const productsData = useSelector(state => state.products);
  const { data } = productsData;
  console.log(productsData, 'productsData');
  return (
    <React.Fragment>
      <section className="filters">
        <div className="container">
          <div>
            Filters
          </div>
        </div>
      </section>
      <section className="products">
        <div className="container">
          <div className="products-grid">
            {
              data.map((item, index) => (<ProductCard data={item} key={index}/>))
            }
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home;
