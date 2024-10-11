import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title"


const formatDate = (date) => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  
  return new Date(date).toLocaleDateString('en-US', options);
};

const Orders = () => {

  const { products, currency } = useContext(ShopContext)

  const currentDate = new Date();

  return (
    <div className="border-t pt-16">

      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className="">
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className="flex flex-col py-2 border-t border-b text-gray-700 md:flex-row md:items-center md:justify-between gap-4 ">
              <div className="flex items-start gap-6 text-sm">
                <img src={item.image[0]} className="w-20 sm:w-24" />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex text-base items-center gap-3 mt-2 text-gray-700">
                    <p className="text-lg">{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className="mt-2">Data: <span className="text-gray-400">{formatDate(currentDate)}</span></p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Orders
