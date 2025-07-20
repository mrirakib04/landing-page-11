import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Product = ({
  productImage,
  ratings,
  views,
  loves,
  productName,
  productBio,
  price,
  deliveryFee,
}) => {
  return (
    <div className="w-full flex items-center gap-2 p-3 rounded-lg border">
      <img
        className="h-full"
        src={productImage}
        alt={`image- ${productName}`}
      />
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <p className="flex items-center gap-1">
            <FaStar className="text-lg text-yellow-500"></FaStar>
            {ratings}
          </p>
          <p className="flex items-center gap-1">
            <FaEye className="text-lg"></FaEye>
            {views}
          </p>
          <p className="flex items-center gap-1">
            <FaHeart className="text-lg"></FaHeart>
            {loves}
          </p>
        </div>
        <h3 className="text-lg font-semibold">{productName}</h3>
        <p className="text-sm font-medium">{productBio}</p>
        <div className="flex items-center gap-1">
          <p className="font-medium text-red-500">Price - ${price}</p>
          <p className="text-gray-600 flex items-center gap-1">
            <FaCartShopping className="text-lg"></FaCartShopping> Delivery Fee -
            ${deliveryFee}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
