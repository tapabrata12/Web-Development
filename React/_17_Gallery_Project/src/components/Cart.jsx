const Cart = ({pics}) => {
  let isimg = "No pictures avaliable"
  if (pics.length > 0) {

    isimg = pics.map((elem, idx) => {
      return <a href={elem.url} target="_blank">

        <div className="w-60 h-60 rounded-xl overflow-hidden" key={idx}>
          <img className="w-full h-9/10 object-cover" src={elem.download_url} />
          <p className="text-center font-bold text-xl ">{elem.author}</p>
        </div>

      </a>
    })

  }
  return (
    <div className="flex flex-wrap gap-2">{isimg}</div>
  )
}

export default Cart