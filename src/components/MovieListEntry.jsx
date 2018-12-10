import ToggleWatched from './ToggleWatched.js';
var MovieListEntry = ({movie, onToggleWatched}) => (
  <div className="movie-list-entry">
    <span className="movie-name">
      {movie.title}
    </span>
    <span className="float-right">
      <ToggleWatched watched={movie.watched} onToggle={onToggleWatched} />
    </span>
  </div>
);

MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};
export default MovieListEntry;