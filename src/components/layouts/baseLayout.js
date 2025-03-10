import React from 'react';
import { NavLink } from "react-router";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return (<div>
			<header>
				Some header
			</header>
			<nav>
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? "active" : ""
					}
				>
					Home
				</NavLink>
			|
				<NavLink
					to="about"
					className={({ isActive }) =>
						isActive ? "active" : ""
					}
				>About</NavLink>
			</nav>
      <section className='section-app'>
      	<Outlet />
			</section>  
			<footer>Footer</footer>
    </div>);
}
 
export default BaseLayout;