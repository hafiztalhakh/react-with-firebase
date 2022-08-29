import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function AuthStateListner() {
  const [isLoggedIn, setLoggedIn] = useState("loading");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user);
        setLoggedIn("Yes");
        // ...
      } else {
        // User is signed out
        // ...
        setLoggedIn("No");
      }
    });
  }, []);

  return (
    <div>
      <p>
        User logged in: <strong>{isLoggedIn}</strong>
      </p>
    </div>
  );
}
