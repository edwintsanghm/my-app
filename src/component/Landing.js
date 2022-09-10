import { Link } from "react-router-dom";

const Landing = () => (
<>
    <p>
        <Link to="/form">
            <button type="button">
            I'm a Driver
            </button>
        </Link>
    </p>
    <p>
        <Link to="/form">
            <button type="button">
            I'm a Passenger
            </button>
        </Link>
    </p>
</>
)

export default Landing;
