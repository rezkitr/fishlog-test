import RightContent from "./RightContent";
import SlidesContent from "./SlidesContent";

const FeatureSection = () => {
    return (
        <div className="mt-14 mb-10 px-4 relative flex justify-end">
            <SlidesContent />
            <RightContent />
        </div>
    );
};

export default FeatureSection;
