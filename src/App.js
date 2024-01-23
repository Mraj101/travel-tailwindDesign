import Destination from "./components/Destination";
import Expolore from "./components/Expolore";
import Navbar from "./components/Navbar";
import PopularTour from "./components/PopularTour";

function App() {
  return (
    <>
        <Navbar/>
      <div class="mx-10 gap-10">
        <Expolore/>
        <PopularTour/>
        <Destination/>
      </div>
    </>
  );
}

export default App;
