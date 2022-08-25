import React, { useState } from "react";
import { database } from "../../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function Create() {
  const collectionRef = collection(database, "todos");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await addDoc(collectionRef, { todoItem: inputValue });
      alert("Saved");
      setInputValue("");
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
        <input
          type="text"
          placeholder="Type here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit" style={{ width: 200 }}>
          Save
        </button>
      </form>
    </div>
  );
}
