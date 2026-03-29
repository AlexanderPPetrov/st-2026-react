import { useState } from "react";
import HomePage from "./pages/HomePage"
function App() {
 

  const [name, setName] = useState("Ivan")

  const a = 1;
  console.log("App Rendered")

  return (
    <>
     <HomePage 
        name={name}
        count={a}
        setName={setName}
        >
      </HomePage>
    </>
  )
}

export default App
