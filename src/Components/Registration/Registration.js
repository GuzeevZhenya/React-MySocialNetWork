import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {CHECK_USERDATE} from "../../redux/registrationReducer";

import "./registration.css";

export const Registration = () => {
  const [email, setEmail] = useState("shyst");
  const [password, setPassword] = useState("123");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: CHECK_USERDATE, value: { email, password } });
  };

  return (
    <div>
			<form action="" className="box" method="post">
				<h1>Login</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="text"
          placeholder="E-Mail"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={handleSubmit}>
          Войти
        </button>
      </form>
    </div>
  );
};
