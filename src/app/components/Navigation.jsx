import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navigation = (props) => {
	return (<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<NavLink exact activeClassName="selected" className="navbar-brand" to="/">{props.find}</NavLink>
					</div>
					<ul className="nav navbar-nav menu">
						<li><NavLink activeClassName="selected" to="/about">{props.about}</NavLink></li>
						<li><NavLink activeClassName="selected" to="/contact">{props.contact}</NavLink></li>
					</ul>
				</div>
			</nav>)
}