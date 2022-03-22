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
  const location = path.split("space-tourism/")[1]


  return (
    <div className={"App " + location}  >






      <Navbar />
      <Routes>
        <Route path="space-tourism/" element={<Home />} />
        <Route path="space-tourism/destination" element={<Destination />} />
        <Route path="space-tourism/crew" element={<Crew />} />
        <Route path="space-tourism/Technology" element={<Technology />} />
      </Routes>


    </div>
  );
}

export default App;
