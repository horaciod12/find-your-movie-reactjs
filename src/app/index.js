import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Navigation} from './components/Navigation';
import Findyourmovie from './components/Findyourmovie';
import About from './components/About';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';

class App extends React.Component {
    render() {
        return (	
			<Router>
				<div>
					<Navigation find={"Find Your Movie"} about={"About"} contact={"Contact"}/>

					<Route exact path="/" component={Findyourmovie}/>
					<Route path="/about" component={About}/>
					<Route path="/contact" component={Contact}/>
					
					<Footer copy={"© FindYourMovie - 2017"} />
				</div>
			</Router>
        )
    }
}

render(<App />, window.document.getElementById('app'));