import { Bookmark } from 'lucide-react';
const Card = (props) => {
  return (
    <div className="cart">
        <div className="top">
          <img src={props.logo} alt="Logo" />
          <button className="save">Save<Bookmark size={12}/></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>5 days ago</span> </h3>
          <h2>{props.title}</h2>
          <div className='center-tag'>
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>

        <div className="buttom">
          <div>
            <h3>{props.rate}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>

      </div>
  )
}

export default Card