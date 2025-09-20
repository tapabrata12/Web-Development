import Number from "./components/Number"
const App = () => {
  return (
    <div>
      {/* We can reuse components as long as we need */}
      <Number></Number>
      <Number></Number>
      {/* We can also use components like this */}
      <Number/>
    </div>
  )
}

export default App