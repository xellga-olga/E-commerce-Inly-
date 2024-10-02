import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  console.log(products);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
   if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10)); 
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-1/2 m-auto text-xs md:text-base sm:text-sm text-gray-600 ">
          Our collection is vast with clothes. <br/>You will be impressed by the
          selection and prices we offer.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
         {
            latestProducts.map((item, index) =>(
               <ProductItem key={index} id={item.id} name={item.name} image={item.image || []}   price={item.price}/>
            ))
         }
      </div>
    </div>
  );
};

export default LatestCollections;
