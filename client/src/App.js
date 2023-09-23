import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import { getAllToDO, addToDO, updateToDO,deleteToDO } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState();

  useEffect(() => {
    getAllToDO(setToDo);
  }, []);
  const updateMode = (_id,text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDO(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDO(text, setText, setToDo)
            }
          >
            {isUpdating ? "update " : " Add"}{" "}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDO(item.id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;