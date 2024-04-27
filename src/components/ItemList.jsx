import { Link } from "react-router-dom";

const ItemList = ({ products }) => (
  <>
    {products.map(({ id, name, image, price }) => (
      <Link key={id} to={`/detail/${id}`} className="max-w-xs flex flex-col items-center">
        <img src={`../../public/img/${image}.jpeg`} alt={name} className="rounded" />
        <h3>{name}</h3>
        <p>{price}</p>
      </Link>
    ))}
  </>
);

export default ItemList;
