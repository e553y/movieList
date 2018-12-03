import MovieListEntry from './MovieListEntry.js';
import Search from './Search.js';

var MovieList = ({movies, onSearchButtonClick}) =>(
  <div className="movie-list container mb-3">
    <Search onSearchButtonClick={onSearchButtonClick}/>
    {
      movies.length < 1 ? 
        <MovieListEntry movie={{title:'Sorry, No movies to display...'}}/>:
      movies.map((movie) => (
      <MovieListEntry movie={movie} />
    ))
    }
  </div>
);

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};
export default MovieList;