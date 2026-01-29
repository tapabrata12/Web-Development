import { useState } from "react"
import Button from "./components/Button"
/*
So now by this way we can send back props to Chid component to the parent Component

*/
const App = () => {

  const [paragraph, setParagraph] = useState("Tea")
  return (
    <div>
      This is {paragraph}
      <Button paragraph={paragraph} setParagraph={setParagraph} />
    </div>
  )
}

export default App