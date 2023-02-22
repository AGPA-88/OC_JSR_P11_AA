import logo from '../f_logo.svg';
import '../CSS/footer.css';

function Footer() {
  return (
    <footer>
      <div className="kasa-logo-s">
        <img src={logo} className="App-logo" alt="logo" />
      </div>    
      <p>
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  )
}

export default Footer;