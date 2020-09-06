import React, { Component } from "react";
import { Link } from "react-router-dom";
import FetchTVApi from "../../services/API_TMDb";

export default class Home extends Component {
  state = {
    trendingMovies: [],
  };
  componentDidMount() {
    FetchTVApi.fetchTrendingMovie().then((trendingMovies) =>
      this.setState({ trendingMovies })
    );
  }

  render() {
    const { trendingMovies } = this.state;

    return (
      <>
        {trendingMovies.length > 0 && (
          <ul>
            <h2>Trending today</h2>
            {trendingMovies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <h3>
                    {movie.title !== undefined
                      ? movie.title
                      : movie.original_name}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
