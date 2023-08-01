const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-12 py-6 text-white font-semibold relative z-10">
            <div>Logo</div>
            <div>
                <nav className="flex items-center gap-8">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Product</a>
                    <a href="#">Fishlog Quality Corner</a>
                    <a href="#">B2B Marketplace</a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
