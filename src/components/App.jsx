import MovieList from './MovieList.js';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      active: this.props.data,
      movieListLoading: false
    };
  }
  onSearchButtonClick(value){
    //display loading sign
    this.setState({movieListLoading: true});
    //filter movies by seach term
    let filtered = this.props.data.filter((movie)=> movie.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    //update state 
    this.setState({
      active: filtered,
      movieListLoading: false
    });
    
  }
  render(){
    return (
      <div className="App">
        <div className="navbar">
          <a className="navbar-brand" href="#">MovieList</a>
        </div>
        
        <div className="mt-1">
          <MovieList movies={this.state.active} isloading={this.state.movieListLoading} onSearchButtonClick ={this.onSearchButtonClick.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App;