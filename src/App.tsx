import Home from "../pages/Home";
import Completed from "../pages/Completed";
import { BrowserRouter ,Routes, Route} from "react-router-dom";
function App(){
  <BrowserRouter>
  <Routes>
    <Route path="/" element={Home}></Route>
    <Route path="/completed" element={Completed}></Route>
  </Routes>
  </BrowserRouter>
}
export default App;