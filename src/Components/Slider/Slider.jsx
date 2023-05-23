import { Swiper, SwiperSlide } from 'swiper/react';
import sliderStyle from './Slider.module.css';
import { Autoplay, Navigation } from 'swiper';
import Loading from '../Loading/Loading';
import "swiper/css/navigation";
import React from 'react'
import 'swiper/css';


export default function Slider() {
    const detailsArray = [
        "Football is the best sport in the world",
        "Football is the best sport in the world",
        "Football is the best sport in the world",
        "Football is the best sport in the world"
    ]
        
    return (
        detailsArray.length > 0 ?
            <Swiper navigation={true} modules={[Autoplay, Navigation]} slidesPerView={1} loop={true} autoplay={{ delay: 5000 }}  direction={"vertical"}>
                {
                    detailsArray.map((details, index) =>
                        <SwiperSlide key={index}>
                            <h1>Football News </h1>
                            <p>{details}</p>
                        </SwiperSlide>
                    )
                }
            </Swiper>
            : <Loading />
    )
}
