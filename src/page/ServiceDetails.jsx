import BackButton from "../components/App/backbutton";
import Navbar from "../components/App/navbar";
import ProgressBar from "../components/App/progressbar";

const ServiceDetails = () => {
    return (
        <main className="w-screen h-screen flex flex-col">
            <Navbar sticky={false} />
            <BackButton title="My Services" />
            
            <ProgressBar currentStep={0} />

        </main>
    );
};

export default ServiceDetails;
