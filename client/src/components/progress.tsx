import "./progress.css"

interface data{
    value:number
}
const ProgressBar:React.FC<data> =({value})=> {
  return (
    <div id="barcontainer">
      <div className="bar">
        <div className="progress" style={{width:`${value}%`}}></div>
      </div>
    </div>
  );
}

export default ProgressBar;
