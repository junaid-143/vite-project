import Navbar from "../components/App/navbar";
import RepairForm from "../components/App/otherrepairservices";



function OtherServicesPage() {
    return (
        <main>
            <Navbar sticky={true} />
            <RepairForm />
        </main>
    );
}

export default OtherServicesPage;