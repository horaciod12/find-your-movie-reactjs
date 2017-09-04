import React from 'react';

export default class Displaymov extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
		}
	}

	voteUp(id) {
		let copyMovies = this.props.movies.map(movie => {	
			if(movie.id == id) {
				movie.vote_count += 1
			}
			return movie;
		})

		this.setState({
			movies: copyMovies
		})
	}

	render() {
		return (<div>
					<h2 className="text-center"><em>{this.props.nomovies}</em></h2>
					{this.props.movies.map((movie, key) => 
					    <div className="media" key={key}>
					        <div className="media-left">
					            <img className="img-movie" title={movie.title} src={movie.poster_path === null ? `http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif` : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
					        </div>
					        <div className="media-body">
					            <h2><em>Original Title: </em>{movie.title}</h2>
					            <p><em>Release Date: </em>{movie.release_date}</p>
					            <p><span className="ion-android-star"></span><em> (Rating)</em><span className="cont-icon"> {movie.vote_average} / 10</span></p>
					            <p>{movie.overview}</p>
					            <i className="ion-thumbsup"></i>
					            <input type="button" className="btn btn-primary" id={movie.id} value={movie.vote_count} onClick={e => this.voteUp(e.target.id)} />
					        </div>
					    </div>
					)}
				</div>)
	}
}