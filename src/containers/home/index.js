import React from 'react';
import {useSelector} from 'react-redux';
import './index.scss';
import ProductCard from "../../components/productCard";
import banner from '../../assets/media/banner.png';
import vector from '../../assets/media/Vector.png';
import car1 from "../header/img/car 1.jpg";
import car2 from "../header/img/car2.png";
import car3 from "../header/img/car 3.png";
import car4 from "../header/img/car 4.png";
import car5 from "../header/img/car 5.png";
import car6 from "../header/img/car 6.png";


const Home = () => {
    const productsData = useSelector(state => state.products);
    const {data} = productsData;
    const top = data.filter((item) => item.topCount > 100)
    const immediateData = data.filter((item) => item.isSaleImmediat)
    const newData = data.filter((item) => item.createDate - 24 < 0);
    return (
        <React.Fragment>
          <section>
            <div id='filterField'>
              <img className='passenger' src={car1}/>
              <p className='car1'>Մարդատար</p>
              <img className='MotorEquipment' src={car2}/>
              <p className='car2'>Մոտոտեխնիկա</p>
              <img className='Bus' src={car3}/>
              <p className='car3'>Ավտոբուս</p>
              <img className='Truck' src={car4}/>
              <p className='car4'>Բեռնատար</p>
              <img className='SpecialEquipment' src={car5}/>
              <p className='car5'>Հատուկ տեխնիկա</p>
              <img className='WaterEquipment' src={car6}/>
              <p className='car6'>Ջրային տեխնիկա</p>
            </div>
          </section>
            <section className="products">
                <div className="container">

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
