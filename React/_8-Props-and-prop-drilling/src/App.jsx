import Cart from "./components/Cart"
import Cart2 from "./components/Cart2"
import Cart3 from "./components/Cart3"
import Ex from "./components/Ex"

const App = () => {
  const user = [
  {
    "name": "Amit Sharma",
    "city": "Delhi",
    "age": 28,
    "profession": "Software Engineer",
    "profile_pic": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "name": "Priya Nair",
    "city": "Mumbai",
    "age": 25,
    "profession": "Graphic Designer",
    "profile_pic": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "name": "Rohit Sen",
    "city": "Kolkata",
    "age": 30,
    "profession": "Data Analyst",
    "profile_pic": "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    "name": "Sneha Kapoor",
    "city": "Bangalore",
    "age": 27,
    "profession": "Marketing Specialist",
    "profile_pic": "https://randomuser.me/api/portraits/women/62.jpg"
  },
  {
    "name": "Arjun Mehta",
    "city": "Hyderabad",
    "age": 35,
    "profession": "Doctor",
    "profile_pic": "https://randomuser.me/api/portraits/men/70.jpg"
  }
]

  return (
    <>
      <Cart name="Tapabrata" />
      <Cart name="Sourik" />
      <Cart name="Arup" />
      <Cart name="Abhishek" />
      <hr />
      <Cart2 firstName="Tapabrata" lastName="Chowdhury" city="Serampore" age="22"/>
      <Cart2 firstName="Sourik" lastName="Sen" city="West Medinipur" age="20"/>
      <Cart2 firstName="Arup" lastName="Roy" city="Medinipur" age="21"/>
      <Cart2 firstName="Abhishek" lastName="Shikdhar" city="Bongao" age="31"/>
      <hr />
      
      <div>
        {user.map((elm, idx)=>{
          // Here key is a propertity which gives a unique propertity to eatch child it is recomended to give
          return <Cart3 key={idx} name = {elm.name} city = {elm.city} age = {elm.age} pro = {elm.profession} pic = {elm.profile_pic}/>
        })}
      </div>
        <hr />
        <h1><strong>Props under Props</strong></h1>
        {
          user.map(function(params,idx) {
            return <Ex key = {idx} name = {params.name}/>
          })
        }
      
    </>

  )
}

export default App