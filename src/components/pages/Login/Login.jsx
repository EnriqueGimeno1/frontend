import React from "react";
import "./Login.css";
import logo from "../../../assets/images/logo.png";

export default function Login() {
	return (
		<div className="container">
			<div className="login-container">
				<img
					// src="https://media.istockphoto.com/photos/english-bulldog-in-a-pumpkin-wagon-picture-id1280623255?b=1&k=20&m=1280623255&s=612x612&w=0&h=KzVaFbeq9HJdQZdGPXNd5xbfPUbKsjvhZdNC6Ii92pM="
					src={logo}
					className="logo"
					alt="Logo"
				/>
				<form action="" className="login-form">
					<label htmlFor="user" className="form-label">
						Usuario
					</label>
					<input
						type="text"
						className="form-input"
						name="User"
						placeholder="Usuario"
					/>
					<label htmlFor="password" className="form-label">
						Contraseña
					</label>
					<input
						type="password"
						className="form-input"
						name="password"
						placeholder="Contraseña"
					/>
					<input className="submit-button" type="submit" value="Ingresar" />
				</form>
			</div>
		</div>
	);
}
