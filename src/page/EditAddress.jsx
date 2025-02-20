import React from 'react';
import Navbar from '../components/App/navbar';
import BackButton from '../components/App/backbutton';
import AddressForm from '../components/App/addressform';

const EditAddress = () => {
    return (
        <main className="w-screen h-screen flex flex-col">
            <Navbar sticky={false} />
            <BackButton title="Edit Address" />
            <AddressForm buttonLabel='Save Changes' />
            

        
        </main>
    );
};

export default EditAddress;