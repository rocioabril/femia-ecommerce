import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


function Navbar() {
  const categories = [
    { name: "ACEITES ESENCIALES", route: "aceites" },
    { name: "CUERPO", route: "cuerpo" },
    { name: "ROSTRO", route: "rostro" },
  ];

  return (
    <nav className="w-full flex justify-between items-center shadow-md shadow-gray-200">
      <Link to="/" className="p-2">
        <img src={logo} alt="company logo" className="w-20" />
      </Link>
      <ul className="flex justify-center items-center">
        {categories.map((category) => (
          <li key={category.route} className="p-4"> 
            <Link to={`category/${category.route}`} className="transition-colors hover:text-orange-500">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
