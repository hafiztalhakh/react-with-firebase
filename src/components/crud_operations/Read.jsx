import React, { useEffect, useState } from "react";
import { database } from "../../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Read({ updateItemHandler, deleteItemHandler }) {
  const collectionRef = collection(database, "todos");
  const [state, setState] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collectionRef);
      const tempArr = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        tempArr.push({ docId: doc.id, ...doc.data() });
      });
      setState([...tempArr]);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <div>
      <ul>
        {state?.length > 0 &&
          state.map((el, i) => (
            <li
              key={i}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ display: "inline-flex" }}>{el.todoItem}</p>
              <div>
                <button
                  style={{
                    display: "inline-flex",
                    width: "auto",
                    borderRadius: 5,
                  }}
                  onClick={() => updateItemHandler(el.docId)}
                >
                  Edit
                </button>
                <button
                  style={{
                    display: "inline-flex",
                    width: "auto",
                    borderRadius: 5,
                    marginLeft: 5,
                    backgroundColor: "#d92a2a",
                  }}
                  onClick={() => deleteItemHandler(el.docId)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
