import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login page/Login';
import Appintro from './App intro/appintro';
import MainPage from './page/MainPage';
import Searchresult from './page/searchresult';
import CheckOut from './page1/CheckOut';
import OrderPlaced from './components/App/orderplaced';
import ServiceDetails from './page/servicedetails';
import SavedAddress from './page/savedaddress';
import RemoveAddress from './page/removeaddress';
import AddAddress from './page1/AddAddress';
import EditAddress from './page/editaddress';
import ProgressBarPage from './page/progressbarpage';
// import ComingSoon from './page/comingsoon';



import CartPage from './page1/Cartpage';
import ServicesPage from './page1/ServicePage';
import NotificationPage from './page1/NotificationPage';


// import FilledCart from './components/App/others/FilledCart';
// import NotSignCart from './page/notsigncart';
// import SignedEmptyCart from './page/signedemptycart'; 

// import SignedServices from './components/App/others/SingedServices';
// import NotSignServices from './page/recent delete/NotSignServices';
// import SignedEmptyServieces from './page/recent delete/SingedEmptyServices';

// import Notification from './page/notsingnotification';
// import SignedNotification from './page/signednotification';
// import SignedEmptyNotification from './page/signedemptynotification';

const services = [
  {
    status: "Ready to pickup",
    color: "bg-orange-500",
    details: {
      name: "Iphone 15 plus display qty2",
      serviceStatus: "Pickup at Jan 2nd",
      model: "Apple iphone 15 plus",
      price: "₹8,000"
    }
  },
];




function App() {
  return (

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Appintro" element={<Appintro />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/searchresult" element={<Searchresult />} />
       
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/orderplaced" element={<OrderPlaced />} />
        <Route path="/servicedetails" element={<ServiceDetails />} />
        <Route path="/savedaddress" element={<SavedAddress />} />
        <Route path="/removeaddress" element={<RemoveAddress />} />
        <Route path="/addaddress" element={<AddAddress />} />
        <Route path="/editaddress" element={<EditAddress />} />
        <Route path="/progressbarpage" element={<ProgressBarPage />} />
        {/* <Route path="/comingsoon" element={<ComingSoon />} /> */}


        <Route path="/cartpage" element={<CartPage isLoggedIn={false} />} />
        <Route 
        path="/servicespage" 
        element={<ServicesPage isLoggedIn={true} hasServices={services.length > 0} services={services} />} 
        />
      <Route path='/notificationpage' element={<NotificationPage isLoggedIn={true} hasNotifications={true} />} />
        

        {/* <Route path="/filledcart" element={<FilledCart />} /> */}
        {/* <Route path="/signedemptycart" element={<SignedEmptyCart />} /> */}
        {/* <Route path="/notsigncart" element={<NotSignCart />} /> */}

        {/* <Route path="/signedservices" element={<SignedServices />} /> */}
        {/* <Route path="/notsignedservices" element={<NotSignServices />} />
        <Route path="/signedemptyservices" element={<SignedEmptyServieces />} /> */}

        {/* <Route path="/notification" element={<Notification />} />
        <Route path="/signednotification" element={<SignedNotification />} />
        <Route path="/signedemptynotification" element={<SignedEmptyNotification />} /> */}



      </Routes>
  
  );
}

export default App;
