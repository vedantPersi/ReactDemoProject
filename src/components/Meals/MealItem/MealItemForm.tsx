import React, {useRef, useState} from 'react';
import Input from '../../CommonComponents/Input';

// interface MealItemFormProps {
//   id: string;
// }

const MealItemForm = (props:any) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef:any = useRef();

  const submitHandler = (event:any) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className="cursor-pointer bg-orange-900 text-white font-bold">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;