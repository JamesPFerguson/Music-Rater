import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.css';
import './css/bootstrap-grid.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReviewForm from './components/ReviewList/ReviewForm';
import Home from './components/Home'
import AlbumReviewsContainer from './components/AlbumReviews/AlbumReviewsContainer';
import ArtistAlbumsContainer from './components/ArtistAlbums/ArtistAlbumsContainer';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
         <NavBar />
         <br/><br/>
            <Route exact path="/" component={Home} />
            <Route exact path="/albums/:id" component={AlbumReviewsContainer} />
            <Route exact path="/artists/:id" component={ArtistAlbumsContainer} />
            <Route exact path="/reviews/new" component={ReviewForm} />
         </div>
       </Router>
    );
  }
}

export default App;
