import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import { addInformation } from './ShowDetailsPage.module.css';
import { fetchShowDetails } from '../../services/api-services';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import ShowCast from '../ShowCast/ShowCast';
import ShowReviews from '../ShowReviews';
import routes from '../../helpers/routes';

export default class ShowDetailsPage extends Component {
  state = { movie: null, movieId: null };

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    const movieId = this.props.match.params.movieId;

    fetchShowDetails(movieId).then(movie => {
      this.setState({ movie, movieId });
    });
  };

  onGoBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      this.props.history.push(this.props.location.state.from);
      return;
    }
    this.props.history.push(routes.HOME);
  };

  render() {
    const { movie } = this.state;
    const { url } = this.props.match;
    return (
      <BrowserRouter>
        <article>
          <button type="button" onClick={this.onGoBack}>
            Go back
          </button>

          {movie && <MovieDetails details={movie} />}

          <section className={addInformation}>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={`${url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${url}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </section>

          <Switch>
            <Route path={routes.CAST} component={ShowCast} />
            <Route path={routes.REVIEWS} component={ShowReviews} />
          </Switch>
        </article>
      </BrowserRouter>
    );
  }
}
