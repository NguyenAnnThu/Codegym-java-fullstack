import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import HeaderComponent from "./component/HeaderComponent.jsx";
import Counter1 from "./component/Counter1.jsx";
import Counter2 from "./component/Counter2.jsx";

function App() {

  return (
    <>
      <HeaderComponent />
      <br/>
      <Counter1/>
      <br/>
      <Counter2/>
    </>
  )
}

export default App
