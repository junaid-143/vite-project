import Navbar from "../../components/App/navbar";
import PhoneSelection from "../../components/App/phoneselection";
import SparePartsRemoveList from "../../components/App/sparepartsremovelist";
import PriceSummary from "../../components/App/pricesummary";
import WhyChooseUs from "../../components/App/whychooseus";

function SpairPartsCart() {
    return (
        <main>
            <Navbar sticky={true} />
            <PhoneSelection />
            <SparePartsRemoveList />
            <PriceSummary />
            <WhyChooseUs showCheckout={true} />

        </main>
    );
}

export default SpairPartsCart;