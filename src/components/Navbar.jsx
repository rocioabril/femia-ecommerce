import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import LangContext from "../context/LangContext";
import { useContext } from "react";

function Navbar() {
  const { language } = useContext(LangContext);

  const categories = [
    { name: language["aceites-esenciales"], route: "oil" },
    { name: language["cuerpo"], route: "body" },
    { name: language["rostro"], route: "face" },
  ];

  return (
    <nav className="w-full flex justify-between items-center shadow-md shadow-gray-200">

      <Link to="/" className="p-2">
        <img src={logo} alt="company logo" className="w-20" />
      </Link>
      <ul className="flex justify-center items-center">
        {categories.map((category) => (
          <li key={category.route} className="p-4"> 
            <Link to={`category/${category.route}`} className="font-semibold transition-colors hover:text-orange-500">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-8">
        <LanguageSelector />
        <CartWidget />
      </div>

    </nav>
  );
}

export default Navbar;
