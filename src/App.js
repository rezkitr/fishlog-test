import {
    HeaderSection,
    InfoSection,
    FeatureSection,
    StatisticSection,
} from "./components";

const App = () => {
    return (
        <div className="h-screen">
            <div className="header-section">
                <HeaderSection />
            </div>
            <div className="info-section">
                <InfoSection />
            </div>
            <div className="feature-section">
                <FeatureSection />
            </div>
            <div className="statistic-section">
                <StatisticSection />
            </div>
        </div>
    );
};

export default App;
