import React from 'react';
import Navbar from '../components/App/navbar';
import BackButton from '../components/App/backbutton';
import AddressForm from '../components/App/addressform';

const AddAddress = () => {
    return (
        <main className="w-screen h-screen flex flex-col">
            <Navbar sticky={false} />
            <BackButton title="Add Address" />
            <AddressForm buttonLabel='Add Address'/>
            

        
        </main>
    );
};

export default AddAddress;