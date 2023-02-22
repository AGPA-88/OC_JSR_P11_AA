import errorImg from '../error404.svg';
import '../CSS/error404.css';

function Error404 () {
    return (
    <div className='Error404'>
        <img src={errorImg} alt="404 error" />
        <h1>Oops! It looks like this page doesn’t exist.</h1>
    <div className='hp_link'>
        <a href='/home'>Go back to home page</a>
    </div>
    </div>
    )
}

export default Error404;