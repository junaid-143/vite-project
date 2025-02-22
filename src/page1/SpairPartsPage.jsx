import Navbar from "../components/App/navbar";
import PhoneSelection from "../components/App/phoneselection";
import SparePartsList from "../components/App/sparepartsdetails";

function SpairPartsPage() {
    return (
        <main>
            <Navbar sticky={true} />
            <PhoneSelection />
            <SparePartsList />

        </main>
    );
}

export default SpairPartsPage;