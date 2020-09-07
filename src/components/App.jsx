import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notesArray,setNotesArray] = useState([]);

  function addNote(notes){
    // console.log("added");
    console.log(notes);
    setNotesArray(prevValue=>{
      return [...prevValue,notes];
    });
  }

  function deleteItem(id){
    console.log(id);
    setNotesArray((prevValue) =>{
      return prevValue.filter((item,index)=>{
        return index!==id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
      onChecked={addNote} 
       />
      <div>
      {notesArray.map((noteItem,index) =>(
        <Note key={index}
        id={index}
        title={noteItem.title} 
        content={noteItem.content} 
        onSet={deleteItem}
        />
      ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
