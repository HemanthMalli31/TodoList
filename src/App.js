import { Fragment } from "react"
import InputTodo from "./todoolist/InputTodo";
import Listtodo from "./todoolist/Listtodo";

function App() {
  return (
    <Fragment>
    <div className="container">
      <InputTodo/>
      <Listtodo/>
      
      

    </div>
    </Fragment>
    
  )
}

export default App;
