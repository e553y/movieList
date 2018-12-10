import MovieListEntry from './MovieListEntry.js';
import Search from './Search.js';
import Toggle from './SelectWatchedPanel.js';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      watched: false,
      active: this.props.movies
    };

  }
  getDerivedStateFromProps(prevProps, state) {
    return {
      active: this.props.movies
    }
  }
  onSearchButtonClick(value){
    //filter movies by seach term
    this.setState(function(state){    
      let filtered = state.movies.filter((movie)=> movie.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
      //update state 
      return {
        active: filtered,
      };
    });
  }

  onTogglePanel (watched) {
    this.setState(function(prevState){
      let newActive = prevState.movies.filter(movie => movie.watched === watched);
      return {
        active: newActive,
        watched: watched
      };
    });
  }
  render () {
      return (
      <div className="movie-list container mb-3">
      
          <div className="d-inline-block"><Toggle watched={this.state.watched} onToggle={this.onTogglePanel.bind(this)} /></div>
          <div className="float-right d-inline-block"><Search onSearchButtonClick={this.onSearchButtonClick.bind(this)}/></div>
     
        {
          this.state.active.length < 1 ? 
          <div className="movie-list-entry"> Sorry, No movies to display... </div>:
          this.state.active.map((movie) => (
          <MovieListEntry movie={movie} onToggleWatched={this.props.onToggleWatched.bind(null, movie)} />
        ))
        }
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};
export default MovieList;