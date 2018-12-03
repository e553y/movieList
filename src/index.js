import App from './components/App.js';
import exampleData from './data/exampleMovieList.js';

ReactDOM.render(<App data={exampleData} />, document.getElementById('app'));