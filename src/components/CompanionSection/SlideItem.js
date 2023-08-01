const SlideItem = ({ imageSrc }) => {
    return (
        <div className="bg-white rounded-xl w-80 h-40 px-6 py-8">
            <img src={imageSrc} alt="companion" className="h-full w-full" />
        </div>
    );
};

export default SlideItem;
