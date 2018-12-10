var SelectWatchedPanel = ({watched, onToggle}) => (
  <div className="toggle-watched-panel" >
    <button className="btn btn-light" onClick={(e)=> onToggle(false)} disabled={!watched} >Not watched</button>
    <button className="btn btn-light" onClick={(e)=> onToggle(true)} disabled={watched} >watched</button>
  </div>
)

export default SelectWatchedPanel;