import { HeaderSection, InfoSection } from "./components";

const App = () => {
    return (
        <div className="h-screen">
            <div className="header-section">
                <HeaderSection />
            </div>
            <div className="info-section">
                <InfoSection />
            </div>
        </div>
    );
};

export default App;
