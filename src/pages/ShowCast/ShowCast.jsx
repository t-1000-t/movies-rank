import React, { Component } from 'react';
import './ShowCast.module.css';
import { fetchShowCast } from '../../services/api-services';
import urls from '../../helpers/constants';

export default class ShowCast extends Component {
  state = { cast: null };

  componentDidMount() {
    this.fetchCast();
  }

  fetchCast = () => {
    const movieId = this.props.match.params.movieId;

    fetchShowCast(movieId).then(cast => {
      this.setState({ cast });
    });
  };

  render() {
    const { cast } = this.state;
    return (
      <>
        {cast && (
          <ul>
            {cast.map(({ credit_id, name, character, profile_path }) => (
              <li key={credit_id}>
                {profile_path && (
                  <div>
                    <img src={`${urls.PHOTO_URL}${profile_path}`} alt={name} />
                  </div>
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
