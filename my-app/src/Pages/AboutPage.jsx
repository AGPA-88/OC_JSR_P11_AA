import Header from "../Components/Header";
import banner from '../about.svg';


function About () {
    return (
        <div>
            <h1>Page in construction.</h1>
            <Header />
            <img src={banner} alt="banner" />
            <button type="dropdown">
                Reliability
            </button>
            <button>
                Respect
            </button>
            <button>
                Service
            </button>
            <button>
                Safety
            </button>
        </div>
    )
}

export default About;