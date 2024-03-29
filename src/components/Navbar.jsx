import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav className="flex justify-between items-center shadow-md shadow-gray-200">
      <div className="p-2">
        <img src={logo} alt="company logo" className="w-20" />
      </div>
      <ul className="flex justify-center align-middle">
        <li className="p-4">
          <a href="#" className="transition-colors hover:text-orange-500">
            INICIO
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="transition-colors hover:text-orange-500 font-montserrat">
            PRODUCTOS
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="transition-colors hover:text-orange-500">
            PROMOCIONES
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="transition-colors hover:text-orange-500">
            NOSOTROS
          </a>
        </li>
        <li className="p-4">
          <a href="#" className="transition-colors hover:text-orange-500">
            CONTACTO
          </a>
        </li>
      </ul>
      <CartWidget/>
    </nav>
  );
}

export default Navbar;
