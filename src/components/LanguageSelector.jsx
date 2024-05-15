import { MdLanguage } from "react-icons/md";
import { useLang } from "../context/LangContext";

function LanguageSelector() {
  const { setLanguage } = useLang();

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="flex items-center">
      <MdLanguage />
      <select onChange={handleChange}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}

export default LanguageSelector;

