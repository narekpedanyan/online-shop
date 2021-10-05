import React from 'react';
import {useSelector} from 'react-redux';
import './index.scss';
import ProductCard from "../../components/productCard";

const Home = () => {
    const productsData = useSelector(state => state.products);
    const {data} = productsData;
    const immediateData = data.filter((item) => item.isimmediate)
    const newData = data.filter((item) => item.createDate - 24 < 0);
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
            <section className="immediateProducts">
                <div className="container">
                    <h1 style={{marginBottom: "56px"}}>Շտապ հայտարարություններ</h1>
                    <div className="products-grid">
                        {
                            immediateData.map((item, index) => (<ProductCard data={item} key={index}/>))
                        }
                    </div>
                </div>
            </section>
            <div className="container">
                <section className="BannerSection">
                    <h1 className="BannerText">Banner</h1>
                </section>
            </div>
            <section className="NewProducts">
                <div className="container">
                    <h1 style={{marginBottom: "56px"}}>Նոր հայտարարություններ</h1>
                    <div className="products-grid">
                        {
                            newData.map((item, index) => (<ProductCard data={item} key={index}/>))
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;
