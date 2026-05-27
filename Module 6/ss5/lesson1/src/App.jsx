import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react';
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import ListComponent from "./components/ListComponent.jsx";
import AddComponent from "./components/AddComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import UpdateComponent from "./components/UpdateComponent.jsx";
function App() {

    const [keyword, setKeyword] = useState("");
  return (
    <>
      <ToastContainer />
        <HeaderComponent keyword={keyword} setKeyword={setKeyword} />
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-grow-1">
              <Routes>
                <Route path={"/"} element={<HomeComponent/>}/>
                  <Route path={"/student"} element={<ListComponent keyword={keyword} />}/>
                  <Route path={"/student/add"} element={<AddComponent/>}/>
                  <Route path={"/student/update/:id"} element={<UpdateComponent/>}/>
              </Routes>
            </div>
          <FooterComponent/>
        </div>
    </>
  )
}

export default App
