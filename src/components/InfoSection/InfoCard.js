import React from "react";

const InfoCard = ({ imageSrc, description }) => {
    return (
        <div className="w-80 flex flex-col items-center gap-6">
            <div className="w-full h-40 rounded-3xl overflow-hidden">
                <img src={imageSrc} alt="info" className="object-cover" />
            </div>
            <div className="px-4">
                <p className="font-semibold text-center">{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
