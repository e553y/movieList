var ToggleWatched = ({watched, onToggle})=>(
  <span className="toggle-watched" >
    <button className="btn btn-small btn-error" onClick={(e)=> onToggle(false)} hidden={!watched} >mark un-watched</button>
    <button className="btn btn-small btn-light" onClick={(e)=> onToggle(true)} hidden={watched} >mark watched</button>
  </span>
);

export default ToggleWatched;