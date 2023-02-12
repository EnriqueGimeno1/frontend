import React, { useState, useCallback } from "react";
import "./Login.css";
import logo from "../../../assets/images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ authenticatedUser, setAuthenticatedUser }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleUsernameChange = useCallback((event) => {
		event.preventDefault();
		setUsername(event.target.value);
		// console.log(username);
	}, []);

	const handlePasswordChange = useCallback((event) => {
		event.preventDefault();
		setPassword(event.target.value);
		// console.log(event.target.value);
	}, []);

	const handleLogin = useCallback(
		async (event) => {
			event.preventDefault();
			await axios({
				method: "post",
				url: "http://localhost:3333/users/login",
				data: {
					username: username,
					password: password,
				},
				// responseType: "json",
			})
				.then(function (response) {
					// console.log(response.data);
					console.log(response.data.User.accessLevel);
					setAuthenticatedUser(response.data);
					// Check if user access level is retrieved
					if (typeof response.data.User.accessLevel !== "undefined") {
						console.log("hello");
						switch (response.data.User.accessLevel) {
							case "Administrador de Sistema":
								console.log("Administrador de Sistema");
								navigate("/admin-panel");
								break;
							case "Gerente de Sucursal":
								console.log("Gerente de Sucursal");
								navigate("/manager-panel");
								break;
							case "Operador de Transporte":
								console.log("Operador de Transporte");
								navigate("/operator-panel");
								break;
							case "Conductor":
								console.log("Conductor");
								navigate("/driver-panel");
								break;
							default:
								break;
						}
					}
				})
				.catch(function (error) {
					if (error.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						console.log(error.response.data);
						console.log(error.response.status);
						console.log(error.response.headers);
					} else if (error.request) {
						// The request was made but no response was received
						// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
						// http.ClientRequest in node.js
						console.log(error.request);
					} else {
						// Something happened in setting up the request that triggered an Error
						console.log("Error", error.message);
					}
					console.log(error.config);
				});
		},
		[navigate, password, setAuthenticatedUser, username]
	);

	return (
		<div className="container">
			<div className="login-container">
				<img
					// src="https://media.istockphoto.com/photos/english-bulldog-in-a-pumpkin-wagon-picture-id1280623255?b=1&k=20&m=1280623255&s=612x612&w=0&h=KzVaFbeq9HJdQZdGPXNd5xbfPUbKsjvhZdNC6Ii92pM="
					src={logo}
					className="logo"
					alt="Logo"
				/>
				<form action="" className="login-form" onSubmit={handleLogin}>
					<label htmlFor="user" className="form-label">
						Usuario
					</label>
					<input
						type="text"
						className="form-input"
						name="User"
						value={username}
						onChange={handleUsernameChange}
						// placeholder="Usuario"
					/>
					<label htmlFor="password" className="form-label">
						Contraseña
					</label>
					<input
						type="password"
						className="form-input"
						name="password"
						value={password}
						onChange={handlePasswordChange}
						// placeholder="Contraseña"
					/>
					<input className="submit-button" type="submit" value="Ingresar" />
				</form>
			</div>
		</div>
	);
}
