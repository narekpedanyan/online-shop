import React from 'react';
import {useSelector} from 'react-redux';
import './index.scss';
import ProductCard from "../../components/productCard";
import banner from '../../assets/media/banner.png';
import vector from '../../assets/media/Vector.png';


const Home = () => {
    const productsData = useSelector(state => state.products);
    const {data} = productsData;
    const top = data.filter((item) => item.topCount > 100)
    const immediateData = data.filter((item) => item.isSaleImmediat)
    const newData = data.filter((item) => item.createDate - 24 < 0);
    return (
        <React.Fragment>
            <section className="products">
                <div className="container">
                    <h1 style={{border:"2px solid black",height:"100px"}}>Filter</h1>
                </div>
            </section>
            <section className="products">
                <div className="container">
                    <h1 style={{margin: "56px 0"}}>Թոփ հայտարարություններ</h1>
                    <div className="products-grid">
                        {
                            top.map((item, index) => (<ProductCard data={item} key={index}/>))
                        }
                    </div>
                </div>
            </section>
            <section className="immediateProducts">
                <div className="container">
                    <h1 style={{margin: "56px 0"}}>Շտապ հայտարարություններ</h1>
                    <div className="products-grid">
                        {
                            immediateData.map((item, index) => (<ProductCard data={item} key={index}/>))
                        }
                    </div>
                </div>
            </section>
            <div className="container">
                <section className="BannerSection">
                    <img src={banner} alt=""/>
                </section>
            </div>
            <section className="NewProducts">
                <div className="container">
                    <h1 style={{margin: "56px 0"}}>Նոր հայտարարություններ</h1>
                    <div className="products-grid">
                        {
                            newData.map((item, index) => (<ProductCard data={item} key={index}/>))
                        }
                    </div>
                </div>
            </section>
            <section className="homeFooter">
                <div className="container">
                    <div className="foooterLeftSaid">
                        <div className="footerLogo">
                            <img src={vector} alt=""/>
                            <a href="/">2021 Deo.am</a>
                        </div>
                        <a href="/">Հետադարձ կապ</a>
                        <a href="/">Գովազդ</a>
                        <a href="/">Օգտագործման պայմաններ</a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;
