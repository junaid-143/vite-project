import Navbar from "../components/App/navbar";
import Carousel from "../components/App/carousel";
import SearchComponent from "../components/App/searchbar";
import RepairParts from "../components/App/repairparts";
import BrandSelection from "../components/App/brandselector";
import ServiceSteps from "../components/App/servicesteps";

function MainPage () {
    return (
        <main>
            <Navbar />
            <div className="w-screen mt-14 lg:mt[62px] ">
            <Carousel />
            <RepairParts />
            <ServiceSteps />
            <BrandSelection />
            <SearchComponent />
            </div>
        </main>
    );
}

export default MainPage;    