import Banner from "./components/Banner";
import InfoSection from "./components/InfoSection";

const App = () => {
    return (
        <div className="h-screen">
            <div className="banner-section">
                <Banner />
            </div>
            <div className="info-section">
              <InfoSection />
            </div>
        </div>
    );
};

export default App;
