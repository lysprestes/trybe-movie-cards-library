// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props; // destructuring this.props
    const { title, subtitle, storyline, rating, imagePath } = movie; // destructuring movie
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <div>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{storyline}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
