import React, { FormEvent } from "react";

interface InputProps {
  type: string;
  name: string;
  value: any;
  className: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  return (
    <input
      type={props.type}
      placeholder={props.name}
      value={props.value}
      onChange={props.onChange}
      className={props.className}
    />
  );
}

export default Input;
