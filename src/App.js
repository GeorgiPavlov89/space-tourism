import './App.css';
import Home from "./components/Navigation/NavigationPages/Home/Home"
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom"
import Destination from "./components/Navigation/NavigationPages/Destination/Destination"
import Crew from "./components/Navigation/NavigationPages/Crew/Crew"
import Technology from "./components/Navigation/NavigationPages/Technology/Technology"
import Navbar from "./components/Navigation/Navbar"




function App() {

  const path = useLocation().pathname;
  const location = path.split("/")[1]


  return (
    <div className={"App " + location}  >






      <Navbar />
      <Routes>
        <Route path="/georgipavlov89" element={<Home />} />
        <Route path="georgipavlov89/destination" element={<Destination />} />
        <Route path='georgipavlov89/crew' element={<Crew />} />
        <Route path='georgipavlov89/Technology' element={<Technology />} />
      </Routes>


    </div>
  );
}

export default App;
