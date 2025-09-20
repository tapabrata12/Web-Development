const Variable = () => {
    let myVar = 11
    let myName = () =>{
        return "Tapabrata Chowdhury"
    }
  return (
    // Here values are comming directly comming from variable
    <div>
        I am Dynamically coming from Variable component and my value is:{myVar} <br />
        We can also send the values are Dynamically coming from functions here My name is: {myName()}
    </div>
  )
}

export default Variable