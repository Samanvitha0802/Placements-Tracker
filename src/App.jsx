import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Students from "./pages/Students";

function App()
{
    return (
      <BrowserRouter>
      <Navbar/>
         <Routes>
            <Route path="/" element={<Home/>}> </Route>
           <Route path="/students" element={<Students/>}> </Route>
         </Routes>
      </BrowserRouter>
    );
}

export default App;
