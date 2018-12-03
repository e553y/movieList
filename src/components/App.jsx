import MovieList from './MovieList.js';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="App">
        <div className="navbar">
          <a className="navbar-brand" href="#">MovieList</a>
        </div>
        <div className="mt-3">
          <MovieList movies={this.props.data}/>
        </div>
      </div>
    )
  }
}

export default App;