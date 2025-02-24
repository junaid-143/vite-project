import Navbar from "../components/App/navbar";
import PhoneSelection from "../components/App/phoneselection";
import SparePartsList from "../components/App/sparepartslist";
import WhyChooseUs from "../components/App/whychooseus";

function SpairPartsPage() {
    return (
        <main>
            <Navbar sticky={true} />
            <PhoneSelection />
            <SparePartsList />
            <WhyChooseUs showCheckout={false} />

        </main>
    );
}

export default SpairPartsPage;