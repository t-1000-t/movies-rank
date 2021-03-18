import React from 'react';
import { image, section, content } from './MovieDetails.module.css';
import urls from '../../helpers/constants';

const MovieDetails = ({
  details: { title, poster_path, vote_average, overview, genres },
}) => {
  return (
    <section className={section}>
      <div>
        <img
          className={image}
          src={`${urls.PHOTO_URL}${poster_path}`}
          alt={title}
        />
      </div>

      <div className={content}>
        <h2>{title}</h2>
        <p>User Score: {vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      </div>
    </section>
  );
};

export default MovieDetails;
