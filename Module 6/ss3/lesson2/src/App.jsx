import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderComponent from "./component/HeaderComponent.jsx";
import AddComponent from "./class_component/AddComponent.jsx";
import ListComponent from "./class_component/ListComponent.jsx";

function App() {

  const [reload, setReload] = useState(false);

  const reloadList = () => {
    setReload(!reload);
  }

  return (
      <>
        <HeaderComponent/>
        <div className='container mb-3'>
          <h1 className='mb-5'>Todo List</h1>

          <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
          >

            <div style={{ width: "40%" }}>
              <AddComponent reloadList={reloadList} />
            </div>

            <div style={{ width: "50%" }}>
              <ListComponent reload={reload} />
            </div>

          </div>

        </div>
      </>

  )
}

export default App;