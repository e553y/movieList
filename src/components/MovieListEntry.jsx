var MovieListEntry = ({movie}) => (
  <div className="movie-list-entry">
    <span className="movie-name">
      {movie.title}
    </span>
  </div>
);

MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};
export default MovieListEntry;