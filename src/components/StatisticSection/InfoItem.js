const InfoItem = ({ title, description }) => {
    return (
        <div className="w-60 text-center">
            <h2 className="font-bold mb-4 text-3xl">{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default InfoItem;
