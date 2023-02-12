import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { UserProfile } from "../UserProfile/UserProfile";

export default function Sidebar({ userActions, ...props }) {
	let activeClassName = "side-nav-active";

	return (
		<div className="sidebar-container">
			{/* {JSON.stringify(userActions)} */}
			{/* Load links based on user's access level */}
			<nav className="nav-container">
				{userActions.map((userAction, index) => {
					return (
						<NavLink
							key={index}
							className={({ isActive }) =>
								isActive ? activeClassName : "side-nav-link"
							}
							to={userAction.path}
						>
							{userAction.text}
						</NavLink>
					);
				})}
			</nav>
			<div className="profile-info">
				<UserProfile {...props} />
			</div>
		</div>
	);
}
