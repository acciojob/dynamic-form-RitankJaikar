
import React, { useState } from "react";
import './../styles/App.css';

let i=0;

const App = () => {
  const [inputIds, setInputIds] = useState([]);

  function addField() {
    setInputIds([...inputIds, ++i]);
  }

  console.log(inputIds);

  function deletefield(id) {
    const updatedInputIds = inputIds.filter(inputId => inputId !== id);
    setInputIds(updatedInputIds);
  }

  return (
    <div>
      <form>
        {
          inputIds.length
          ?
          inputIds.map(id => (
            <div key={id}>
              <input />
              <button className="delete" onClick={() => deletefield(id)}>Delete</button>
            </div>
          ))
          :
          <p>No fields from form</p>
        }
      </form>
      <button onClick={addField}>Add Field</button>
    </div>
  )
}

export default App
