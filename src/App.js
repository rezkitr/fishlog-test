import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="h-screen">
            <div className="banner-section relative">
                <Navbar />
                <Banner />
            </div>
        </div>
    );
};

export default App;
