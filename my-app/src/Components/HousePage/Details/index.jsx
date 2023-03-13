import Collapse from "../../Collapse";

function Details ({name, content}) {
    if (Array.isArray(content)){
    return (
            <div className="card-container">
              <div id={'titleCard'+name} className={'containerTitle' }>
                <div className= "collapseTitle">
                  {name}</div>
                  <Collapse name={name}/>
                </div>
              <ul id={'textOf'+name} className="textOf">
                {content.map((item,index)=> <li key={index}>{item}</li>)}
                </ul>
            </div>
          );
    }
        return (
            <div className="card-container">
              <div id={'titleCard'+name} className={'containerTitle' }>
                <div className= "collapseTitle">
                  {name}</div>
                  <Collapse name={name}/>
                </div>
              <div id={'textOf'+name} className="textOf">
                {content}
                </div>
            </div>
          );
    }

export default Details;