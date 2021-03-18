import React, { Component } from 'react';
import { fetchShowReviews } from '../services/api-services';

export default class ShowReviews extends Component {
  state = {
    reviews: null,
  };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const movieId = this.props.match.params.movieId;

    fetchShowReviews(movieId).then(reviews => {
      if (reviews.length === 0) return;
      this.setState({ reviews });
    });
  };

  render() {
    const { reviews } = this.state;
    return (
      <>
        {!reviews && <div>We don't have any reviews for this movie.</div>}

        {reviews && (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
