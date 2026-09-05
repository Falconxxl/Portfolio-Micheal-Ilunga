import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import News from "./Pages/News";
import Contact from "./Pages/Contact";
import AudioVisual from "./Links/AudioVisual";
import Webdesign from "./Links/Webdesign";
import ContactUs from "./Links/ContactUs";
import BrandIdentity from "./Links/BrandIdentity";
import Music from "./Links/Music";
import Trainings from "./Pages/Trainings";
import Faq from "./Links/Faq";
import ConditionsOfSale from "./Links/ConditionsOfSale";
import PrivacyPolicy from "./Links/PrivacyPolicy";
import Photography from "./Links/Photography";
import DigitalMarketing from "./Links/DigitalMarketing";
import Shop from "./Pages/Shop";
import Prices from "./Pages/Prices";
import Projects from "./Pages/Projects";
import RequestAQuote from "./Components/RequestAQuote";
import ScrollToTop from "./Components/ScrollToTop";
import Collaboration from "./Pages/Collaboration/Collaboration";
import PageFitnessFriend from "./Links/PageFitnessFriend";


function App() {
  return (
      <>
          <ScrollToTop/>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/Projects' element={<Projects/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Prices' element={<Prices/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Collaboration' element={<Collaboration/>}></Route>

          <Route path='/AudioVisual' element={<AudioVisual/>}></Route>
          <Route path='/Photography' element={<Photography/>}></Route>
          <Route path='/Webdesign' element={<Webdesign/>}></Route>
          <Route path='/BrandIdentity' element={<BrandIdentity/>}></Route>
          <Route path='/ContactUs' element={<ContactUs/>}></Route>
          <Route path='/Music' element={<Music/>}></Route>
          <Route path='/DigitalMarketing' element={<DigitalMarketing/>}></Route>
          <Route path="/UxDesign"  element={<DigitalMarketing/>}></Route>
          <Route path="/PageFitnessFriend"  element={<PageFitnessFriend/>}></Route>

          <Route path='/News' element={<News/>}></Route>
          <Route path='/Shop' element={<Shop/>}></Route>
          <Route path='/Faq' element={<Faq/>}></Route>
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}></Route>
          <Route path='/ConditionsOfSale' element={<ConditionsOfSale/>}></Route>
          <Route path='/Trainings' element={<Trainings/>}></Route>
          <Route path='/RequestAQuote' element={<RequestAQuote/>}></Route>
      </Routes>

      </>

  );
}

export default App;
