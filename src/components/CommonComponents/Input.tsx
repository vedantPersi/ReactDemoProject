import React from "react";

interface InputFormDetails {
  label: string;
  input: {
    id: string,
    type: string,
    min: string,
    max: string,
    step: string,
    defaultValue: string
  };
}

const Input = React.forwardRef((props:InputFormDetails, ref:any) => {
  return (
    <div className="flex items-center mb-2">
      <label className="font-bold mr-4" htmlFor={props.input.id}>{props.label}</label>
      <input className="w-12 rounded pl-2" ref={ref} {...props.input} />
    </div>
  );
});

export default Input;