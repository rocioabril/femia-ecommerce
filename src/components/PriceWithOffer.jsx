import { useLang } from "../context/LangContext";

const PriceWithOffer = ({ price, discount }) => {
  const { language } = useLang();

  return (
    <>
      <div className="text-gray-400">
        <span>{language["precio_anterior"]}: </span>
        <span className="line-through">${price.toFixed(2)}</span>
      </div>
      <div className="text-red-700 font-bold flex items-center gap-1">
        <p className="bg-red-700 py-1 px-2 text-white whitespace-nowrap">
          {discount}% {language["off"]}
        </p>
        <p>${((price * (100 - discount)) / 100).toFixed(2)}</p>
      </div>
    </>
  );
};

export default PriceWithOffer;
