import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

interface MealDetails {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem = (props: MealDetails) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount: any) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="flex justify-between m-4 pb-4 border-b border-[#9ca3af]">
      <div>
        <h3 className="font-bold text-xl">
          {props.name}
        </h3>
        <div className="italic text-lg">
          {props.description}
        </div>
        <div className="mt-1 font-bold text-yellow-700 text-xl">
          {price}
        </div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddToCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
