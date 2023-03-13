import './HousePage/Details/details.css'

function Collapse({name, content}) {
    const lessExpand = (
      <span
        id={'lessExpand' + name}
        className="fa-solid fa-chevron-up lessExpand"
        onClick={(e) => handleLessExpand(e, name)}
      >
          {/* <i class="fa-solid fa-chevron-up"></i> */}
      </span>
    );
    
    const moreExpand = (
      <span
        id={'moreExpand' + name}
        className="fa-solid fa-chevron-down moreExpand"
        onClick={(e) => handleMoreExpand(e, name)}
      >
          {/* <i class="fa-solid fa-chevron-down"></i> */}
      </span>
    );
    
    function handleMoreExpand(e, targetName) {
      e.preventDefault();
      document.querySelector('#textOf' + targetName).style.display = 'block';
      document.querySelector('#lessExpand' + targetName).style.display = 'block';
      document.querySelector('#moreExpand' + targetName).style.display = 'none';
    }
    function handleLessExpand(e, targetName) {
      e.preventDefault();
      document.querySelector('#textOf' + targetName).style.display = 'none';
      document.querySelector('#lessExpand' + targetName).style.display = 'none';
      document.querySelector('#moreExpand' + targetName).style.display = 'block';
    }
    
    return (
      <div className="icone">
        {moreExpand}
        {lessExpand}
      </div>
    );
  }
  export default Collapse;
    