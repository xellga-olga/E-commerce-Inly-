import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-6">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>

      <div className="text-sm">
        {/* Subtotal */}
        <div className="flex justify-between border-b pb-3 mb-3">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-semibold">
            {currency} {subtotal}.00
          </p>
        </div>

        {/* Shipping Fee */}
        <div className="flex justify-between border-b pb-3 mb-3">
          <p className="text-gray-600">Shipping Fee</p>
          <p className="font-semibold">
            {currency} {delivery_fee}
          </p>
        </div>

        {/* Total */}
        <div className="flex justify-between text-lg font-bold mt-4">
          <b>Total</b>
          <b>
            {currency} {total}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
