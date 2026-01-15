
const Card = ({ ID, title, description, deleteHandler }) => {
  return (
    <div className="px-8 flex flex-col gap-2 w-50 h-40 rounded-3xl relative bg-amber-200 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVCcGpEtvEN0fyCLNEqUZvU-PgFQ-W1wNxA&s')] bg-center bg-no-repeat justify-center items-center text-black">
      <div className="w-7 h-7 bg-black rounded-full text-white font-bold flex justify-center items-center">{ID + 1}</div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="font-light text-xs">{description}</p>
      <button className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white" onClick={() => deleteHandler(ID)}>Delete</button>
    </div>
  );
};

export default Card;