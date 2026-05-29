
import './App.css'
import {ToastContainer} from "react-toastify";
import HeaderComponent from "./components/HeaderComponent.jsx";
import {Route, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponent.jsx";
import LoginComponent from "./components/LoginComponent.jsx";
import ListComponent from "./components/ListComponent.jsx";
import AddComponent from "./components/AddComponent.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <>
      <ToastContainer/>
      <HeaderComponent/>
      <Routes>
        <Route path={'/'} element={<HomeComponent/>}/>
        <Route path={'/login'} element={<LoginComponent/>}/>
        <Route path={'/student'} element={<ListComponent/>}/>
        <Route path={'/student/add'} element={<AddComponent/>}/>

      </Routes>

    </>
  )
}

export default App
