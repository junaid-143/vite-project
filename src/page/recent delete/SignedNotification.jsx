import BackButton from "../../components/App/backbutton";
import Navbar from "../../components/App/navbar";
import { MdNotificationsActive } from "react-icons/md";

const notifications = [
    "Gilbert, you placed an order. Check your order history for full details.",
    "Gilbert, Thank you for shopping with us. We have canceled order #24568.",
    "Gilbert, your Order #24568 has been confirmed. Check your order history for full details."
];

const SignedNotification = () => {
    return (
        <main className="w-screen h-screen flex flex-col ">
            <Navbar sticky={false} />
            <BackButton title="Notifications" />

            {/* Notifications Container */}
            <div className="flex flex-col items-center mt-4 px-4 space-y-4 w-full">
                {notifications.map((message, index) => (
                    <div key={index} className="flex items-center bg-gray-100 shadow-md rounded-[6px] p-4 w-full max-w-md ">
                        <MdNotificationsActive className="text-gray-600 text-2xl mr-4" />
                        <p className="text-gray-700 text-sm">{message}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default SignedNotification;
