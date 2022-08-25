import React, { useState } from "react";
import { database } from "../../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function ToDoApp() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([""]);

  const createDocument = async () => {
    const docRef = await addDoc(collection(database, "todos"), {});
    console.log("Document written with ID: ", docRef.id);
  };

  return (
    <div>
      <form onSubmit={createDocument}>
        <label for="title">Todo List Title</label>
        <input
          type="text"
          placeholder="Enter Title"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label for="title">Todo Items</label>
        {todo.map((input, index) => (
          <div className="d-flex space-between">
            <input
              style={{ width: "80%" }}
              type="text"
              placeholder="Enter Title"
              value={input}
              onChange={(e) => {
                let tempArr = [...todo];
                tempArr[index] = e.target.value;
                setTodo([...tempArr]);
              }}
            />
            <button
              type="submit"
              style={{
                width: "auto",
                height: 40,
                verticalAlign: "center",
                marginLeft: 5,
                borderRadius: 5,
              }}
              onClick={(e) => {
                e.preventDefault();
                setTodo([...todo, ""]);
              }}
            >
              New
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: "#d92a2a",
                width: "auto",
                height: 40,
                verticalAlign: "center",
                marginLeft: 5,
                borderRadius: 5,
              }}
            >
              Cancel
            </button>
          </div>
        ))}
        <hr />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
