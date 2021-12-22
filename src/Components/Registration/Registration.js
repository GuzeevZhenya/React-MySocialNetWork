import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './registration.css'

export const Registration = () => {
  const [email, setEmail] = useState('shyst');
  const [password, setPassword] = useState('123');

  const dispatch = useDispatch();
  const state = useSelector((state) => state.registrationReducer);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setIsRegistrat(true);
    // dispatch({type:"SET_USERDATA",value:{email,password,isRegistrate}})
    e.preventDefault();
    dispatch({ type: 'CHECK_USERDATE', value: { email, password } });
  };

  return (
    <div>
			<form action="" class="box" method="post">
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
