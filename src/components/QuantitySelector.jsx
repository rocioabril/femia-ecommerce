const QuantitySelector = ({ quantity, onIncrement, onDecrement }) => {

  return (
    <div className="flex justify-center text-lg w-fit mt-4 gap-8 p-2">
      <button className="text-2xl text-orange-600" onClick={onDecrement}>
        -
      </button>
      <div className="font-semibold">{quantity}</div>
      <button className="text-2xl text-orange-600" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
