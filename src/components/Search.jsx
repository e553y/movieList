var Search = ({onSearchButtonClick}) => (
  <form className="form-inline" onSubmit={(e) =>{e.preventDefault();onSearchButtonClick(e.target.elements.search.value)}}>
    <input type="text" id="searchBar" name="search" placeholder="Search..." />
    <button type="submit" className="btn btn-light">Go!</button>
  </form>
)

export default Search;