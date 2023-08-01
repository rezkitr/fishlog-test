import Navbar from "./Navbar";

const HeaderSection = () => {
    return (
        <div className="flex items-center px-24 h-[480px] lg:h-[540px] relative bg-cover bg-[url('https://fishlog.co.id/_next/static/images/home_hero-c27c05c8f28bcb908d947615d083c1fb.jpg')]">
            <Navbar />
            <h1 className="text-white font-black text-5xl">
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
