import React, { FormEvent } from "react";

interface InputProps {
  type: string;
  name: string;
  value: any;
  className: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
}

const Input = ({ type, name, value, className, onChange }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={name}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;
