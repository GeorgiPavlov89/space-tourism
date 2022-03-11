import './App.css';
import Home from "./components/Navigation/NavigationPages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./components/Navigation/NavigationPages/Destination"
import Crew from "./components/Navigation/NavigationPages/Crew"
import Technology from "./components/Navigation/NavigationPages/Technology"
import Navbar from "./components/Navigation/Navbar"



function App() {
  return (
    <div className="App home" >




      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/Technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
