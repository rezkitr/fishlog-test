import CarouselWrapper from "../CarouselWrapper";
import SlideItem from "./SlideItem";

const SlidesContent = () => {
    return (
        <div className="w-[610px] h-full absolute left-0 z-10 flex items-center">
            <div className="w-full relative overflow-hidden">
                <div className="relative w-[850px]">
                    <CarouselWrapper centerMode centerSlidePercentage={43}>
                        <SlideItem
                            title="Business partners management"
                            iconClass="fa-user-circle"
                        />
                        <SlideItem
                            title="Access to Financial Institutions"
                            iconClass="fa-database"
                        />
                        <SlideItem
                            title="Access to Wider Market"
                            iconClass="fa-cart-plus"
                        />
                    </CarouselWrapper>
                </div>
            </div>
        </div>
    );
};

export default SlidesContent;
