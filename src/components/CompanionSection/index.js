import React from "react";
import SliderWrapper from "../SliderWrapper";
import SlideItem from "./SlideItem";

const CompanionSection = () => {
    return (
        <div className="bg-gray-200 pt-12 pb-16">
            <h1 className="font-bold text-3xl text-center">Our Companion</h1>
            <div className="mt-14">
                <SliderWrapper slidesToShow={3} slidesToScroll={1} centerMode>
                    <SlideItem imageSrc="https://www.logo.wine/a/logo/Coca-Cola/Coca-Cola-Logo.wine.svg" />
                    <SlideItem imageSrc="https://purepng.com/public/uploads/large/purepng.com-ebay-logologobrand-logoiconslogos-251519938326w1a5t.png" />
                    <SlideItem imageSrc="https://purepng.com/public/uploads/large/purepng.com-fedex-logologobrand-logoiconslogos-251519939539h7rji.png" />
                    <SlideItem imageSrc="https://purepng.com/public/uploads/large/purepng.com-walmart-logologobrand-logoiconslogos-251519939045oqelv.png" />
                    <SlideItem imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Nabati_brand_logo.svg/2560px-Nabati_brand_logo.svg.png" />
                    <SlideItem imageSrc="https://1000logos.net/wp-content/uploads/2017/03/Levis-Logo.png" />
                    <SlideItem imageSrc="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" />
                </SliderWrapper>
            </div>
        </div>
    );
};

export default CompanionSection;
