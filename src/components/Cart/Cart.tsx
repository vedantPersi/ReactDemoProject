import React, {useContext} from 'react';
import Modal from '../CommonComponents/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

type cartFunction = {
  onCloseCart: () => void
}

const Cart = (props:cartFunction) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  
  const cartItemRemoveHandler = (id:any) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item:any) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className="m-0 p-0">
      {cartCtx.items.map((item:any) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
//https://stackoverflow.com/questions/55129942/typescript-styled-component-error-type-children-string-has-no-properti
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-2xl">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="text-right">
        <button className="text-orange-900" onClick={props.onCloseCart}>Close</button>
        {hasItems && <button className="cursor-pointer bg-transparent ml-4">Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;