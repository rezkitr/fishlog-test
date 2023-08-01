import { Carousel } from "react-responsive-carousel";

const CarouselWrapper = ({ children, ...props }) => {
    return (
        <Carousel
            autoPlay
            interval={2000}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            swipeable={false}
            infiniteLoop
            {...props}
        >
            {children}
        </Carousel>
    );
};

export default CarouselWrapper;
