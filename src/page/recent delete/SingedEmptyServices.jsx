import BackButton from "../../components/App/backbutton";
import Navbar from "../../components/App/navbar";
import SignedComp from "../../components/App/signedcomp";
import { GiAutoRepair } from "react-icons/gi";


const SignedEmptyServieces = () => {
    return (
        <main className="w-screen h-screen flex flex-col">
            <Navbar sticky={false} />
            <BackButton title="Cart" />
                     
            {/* New wrapper to calculate available height */}
            <div className="flex flex-col flex-grow items-center justify-center px-4">
                <SignedComp
                    Icon={GiAutoRepair} 
                    title="No Services yet"
                    description="You have not added any services yet. Please add services."
                />
            </div>
        </main>
    );
};

export default SignedEmptyServieces;
