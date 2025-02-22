import Navbar from "../components/App/navbar";
import TabSelector from "../components/App/tabselector";
import SparePartsTable from "../components/App/sparepartstable";

function Searchresult() {
    return (
        <main>
            <Navbar sticky={true} />
            <div className="w-screen mt-14 lg:mt[62px] ">
                <TabSelector />
                <SparePartsTable />
            </div>
        </main>
    );
}

export default Searchresult;