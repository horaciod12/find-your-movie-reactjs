import React from 'react';

import Displaymov from './Displaymov';

export default class Findyourmovie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			nomovies: ''
		}
	}

	searchMovie(e) {
		e.preventDefault();
		let name = document.getElementById('name').value;
		let url = 'https://api.themoviedb.org/3/search/movie?api_key=de4143499cc37f504e64762ee5a34844&query=' + name;

		fetch(url)
			.then(response => !response.ok ? this.setState({
					nomovies: 'Enter a word to search on',
					movies: []
				}) : response)
			.then(response => response.json())
			.then(data => 
					data.total_results == 0 ? this.setState({ 
						nomovies: 'Sorry, no results found for ' + '"' + name + '"',
						movies: []
					}) : this.setState({ 
							movies: data.results,
							nomovies: '' }))
			.catch(error => console.log('Error:',error ))
	}

	render() {		
		return (<div className="container">
					<h2 className="text-center">Find Your Movie</h2>
				    <form className="form-inline form">
						<div className="form-group">
							<input type="text" className="form-control" maxLength="70" id="name" placeholder="Movie Title ..." />
						</div>
						<button onClick={this.searchMovie.bind(this)} type="submit" className="btn btn-dark search-button">Search Movie</button>
					</form>
					<hr />
					<Displaymov movies={this.state.movies} nomovies={this.state.nomovies} />
				</div>)
	}
}