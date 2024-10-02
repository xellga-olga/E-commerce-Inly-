import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden w-full h-96">
        <img 
          className="w-full h-full object-cover hover:scale-110 transition ease-in-out" 
          src={image[0]} 
          alt="product" 
        />
      </div>
      <p className="text-sm pt-3 pb-1">{name}</p>
      <p className="text-sm font-medium">
        {currency}{price}
      </p>
    </Link>
  );
};

export default ProductItem;