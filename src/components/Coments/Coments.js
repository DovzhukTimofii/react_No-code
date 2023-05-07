import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Coments.scss';
import henk from '../../Img/students/Henk.svg';
import opi from '../../Img/students/Opi.svg';
import ana from '../../Img/students/Ana.svg';


export const Coments = () => {
    var settings = {
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="coments">
            
            <div className="coments__headline">
                <h2 className="coments__h2">What my students say</h2>
                <p className="coments__p">Create custom landing pages with Shades that convert more visitors than any website—no coding required.</p>
            </div>
            <Slider {...settings}>
                <div className="coments__item">
                    <div  className="coments__item-card">
                        <p className="coments__item-text">“I waited to completely finish the course to rate it. This was my first approach to python, i am an excel and VBA user. The professor has an excellent way to explain it and a lot or order and organization. I really recommend it.”</p>
                        <div className="coments__item-student">
                            <img src={henk} alt="Henk" />
                            <div className="coments__item-desc">
                                <span className="coments__item-name">Henk Fortuin</span>
                                <span className="coments__item-status">Founder of Crips</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coments__item">
                    <div  className="coments__item-card">
                        <p className="coments__item-text">“I waited to completely finish the course to rate it. This was my first approach to python, i am an excel and VBA user. The professor has an excellent way to explain it and a lot or order and organization. I really recommend it.”</p>
                        <div className="coments__item-student">
                            <img src={opi} alt="Henk" />
                            <div className="coments__item-desc">
                                <span className="coments__item-name">Opi Watihana</span>
                                <span className="coments__item-status">Founder of Crips</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coments__item">
                    <div  className="coments__item-card">
                        <p className="coments__item-text">“I waited to completely finish the course to rate it. This was my first approach to python, i am an excel and VBA user. The professor has an excellent way to explain it and a lot or order and organization. I really recommend it.”</p>
                        <div className="coments__item-student">
                            <img src={ana} alt="Henk" />
                            <div className="coments__item-desc">
                                <span className="coments__item-name">Annie Reyes</span>
                                <span className="coments__item-status">Founder of Crips</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
      
    );
  }