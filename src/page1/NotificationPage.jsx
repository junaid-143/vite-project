import BackButton from "../components/App/backbutton";
import Navbar from "../components/App/navbar";
import { MdNotificationsActive } from "react-icons/md";
import SignedComp from "../components/App/signedcomp";
import NotSignedComp from "../components/App/notsignedcomp";

const notifications = [
    "Gilbert, you placed an order. Check your order history for full details.",
    "Gilbert, Thank you for shopping with us. We have canceled order #24568.",
    "Gilbert, your Order #24568 has been confirmed. Check your order history for full details."
];

const NotificationPage = ({ isLoggedIn, hasNotifications }) => {
    return (
        <main className="w-screen h-screen flex flex-col">
            <Navbar sticky={false} />
            <BackButton title="Notifications" />

            <div className="flex flex-col flex-grow items-center px-4">
    {!isLoggedIn ? (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <NotSignedComp
                Icon={MdNotificationsActive}
                title="No Notifications yet"
                description="You have no notifications yet, check back later."
            />
        </div>
    ) : !hasNotifications ? (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <SignedComp
                Icon={MdNotificationsActive}
                title="No Notifications yet"
                description="You have no notifications yet, check back later."
            />
        </div>
    ) : (
        <div className="flex flex-col items-center space-y-4 w-full">
            {notifications.map((message, index) => (
                <div key={index} className="flex items-center bg-gray-100 shadow-md rounded-[6px] p-4 w-full max-w-md">
                    <MdNotificationsActive className="text-gray-600 text-2xl mr-4" />
                    <p className="text-gray-700 text-sm">{message}</p>
                </div>
            ))}
        </div>
    )}
</div>

        </main>
    );
};

export default NotificationPage;
