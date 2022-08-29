import React, { useState, useEffect } from "react";
import { database } from "../../utils/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Update({ id, refresh }) {
  const docRef = doc(database, "todos", id);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setInputValue(docSnap.data()?.todoItem);
      } else {
        setInputValue("");
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await updateDoc(docRef, { todoItem: inputValue });
      alert("Saved");
      setInputValue("");
      refresh();
    } catch (err) {
      console.log("Error: ", err);
      refresh();
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
