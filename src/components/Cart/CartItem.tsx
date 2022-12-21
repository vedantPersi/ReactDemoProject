import React from "react";

const CartItem = (props: any) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div>
      <li className="border-b border-orange-900 py-5">
        <div>
          <h2 className="font-bold text-2xl pb-3 text-gray-700">
            {props.name}
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-16">
            <span className="text-lg font-bold text-orange-900">
              {price}
            </span>
            <span className="border text-lg font-bold px-2 rounded-md text-slate-600">
              {" "}
              x {props.amount}
            </span>
          </div>
          <div className="flex gap-5 mr-2">
            <button
              className="border px-4 rounded-md text-orange-900 border-orange-900 text-lg font-bold"
              onClick={props.onRemove}
            >
              −
            </button>
            <button
              className="border px-4 rounded-md text-orange-900 border-orange-900 text-lg font-bold"
              onClick={props.onAdd}
            >
              +
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
