import SliderWrapper from "../SliderWrapper";
import SlideItem from "./SlideItem";

const SlidesContent = () => {
    return (
        <div className="w-[48%] 2xl:w-[43%] h-full absolute left-0 z-10 flex items-center">
            <div className="w-full">
                <SliderWrapper>
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
                </SliderWrapper>
            </div>
        </div>
    );
};

export default SlidesContent;
