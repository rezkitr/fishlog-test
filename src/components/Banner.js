import React from "react";
import Navbar from "./Navbar";

const Banner = () => {
    return (
        <div className="flex items-center px-12 h-[500px] lg:h-[680px] relative bg-cover bg-[url('https://images.wallpaperscraft.com/image/single/darkness_monitor_glow_155681_1280x800.jpg')]">
            <Navbar />
            <h1 className="text-white font-bold text-4xl">
                Lorem ipsum dolor sit, amet consectetur
                <br />
                adipisicing elit. Nostrum,
                <br />
                mollitia?
            </h1>
        </div>
    );
};

export default Banner;
