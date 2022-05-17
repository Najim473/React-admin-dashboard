import React, { useContext } from 'react'
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single";
import List from "./Pages/List/List";
import './Style/Dark.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext } from './Context/darkModeContext';
function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    // <div className="app dark">
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              <Route path="userId">
                <Route path=':id' element={<Single />} />
              </Route>
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
              <Route path="productId" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
