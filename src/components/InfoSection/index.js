import InfoCard from "./InfoCard";

const InfoSection = () => {
    return (
        <div className="px-24 py-12 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center">
                Strengthening the Fisheries Supply
                <br />
                Chain, together
            </h1>
            <div className="flex items-center gap-10 mt-14">
                <InfoCard
                    imageSrc="https://binadesa.org/wp-content/uploads/2016/11/2016-11-18-Budi-lagi-dilaut.jpg"
                    description="Fostering a sustainable fisheries ecosystem in Indonesia"
                />
                <InfoCard
                    imageSrc="https://digitalindo.co.id/admin/upload/news_post/104139747-Maersk_.jpg"
                    description="Assisting in reducing food loss in the fisheries industry"
                />
                <InfoCard
                    imageSrc="https://marketing.co.id/wp-content/uploads/2020/06/hybrid.jpg"
                    description="Distributing technology to various cities in Indonesia"
                />
            </div>
        </div>
    );
};

export default InfoSection;
