import headerImg from '../header_img.svg';
import '../CSS/slogan.css';

function Slogan() {
  return (
    <div className="slogan">
    <img src={headerImg} className="App-image" alt="logo" />
      <p>
      Home anywhere and everywhere
      </p>
    </div>
  )
}

export default Slogan;