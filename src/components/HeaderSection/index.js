import React from "react";
import Navbar from "./Navbar";

const HeaderSection = () => {
    return (
        <div className="flex items-center px-12 h-[480px] lg:h-[540px] relative bg-cover bg-[url('https://images.wallpaperscraft.com/image/single/darkness_monitor_glow_155681_1280x800.jpg')]">
            <Navbar />
            <h1 className="text-white font-bold text-6xl">
                Connecting the nation
                <br />
                through the fisheries supply
                <br />
                chain.
            </h1>
        </div>
    );
};

export default HeaderSection;
