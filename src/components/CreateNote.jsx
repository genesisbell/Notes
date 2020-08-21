import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

function CreateNote(props){

    const [isOpen, setOpen] = useState(false);

    const [isList, setList] = useState(false);

    const [noteText, setNoteText] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNoteText(prevValue =>{
            return{
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleOpen(){
        setOpen(true);
    }
    
    function handleClose(){
        setOpen(false);
    }

    function handleList(){
        setList(true);
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        
            <form className="create-note" onSubmit={handleSubmit} action="/" method="POST" onFocus={handleOpen} onBlur={handleClose}>
            
                <input
                    name="title"
                    value={noteText.title}
                    onChange={handleChange} 
                    type="text"
                    placeholder={isOpen ? "Title" : "Write a note..."}
                    autoComplete="off"
                />
                
                    
                <Zoom in={isOpen}>
                    <textarea
                        hidden={isList && true}
                        name="content"
                        value={noteText.content}
                        onChange={handleChange}
                        rows={isOpen ? "3" : "1"} 
                        placeholder="Write a note..."
                    />
                </Zoom>
                
                <input type={isList ? "checkbox" : "hidden"}/>

                <button className="checkbox-btn" onClick={handleList} hidden={isList ? false : true}><CheckBoxIcon/></button>

                <Zoom in={isOpen}>
                    <Fab onClick={() =>{
                        props.addNote(noteText);
                        setNoteText({title: "", content: ""})
                    }}>
                        <AddIcon style={{fontSize: "20px"}}/>
                    </Fab>
                </Zoom>
            </form>

        
                    
    );
}

export default CreateNote;