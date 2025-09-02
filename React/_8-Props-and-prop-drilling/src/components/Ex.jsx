import Ex2 from "./Ex2"

const Ex = (props) => {
  return (
    <div>
      
      Accessing the name: {props.name} from Example 1
      <Ex2 user = {props.name}/>
      </div>
  )
}

export default Ex