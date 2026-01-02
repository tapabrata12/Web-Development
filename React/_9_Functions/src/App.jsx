const App = () => {
  function handleClick() {
    console.log("Clicked")
  }
  return (
    <div onWheel={(elem)=>{
      console.log("Page is Scrolling");
    }}>
      <h1>Function</h1>
      <button onClick={handleClick}>Click</button> <br /> <br />

      <button onClick={function () {
        console.log("Hello");
      }}>Hello</button> <br /> <br />

      <input onChange={(elem) => {
        console.log(elem.target.value);

      }} type="text" />


      <hr />

      <div onMouseMove={(elem) => {
        console.log(elem.clientX, elem.clientY);
      }} className="box"></div>

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>

    </div>
  )
}

export default App