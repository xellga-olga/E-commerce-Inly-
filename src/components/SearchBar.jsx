import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Search from "../assets/search.svg";
import Cross from "../assets/cross.svg";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
   if (location.pathname.includes('collection') && showSearch) {
      setVisible(true)
   }
   else {
      setVisible(false)
   }
  },[location])

  return showSearch ? (
    <div className="border-t border-b text-center bg-gray-50">
      <div className="inline-flex items-center justify-center border border-gray-400 h-10 px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none text-sm bg-inherit"
          type="text"
          placeholder="search"
        />
        <img className="w-4" src={Search} alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="cursor-pointer w-5 inline"
        src={Cross}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
