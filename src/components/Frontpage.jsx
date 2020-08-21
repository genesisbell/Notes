import React from "react";
import {Link} from "react-router-dom";

function Frontpage(){

    return(
        <div id="frontpage" className="container-fluid">
            <h1>Notes</h1>
            <Link to="/login"><button className="btn btn-warning">Login</button></Link>
            <Link to="/register"><button className="btn btn-dark">Register</button></Link>                     
        </div>
    );

}

export default Frontpage;