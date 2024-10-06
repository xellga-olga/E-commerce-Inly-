import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ArrowRight from "../assets/ArrowRight.svg";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);

  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = products.slice();

    switch (sortType) {
      case "low-hight":
        setFilterProducts(fpCopy.sort((a, b) => a.prive - b.price));

        break;

      case "hight-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));

        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  // useEffect(() => {
  //   console.log(category)
  //   console.log(subCategory)
  // },[category, subCategory])

  return (
    <div className="flex flex-col border-t sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 cursor-pointer gap-2 flex items-center text-xl"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={ArrowRight}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border pl-5 py-3 mt-6 border-gray-300 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 font-medium text-sm">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Men"}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Women"}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleCategory}
                className="w-3"
                type="checkbox"
                value={"Accessories"}
              />
              Accessories
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border pl-5 py-3 my-5 border-gray-300 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 font-medium text-sm">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Topwear"}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Dresses"}
              />
              Dresses
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Sunglasses"}
              />
              Sunglasses
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Scarves"}
              />
              Scarves
            </p>
            <p className="flex gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-3"
                type="checkbox"
                value={"Outerwear"}
              />
              Outerwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 text-sm px-2 border-gray-300"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-hight">Sort by: Low to Hight</option>
            <option value="hight-low">Sort by: Hight to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className=" grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              price={item.price}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
