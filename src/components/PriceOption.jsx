import PropTypes from "prop-types";
import Feature from "./Feature";

const PriceOption = ({ prices }) => {
  const { name, price, features } = prices;
  return (
    <div className="bg-blue-400 text-white flex flex-col rounded-lg p-4">
      <span className="text-5xl font-extrabold ">{price}</span>
      <span className=" text-2xl">/mon</span>
      <h2 className="text-4xl text">{name}</h2>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button
        className="bg-cyan-700 w-2/5 mx-auto p-2 text-lg font-bold
       hover:bg-cyan-900 duration-200 rounded-lg mt-8">
        Purchase
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  prices: PropTypes.object.isRequired,  
};
export default PriceOption;
