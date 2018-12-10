import MovieList from './MovieList.js';
import Add from './Add.js'

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      movies: this.props.data,
    };
  }
  
  onToggleWatched(movie, watched) {
    this.setState(function(prevState){
      prevState.movies.find(currMovie => currMovie === movie).watched = watched;
      return {
        movies: prevState.movies
      }
    });
  }
  
  onAddClick(value) {
    this.props.data.push({title: value, watched: false});
    this.setState({
      movies: this.props.data
    })
  }
  
  render(){
    return (
      <div className="App">
        <div className="navbar">
          <a className="navbar-brand" href="#">MovieList</a>
        </div>
        <div className="container">
          <div className="mt-1">
            <Add onAddClick={this.onAddClick.bind(this)}/>
          </div>
          <div className="mt-1">
            <MovieList movies={this.state.movies} onToggleWatched={this.onToggleWatched.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;