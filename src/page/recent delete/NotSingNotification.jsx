import BackButton from "../../components/App/backbutton";
import Navbar from "../../components/App/navbar";
import { MdNotificationsActive } from "react-icons/md";
import NotSignedComp from "../../components/App/notsignedcomp";


const Notification = () => {
    return (
        <main className="w-screen h-screen flex flex-col">
            <Navbar sticky={false} />
            <BackButton title="Notification" />
            
            {/* New wrapper to calculate available height */}
            <div className="flex flex-col flex-grow items-center justify-center px-4">
                <NotSignedComp
                    Icon={MdNotificationsActive} 
                    title="No Notification yet"
                    description="You have no notification yet, check back later."
                />
            </div>
        </main>
    );
};

export default Notification;
