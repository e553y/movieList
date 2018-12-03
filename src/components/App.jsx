import MovieList from './MovieList.js';
import Add from './Add.js'

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      active: this.props.data,
    };
  }
  
  onSearchButtonClick(value){
    //filter movies by seach term
    let filtered = this.props.data.filter((movie)=> movie.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    //update state 
    this.setState({
      active: filtered,
     });
    
  }
  
  onAddClick(value) {
    this.props.data.push({title: value});
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
            <MovieList movies={this.state.active} isloading={this.state.movieListLoading} onSearchButtonClick ={this.onSearchButtonClick.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;