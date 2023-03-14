import logo from '../logo.svg';
import '../CSS/header.css';
import {Link} from 'react-router-dom';


function Header() {

    return (
      <header className="App-header">
        <navbar>
            <div className="navbar-links">
              <Link to="/home">
                <div>
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </Link>
            <div className="links">
              <Link
              to="/home"
              >
                Home
              </Link>
              <br></br>
              <Link
              to="/about"
              >
                About
              </Link>
            </div>

            </div>
          </navbar>
      </header>
    )
}

export default Header;