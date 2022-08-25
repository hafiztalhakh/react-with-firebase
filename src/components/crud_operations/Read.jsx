import React, { useEffect, useState } from "react";
import { database } from "../../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Create() {
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
            <li key={i}>
              {el.todoItem}
              <button>Edit</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
