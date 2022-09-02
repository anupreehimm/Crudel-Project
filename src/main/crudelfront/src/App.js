import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Create } from "./Create";
import { List } from "./List";
import { Menu } from "./Menu";
import { Read } from "./Read";
import { Update } from "./Update";
import { Filter } from './Filter';
import { Remove } from './Remove';
import { Alter } from './Alter';
import { Login } from './Login';

const App=()=>{

    return(
        <>
        {
            (sessionStorage.getItem('user'))?
                <>
                   <HashRouter>
                       <Menu/>
                        <Routes>
                        <Route exact path="/view" element={<List/>}></Route>
                        <Route exact path="/fresh" element={<Create/>}></Route>
                        <Route exact path="/filter" element={<Filter/>}></Route>
                        <Route exact path="/remove" element={<Remove/>}></Route>     
                        <Route exact path="/alter" element={<Alter/>}></Route>   
                        <Route exact path="/open/:key" element={<Read/>}></Route>                      
                        <Route exact path="/modify/:primary" element={<Update/>}></Route>

                        </Routes>
                    </HashRouter>
                </> 
                :
                <>
                    <Login/>
                </>
            } 
        </>       
    )
}
export default App;