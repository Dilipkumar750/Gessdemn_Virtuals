import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Home from './Components/Home';
import ImageEnhancement from './Components/ServicesComponent/ImageEnhancement';
import VirtualStaging from './Components/ServicesComponent/VirtualStaging';
import ItemRemoval from './Components/ServicesComponent/ItemRemoval';
import DayToDusk from './Components/ServicesComponent/DayToDusk';
import FloorPlan from './Components/ServicesComponent/FloorPlan';
import VirtualRenovation from './Components/ServicesComponent/VirtualRenovation';
import './App.css';
import TermsAndConditions from './Components/Termsandconditions';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourservices/ImageEnhancement" element={<ImageEnhancement />} />
        <Route path="/ourservices/VirtualStaging" element={<VirtualStaging />} />
        <Route path="/ourservices/ItemRemoval" element={<ItemRemoval />} />
        <Route path="/ourservices/DayToDusk" element={<DayToDusk />} />
        <Route path="/ourservices/FloorPlan" element={<FloorPlan />} />
        <Route path="/ourservices/VirtualRenovation" element={<VirtualRenovation />} />
        <Route path="/termsandcondition" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
