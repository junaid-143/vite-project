
import Navbar from "../components/App/navbar";
import ModelSelection from "../components/App/modelselection";



const PhoneModels = () => {

    return (
        <main className="w-screen h-screen flex flex-col">
            <Navbar sticky={false} />
            
           <ModelSelection />
            


        </main>
    );
};

export default PhoneModels;
