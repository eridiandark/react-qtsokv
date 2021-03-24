import {Link} from "react-router-dom";
import "./index.scss";

export default function Menu(){
    return(
        <div className="main-menu">
            <Link to="/">Home</Link>
            <Link to="/app">App</Link>
        </div>
    );
}