import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from 'qs';
import SearchBar from '../components/SearchBar/SearchBar';
import { fetchShowsWithQuery } from '../services/api-services';

export default class ShowsPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = this.getQueryPramsFromProps(this.props);

    if (!query) return;

    fetchShowsWithQuery(query).then(movies => this.setState({ movies }));
  }

  componentDidUpdate(prevProps) {
    const { query: prevQuery } = this.getQueryPramsFromProps(prevProps);
    const { query: nextQuery } = this.getQueryPramsFromProps(this.props);

    if (prevQuery === nextQuery) return;

    fetchShowsWithQuery(nextQuery).then(movies => {
      this.setState({ movies });
    });
  }

  getQueryPramsFromProps = props => qs.parse(props.location.search.slice(1));

  setSearchQuery = searchQuery =>
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });

  render() {
    const { match, location } = this.props;
    return (
      <div>
        <SearchBar onSearch={this.setSearchQuery} />

        <ul>
          {this.state.movies.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `${match.url}/${id}`,
                  state: { from: location },
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
