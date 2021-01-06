import React from "react";
import { useSelector } from "react-redux";
import { setUser } from "../../reduxState/features/authSlice";

function Main() {
  const user = useSelector(setUser);

  return <div>{user ? <h1>Hello {user.email}</h1> : <h1>Hello</h1>}</div>;
}

export default Main;
