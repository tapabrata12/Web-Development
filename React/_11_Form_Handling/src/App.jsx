const App = () => {
  function behaviour(e) {
    console.log("Form submitted");

    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={(e) => {
        behaviour(e);
      }}>

        <input type="text" placeholder="Enter your name" />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App