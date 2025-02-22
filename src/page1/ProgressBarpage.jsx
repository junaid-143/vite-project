import BackButton from "../components/App/backbutton";
import Navbar from "../components/App/navbar";
import ProgrssBar from "../components/App/progressbar";
import InvoiceComponent from "../components/App/invoicecomp";


const ProgressBarPage = () => {

    return (
        <main className="w-screen h-screen flex flex-col">
            <Navbar sticky={false} />
            <BackButton title="Service Details" />
           
            <ProgrssBar currentStep={1} />
            <InvoiceComponent />


        </main>
    );
};

export default ProgressBarPage;
