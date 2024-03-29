
function ItemListContainer({ greeting }) {
  return (
    <div className="flex-1 flex justify-center items-center">
      <h1 className="text-center text-xl w-3/6">{ greeting }</h1>
    </div>
  )
}

export default ItemListContainer;
