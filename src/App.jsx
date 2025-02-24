import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login page/Login';
import Appintro from './App intro/appintro';
import MainPage from './page1/MainPage';
import Searchresult from './page1/SearchResult';
import CheckOut from './page1/CheckOut';
import OrderPlaced from './components/App/orderplaced';
import SavedAddress from './page1/SavedAddress';
import RemoveAddress from './page1/RemoveAddress';
import AddAddress from './page1/AddAddress';
import EditAddress from './page1/EditAddress';
import ProgressBarPage from './page1/ProgressBarpage';
import CartPage from './page1/Cartpage';
import ServicesPage from './page1/ServicePage';
import NotificationPage from './page1/NotificationPage';
import PhoneModels from './page1/PhoneModels';
import SpairPartsPage from './page1/SpairPartsPage';
import SpairPartsCart from './page1/SparePartsCart';
import OtherServicesPage from './page1/OtherServicesPage';


import NewChekout from './page1/newchekout';


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
        <Route path="/savedaddress" element={<SavedAddress />} />
        <Route path="/removeaddress" element={<RemoveAddress />} />
        <Route path="/addaddress" element={<AddAddress />} />
        <Route path="/editaddress" element={<EditAddress />} />
        <Route path="/progressbarpage" element={<ProgressBarPage />} />
        <Route path="/cartpage" element={<CartPage isLoggedIn={false} />} />
        <Route 
        path="/servicespage" 
        element={<ServicesPage isLoggedIn={true} hasServices={services.length > 0} services={services} />} 
        />
      <Route path='/notificationpage' element={<NotificationPage isLoggedIn={true} hasNotifications={true} />} />
      <Route path='/phonemodels' element={<PhoneModels />} />
      <Route path='/sparepartspage' element={<SpairPartsPage />} />
      <Route path='/sparepartscart' element={<SpairPartsCart />} />
      <Route path='/otherservicespage' element={<OtherServicesPage />} /> 


      <Route path='/newcheckout' element={<NewChekout />} />
        

      </Routes>
  
  );
}

export default App;
