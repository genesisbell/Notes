import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Zoom from '@material-ui/core/Zoom';

function Note(props){

    return(
        <Zoom in={true}>
            <div className="note">
                <h6>{props.title}</h6>
                <p>{props.content}</p>
                <button onClick={() => {
                    props.deleteNote(props.id);
                }}><DeleteIcon/></button>
            </div>
        </Zoom>
              
    );
}

export default Note;
