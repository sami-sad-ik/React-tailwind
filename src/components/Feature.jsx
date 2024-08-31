import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="text-left  flex items-center gap-2">
        <FaCheckCircle className="text-green-300 " />
        {feature}
      </p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
