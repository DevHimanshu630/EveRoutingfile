import { Routes , Route } from "react-router-dom";
import Content from "./Components/Content/Content";
import Dashboard from "./Components/Dashboard/Dashboard";
import Managedisplay from "./Components/ManageDisplay/Managedisplay";
import Playlist from "./Components/Playlist/Playlist";
import Advertisedashboard from "./Components/Advertise/Advertisedashboard";
import Advertiselogo from './Components/Images/advertiselogo.png'
import Advertiser1 from './Components/Advertiser1/Dashboard1'
function App() {
  return (
    <>
     {/* <Routes>
      <Route path="/" element={ <Dashboard/>}/>
      <Route path="/content" element={ <Content/>}/>
      <Route path="/playlist" element={ <Playlist/>}/>
      <Route path="/managedisplay" element={<Managedisplay/>}/>
      <Route path="/advertiser" element={<Advertisedashboard/>}/>
  </Routes>  */}
    <Advertiser1/>
    </>
  );
}

export default App;
