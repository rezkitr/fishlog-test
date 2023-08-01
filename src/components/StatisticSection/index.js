import InfoItem from "./InfoItem";

const StatisticSection = () => {
    return (
        <div className="bg-main-blue px-28 pt-12 pb-16 flex flex-col items-center gap-12 text-white">
            <h1 className="font-black text-4xl">Our Impact</h1>
            <div className="w-full flex items-center justify-between">
                <InfoItem title="+20,000 mT" description="with cover more than 45 FishLog Quality Center across Indonesia" />
                <InfoItem title="+4,000 mT" description="seafood inventory and covering 20+ species" />
                <InfoItem title="+400" description="fishermen & suppliers and +300 buyers networks" />
            </div>
        </div>
    );
};

export default StatisticSection;
