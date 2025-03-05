import BackButton from "../components/App/backbutton";
import Navbar from "../components/App/navbar";
import AddressSelector from "../components/App/AddressSelector";
import CouponSummary from "../components/App/couponsummary";

function Checkout() {
  return (
    <main className=" flex flex-col items-center">
      <Navbar sticky={false} />

      <div className="flex-1 overflow-auto p-4 w-full flex justify-center">
        <div className="w-full max-w-md">
          <BackButton title="Checkout" />
          <AddressSelector />
          
        </div>
      </div>

      {/* CouponSummary - Always centered */}
      <div className="w-full fixed bottom-0  px-2 bg-white flex justify-center">
        <div className="w-full max-w-md">
          <CouponSummary />
        </div>
      </div>
    </main>
  );
}

export default Checkout;
