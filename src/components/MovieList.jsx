import MovieListEntry from './MovieListEntry.js';

var MovieList = ({movies}) => (
  <div className="movie-list container mb-3">
    {movies.map((movie) => (
      <MovieListEntry movie={movie} />
    ))}
  </div>
);

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};
export default MovieList;