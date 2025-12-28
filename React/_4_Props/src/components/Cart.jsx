const Cart = (props) => {
  return (
    <div className="cart">
        <img src="https://images.unsplash.com/photo-1766169776580-719773aee8a8?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="PIC" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, expedita.</p>
        <button>View Details</button>
    </div>
  )
}

export default Cart;