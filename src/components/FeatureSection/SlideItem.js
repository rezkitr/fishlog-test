const SlideItem = ({ title, iconClass }) => {
    return (
        <div className="bg-gray-200 w-[350px] h-80 px-6 flex flex-col items-center justify-center text-main-blue rounded-md">
            <i className={`fa ${iconClass} mb-8 text-3xl`} aria-hidden="true" />
            <h5 className="font-semibold mb-8">{title}</h5>
            <p className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita aut fugiat dicta veniam perferendis enim saepe amet
                placeat voluptatem dicta veniam
            </p>
        </div>
    );
};

export default SlideItem;
