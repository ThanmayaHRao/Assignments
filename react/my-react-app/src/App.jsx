import Counter from "./Counter"
import Parent from "./propdrill/Parent"
import Parent1 from "./propdrill/parentchildprop/Parent1"
import State from "./State"



function App() {
  

  

  return (
    <div>
    {/* <Counter/> */}
    <State/>
    <Parent company="ExcelR"/>
    <Parent1/>

    </div>

  )
}

export default App
