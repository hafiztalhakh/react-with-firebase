import React, { useState } from "react";
import { app, database } from "../../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function ContactForm() {
  const collectionRef = collection(database, "messages");
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = state;

    addDoc(collectionRef, { name, email, subject, message })
      .then((res) => {
        console.log(res);
        alert("Success");
      })
      .catch((err) => {
        alert(err?.message);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <hr />
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          required
          value={state?.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          required
          value={state?.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <label htmlFor="subject">
          <b>Subject</b>
        </label>
        <input
          type="text"
          placeholder="Enter Subject"
          name="subject"
          required
          value={state?.subject}
          onChange={(e) => setState({ ...state, subject: e.target.value })}
        />
        <label htmlFor="message">
          <b>Message</b>
        </label>
        <textarea
          placeholder="Type here...."
          value={state?.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        />

        <div className="clearfix">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
