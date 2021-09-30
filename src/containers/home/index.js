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
        Filters
      </section>
      <section className="products">
        {
          data.map((item, index) => (<ProductCard data={item} key={index}/>))
        }
      </section>
    </React.Fragment>
  )
}

export default Home;
