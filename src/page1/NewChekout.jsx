import ServiceSuccess from "../components/App/servicesuccess";
import Navbar from "../components/App/navbar";
import BackButton from "../components/App/backbutton";
import CheckOut from "./CheckOut";




function NewChekout() {
    return (
        <div>
            <Navbar sticky={false} />
            <BackButton title={CheckOut} />


            {/* <ServiceSuccess /> */}
        </div>
    )
}
export default NewChekout;