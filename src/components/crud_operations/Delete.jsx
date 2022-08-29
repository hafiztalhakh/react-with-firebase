import React from "react";
import { database } from "../../utils/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export default function Delete({ id, refresh }) {
  const docRef = doc(database, "todos", id);

  const handleDelte = async (e) => {
    try {
      e.preventDefault();
      await deleteDoc(docRef);
      refresh();
    } catch (err) {
      console.log("Error: ", err);
      refresh();
    }
  };

  return (
    <div>
      <h2> Are you sure? It will delete permanently</h2>
      <div style={{ display: "flex" }}>
        <button
          style={{
            display: "inline-flex",
            width: "auto",
            borderRadius: 5,
          }}
          onClick={handleDelte}
        >
          Yes
        </button>
        <button
          style={{
            display: "inline-flex",
            width: "auto",
            borderRadius: 5,
            marginLeft: 5,
            backgroundColor: "#d92a2a",
          }}
          onClick={() => refresh()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
