import ChooseUs from "./components/ChooseUs";
import Destination from "./components/Destination";
import Expolore from "./components/Expolore";
import Navbar from "./components/Navbar";
import PopularTour from "./components/PopularTour";

function App() {
  return (
    <>
        <Navbar/>
      <div class="mx-32 gap-20 border-">
        <Expolore/>
        <PopularTour/>
        <Destination/>
        <ChooseUs/>
      </div>
    </>
  );
}

export default App;
