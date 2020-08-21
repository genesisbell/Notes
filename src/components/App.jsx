import React from 'react';
import Frontpage from "./Frontpage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register"
import Mainpage from "./Mainpage"

function App(){
  return(
    <Router>
      <Route path="/" exact component={Frontpage}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/mainpage" component={Mainpage}/>
    </Router>
    
  );
}


// function App() {

//   const [notes, setNotes] = useState([])

//   function addNote(noteText){
//      setNotes(prevValue => [...prevValue, noteText])
//   }

//   function deleteNote(id){
//     setNotes(notes.filter((note, index) => (index !== id)))
//   }


//   return (
//     <div id="page-container">
//       <Header/>
//       <CreateNote addNote={addNote}/>
//       <div className="notes-container container-fluid row justify-content-center">
//         {
//           notes.map((note, index) => (
//             <Note
//               key={index}
//               id={index}
//               title={note.title}
//               content={note.content}
//               deleteNote={deleteNote}
//             />
//           ))
//         }
//       </div>
//       <Footer/>
//     </div>
//   );
// }

export default App;
