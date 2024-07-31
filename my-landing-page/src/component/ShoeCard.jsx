
import PropTypes from 'prop-types';

const ShoeCard = ({ shoe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={shoe.image} alt={shoe.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{shoe.name}</h3>
        <p className="text-gray-600">${shoe.price}</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Add to Cart</button>
      </div>
    </div>
  );
};

ShoeCard.propTypes = {
  shoe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default ShoeCard;
