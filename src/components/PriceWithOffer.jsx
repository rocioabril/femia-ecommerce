import { useLang } from "../context/LangContext";

const PriceWithOffer = ({ price }) => {
  const { language } = useLang();

  return (
    <>
      <div className="text-gray-400">
        <span>{language["precio_anterior"]}: </span>
        <span className="line-through">${price.toFixed(2)}</span>
      </div>
      <div className="text-red-700 font-bold flex items-center gap-1">
        <p className="bg-red-700 py-1 px-2 text-white">30% {language["off"]}</p>
        <p>${(price * 0.7).toFixed(2)}</p>
      </div>
    </>
  );
};

export default PriceWithOffer;
