import React from 'react';

export default class About extends React.Component {
	
	startSearching() {
		this.props.history.push('/');
	}

	render() {
		return (<div className="container">
					<h2 className="text-center h-padding">About</h2>
					<p>
						The "Find Your Movie" App/Site allows you to search for movie title in order to get all the 
						info(original title, overview, rating and release date) from it. Besides that you can vote for 
						that movie you liked. Enjoy!
					</p>
					<button className="btn btn-dark" onClick={this.startSearching.bind(this)}>Start searching here ...</button>
				</div>)
	}
	
}