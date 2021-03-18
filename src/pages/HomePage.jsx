import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchShowPopularMovies } from '../services/api-services';
import routes from '../helpers/routes';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchShowPopularMovies().then(movies => {
      this.setState({ movies: this.mapper(movies) });
    });
  }

  mapper = movies =>
    movies.map(({ name: title, ...props }) => ({
      title,
      ...props,
    }));

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Trending today</h1>

        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`${routes.MOVIES_PAGE}/${id}`}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
