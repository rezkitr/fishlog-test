import React from "react";

const SocialButton = ({ iconClass }) => {
    return (
        <button className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-main-blue text-lg hover:bg-gray-400">
            <i className={`fa ${iconClass}`} aria-hidden="true" />
        </button>
    );
};

export default SocialButton;
