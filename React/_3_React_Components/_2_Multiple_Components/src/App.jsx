// Nothing diffrent here I just Define a fat arrow function insted of normal function
import MyButton from "./components/MyButton"
const App = () => {
  return (
    <div>This is my main App component
      {/* I imported my additional components */}
      <br /> 
      <MyButton></MyButton> 
    </div>
  )
}

export default App