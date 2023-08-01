import LanguageBtn from "./LanguageBtn";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-12 py-6 text-white font-semibold absolute top-0 left-0 right-0 z-10">
            <div>
                <img src="https://fpik.undip.ac.id/wp-content/uploads/2021/08/fishlog-asset-logo.png" alt="logo" width={150} />
            </div>
            <div className="flex items-center gap-8">
                <nav className="flex items-center gap-8">
                    <a href="#">Home</a>
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
