var Add = ({onAddClick}) => (
  <form className="form-inline add-form" onSubmit={(e) =>{e.preventDefault();onAddClick(e.target.elements['movie-name'].value)}}>
    <input type="text" id="add-movie-bar" name="movie-name" placeholder="movie name" />
    <button type="submit" className="btn btn-primary">Go!</button>
  </form>
)

export default Add;