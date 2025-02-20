import BackButton from "../../components/App/backbutton";
import Navbar from "../../components/App/navbar";
import NotSignedComp from "../../components/App/notsignedcomp";
import { GiAutoRepair } from "react-icons/gi";


const NotSignServieces = () => {
    return (
        <main className="w-screen h-screen flex flex-col">
            <Navbar sticky={false} />
            <BackButton title="Cart" />
                     
           
            <div className="flex flex-col flex-grow items-center justify-center px-4">
                <NotSignedComp
                    Icon={GiAutoRepair} 
                    title="No Services yet"
                    description="You have not added any services yet. Please add services."
                />
            </div>
        </main>
    );
};

export default NotSignServieces;
