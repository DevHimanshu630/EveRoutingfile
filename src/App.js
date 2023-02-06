import { Routes , Route } from "react-router-dom";
import Content from "./Components/Content/Content";
import Dashboard from "./Components/Dashboard/Dashboard";
import Managedisplay from "./Components/ManageDisplay/Managedisplay";
import Playlist from "./Components/Playlist/Playlist";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Dashboard/>}/>
      <Route path="/content" element={ <Content/>}/>
      <Route path="/playlist" element={ <Playlist/>}/>
      <Route path="/managedisplay" element={<Managedisplay/>}/>
    </Routes>
    {/* <Managedisplay/> */}
    {/* <Dashboard/> */}
    {/* <Content/> */}
    </>
  );
}

export default App;
