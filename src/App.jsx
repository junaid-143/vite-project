import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './loginpage/Login';
import MainPage from './page1/MainPage';
import PhoneBrandSelect from './page1/PhoneModelSelect';
import PhoneModels from './page1/PhoneModels';
import SpairPartsPage from './page1/SpairPartsPage';
import OtherServicesPage from './page1/OtherServicesPage';
import Checkout from './page1/CheckOut';
import AddAddress from './page1/AddAddress';
import PickDatePage from './page1/PickDatePage';
import CartPage from './page1/Cartpage';
import ServicesPage from './page1/ServicePage';
import ProgressBarPage from './page1/ProgressBarpage';
import NotificationPage from './page1/NotificationPage';


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
        <Route path="/mainpage" element={<MainPage />} />
        <Route path='/phonebrandselect' element={<PhoneBrandSelect />} />
        <Route path='/phonemodels' element={<PhoneModels />} />
        <Route path='/sparepartspage' element={<SpairPartsPage />} />
        <Route path='/otherservicespage' element={<OtherServicesPage />} /> 
        <Route path='/checkout' element={<Checkout />} />
        <Route path="/addaddress" element={<AddAddress />} />
        <Route path='/pickdatepage' element={<PickDatePage />} />
        <Route path="/cartpage" element={<CartPage isLoggedIn={true} />} />
        <Route 
        path="/servicespage" 
        element={<ServicesPage isLoggedIn={true} hasServices={services.length > 0} services={services} />} 
        />
        <Route path="/progressbarpage" element={<ProgressBarPage />} />
        <Route path='/notificationpage' element={<NotificationPage isLoggedIn={true} hasNotifications={true} />} />
     
        

      </Routes>
  
  );
}

export default App;
