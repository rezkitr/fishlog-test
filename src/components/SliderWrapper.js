import React from "react";
import Slider from "react-slick";

const SliderWrapper = ({ children, ...props }) => {
    return (
        <Slider
            dots={false}
            arrows={false}
            autoplaySpeed={2000}
            autoplay
            {...props}
        >
            {children}
        </Slider>
    );
};

export default SliderWrapper;
