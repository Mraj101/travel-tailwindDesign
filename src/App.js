import ChooseUs from "./components/ChooseUs";
import Deals from "./components/Deals";
import Destination from "./components/Destination";
import Expolore from "./components/Expolore";
import Navbar from "./components/Navbar";
import PopularTour from "./components/PopularTour";

function App() {
  return (
    <>
        <Navbar/>
      <div class="mx-32 flex flex-col gap-10 border-">
        <Expolore/>
        <PopularTour/>
        <Destination/>
        <ChooseUs/>
        <Deals/>
      </div>
    </>
  );
}

export default App;
