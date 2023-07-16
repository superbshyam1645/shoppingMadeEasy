import './App.css';
import PreNavbar from './components/PreNavbar';
import NavBar from './components/Navbar.js';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Slider from "./components/Slider.js"
import Offers from "./components/Offers.js"
import data from "./data/data.json"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccesoriesMenu from "./components/HotAccesoriesMenu.js"
import HotAcccesories from "./components/HotAcccesories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"

function App() {
  return (
    <Router>
      <PreNavbar />
      <NavBar />
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT PRODUCTS"/>
      <HotAccesoriesMenu />
      <Routes>
        <Route exact path="/music" element={<HotAcccesories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}></Route>
        <Route exact path="/smartdevice" element={<HotAcccesories smartDevices={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}></Route>
        <Route exact path="/home" element={<HotAcccesories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}></Route>
        <Route exact path="/lifestyle" element={<HotAcccesories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />}></Route>
        <Route exact path="/mobileAccessories" element={<HotAcccesories mobileAccesories={data.hotAccessories.mobileAccessories} mobileAccesoriesCover={data.hotAccessoriesCover.mobileAccessories} />}></Route>
      </Routes>
      <Heading text="HOT ACCESSORIES" />
      <ProductReviews productReviews={data.productReviews}/>
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
