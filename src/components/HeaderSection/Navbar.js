import LanguageBtn from "./LanguageBtn";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-12 py-6 text-white font-semibold absolute top-0 left-0 right-0 z-10">
            <div>
                <img src="https://fishlog.co.id/_next/static/images/whitelogo-401cd74af6ede4a7c237b29591e9319f.png" alt="logo" width={120} />
            </div>
            <div className="flex items-center gap-8">
                <nav className="flex items-center gap-8">
                    <a href="#" className="font-bold">Home</a>
                    <a href="#">About</a>
                    <a href="#">Product</a>
                    <a href="#">Fishlog Quality Corner</a>
                    <a href="#">B2B Marketplace</a>
                </nav>
                <LanguageBtn />
            </div>
        </div>
    );
};

export default Navbar;
