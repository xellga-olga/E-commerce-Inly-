import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSellers = () => {
   const { products } = useContext(ShopContext);
   const [bestSeller, setBestSeller] = useState([]);

   useEffect(() => {
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0, 4));
   }, []);

   return (
      <div className="mt-10">
         <div className="py-8 text-center text-3xl">
            <Title text1={"BEST"} text2={"SELLERS"} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
               Our aim is to offer good quality clothing and products at an afforable cost.
            </p>
         </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg
         lg:grid-cols-4 gap-4 gap-y-6">
            {
               bestSeller.map((item, index) => (
                  <ProductItem key={index} id={item.id} name={item.name} image={item.image} price={item.price} />
               ))
            }
         </div>
      </div>
   )
};

export default BestSellers;
