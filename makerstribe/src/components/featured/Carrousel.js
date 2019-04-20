import React from 'react'
import Slider from "react-slick";
// import slide_one from '../../resources/images/slide_one.jpg';
// import slide_two from '../../resources/images/slide_two.jpg';
// import slide_three from '../../resources/images/slide_three.jpg';
// import { blue } from '@material-ui/core/colors';

const Carrousel = ()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
      };
        return(
            <div
            className="carrousel_wrapper"

            style={{
                background:'black',
                height:'600px',
                overflow:'hidden'
            }}
            >
                <Slider {...settings}>
                        <div>
                            
                            <div
                            className="carrousel_image"
                                style={{
                                    background:`white`,
                                    height:`${window.innerHeight}px`
                                }}>
                            </div>
                        </div>
                        <div>
                        <div
                            className="carrousel_image"
                                style={{
                                    background:'white',
                                    height:`${window.innerHeight}px`
                                }}>
                            </div>
                        </div>
                        <div>
                        <div
                            className="carrousel_image"
                                style={{
                                    background:'white',
                                   height:`${window.innerHeight}px`
                                }}>
                            </div>
                        </div>
                </Slider>
            </div>
        );
      }   


export default Carrousel;