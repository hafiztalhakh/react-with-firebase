import React, { useEffect, useState } from "react";
import { database } from "../../utils/firebaseConfig";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({});

  useEffect(() => {
    getDocsFromFireStore();
  }, []);

  // for getting multiple documents from Firebase Firestore
  const getDocsFromFireStore = async () => {
    const querySnapshot = await getDocs(collection(database, "messages"));
    const tempMessages = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      tempMessages.push({
        docId: doc.id,
        ...doc.data(),
      });
    });
    setMessages([...tempMessages]);
  };

  // for single document
  const getSingleDocFromFireStore = async (docId) => {
    const docRef = doc(database, "messages", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  console.log(messages);

  return (
    <div>
      <h2>Messages</h2>
      {messages?.length > 0 &&
        messages.map((el, i) => (
          <ul key={i}>
            <li>
              <strong>Name:</strong> {el.name}
            </li>
            <li>
              <strong>Email:</strong> {el.email}
            </li>
            <li>
              <strong>Subject:</strong> {el.subject}
            </li>
            <li>
              <strong>Message:</strong> {el.message}
            </li>
          </ul>
        ))}
    </div>
  );
}
