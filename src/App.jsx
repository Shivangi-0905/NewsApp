import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"




const App = () => {
  const [category,seCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={seCategory}/>
      <NewsBoard category={category} />
      
      
    </div>
  )
}

export default App
