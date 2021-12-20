import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";


export const Registration = ()=> {

	const [email, setEmail] = useState('reger');
	const [password, setPassword] = useState('ergerg');


	const dispatch = useDispatch();
	const state = useSelector((state) => state.registrationReducer);


	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({type:"SET_USERDATA",value:{email,password}})
	}

	console.log(state.userDate)

	return (
		<div>
			<form action="" >
				<input onChange={(e)=>setEmail(e.target.value)} name="email" type="text" placeholder="E-Mail" />
				<input onChange={(e)=>setPassword(e.target.value)} name="password" type="password" placeholder="Пароль"/>
				<button type="submit" onClick={handleSubmit}>Войти</button>
			</form>
		</div>
	)
}
