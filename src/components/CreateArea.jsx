import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) 
{
  const [notes,setNotes] = useState({title:"",content:""});

  function handleChange(event)
  {
    const input =event.target.name;
    const Value=event.target.value;
    setNotes((prevValue) =>{
      return {
        ...prevValue,
        [input]:Value,
      }
    })
  }

  function submitNote(event)
  {
    props.onChecked(notes);
    setNotes({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  
  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={notes.title} placeholder="Title" />
        <textarea  name="content" onChange={handleChange} value={notes.content} placeholder="Take a note..." rows="3" />
        <button  onClick={submitNote} ><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
