import React from 'react';

export const Footer = (props) => {
	return (<div className="container-fluid navbar navbar-default navbar-fixed-bottom footer">
				<p className="text-center f-paragraph">{props.copy}</p>
			</div>)
}