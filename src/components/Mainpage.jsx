import React, {useState} from 'react';
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";

function Mainpage(){
  const [notes, setNotes] = useState([])

  function addNote(noteText){
     setNotes(prevValue => [...prevValue, noteText])
  }

  function deleteNote(id){
    setNotes(notes.filter((note, index) => (index !== id)))
  }


  return (
    <div id="page-container">
      <Header/>
      <CreateNote addNote={addNote}/>     
      <div className="notes-container container-fluid row justify-content-center">
        {
          notes.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              deleteNote={deleteNote}
            />
          ))
        }
      </div>
      <Footer/>
    </div>
  );
}

export default Mainpage;