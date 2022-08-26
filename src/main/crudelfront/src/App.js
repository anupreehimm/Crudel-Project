import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Create } from "./Create";
import { List } from "./List";
import { Menu } from "./Menu";
import { Read } from "./Read";
import { Update } from "./Upadte";

const App=()=>{

    return(
        <>
            <HashRouter>
                <Menu/>
                    <Routes>
                        <Route exact path="/view" element={<List/>}></Route>
                        
                        <Route exact path="/fresh" element={<Create/>}></Route>
                        
                        <Route exact path="/open" element={<Read/>}></Route>
                        
                        <Route exact path="/modify" element={<Update/>}></Route>
                    </Routes>

            </HashRouter>
            
         </>
    )
}
export default App;