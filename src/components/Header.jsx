import React from "react";
import {Link} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header(){
    return(
        <header>
            <div className="container header-container">
                <h1>Notes</h1>
                <button className="btn btn-warning"><Link to="/" className="link"><ExitToAppIcon/></Link></button>
            </div>
        </header>
    );
}

export default Header;