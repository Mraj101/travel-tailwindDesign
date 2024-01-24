import ChooseUs from "./components/ChooseUs";
import Deals from "./components/Deals";
import Destination from "./components/Destination";
import Expolore from "./components/Expolore";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PopularTour from "./components/PopularTour";
import SerrMore from "./components/SeeMore";
import Subscribe from "./components/Subscribe";


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
        <SerrMore/>
        <Subscribe/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
