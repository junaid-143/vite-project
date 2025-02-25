import Navbar from "../components/App/navbar";
import BackButton from "../components/App/backbutton";
import DatePicker from "../components/App/pickdate";

export default function PickDatePage() {


    return(

            <main className="w-screen h-screen flex flex-col">
        <div className="mt-16">


            <Navbar sticky={true} />
            <BackButton title={"Select your pickup date"} />

            <DatePicker />




            </div>
            </main>
    )
}