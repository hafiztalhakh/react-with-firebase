import { useState } from "react";
import "./App.css";
import { app } from "./utils/firebaseConfig";
import Create from "./components/crud_operations/Create";
import Read from "./components/crud_operations/Read";
import Update from "./components/crud_operations/Update";
import Delete from "./components/crud_operations/Delete";
import UploadFile from "./components/upload_file";
// import SignUp from "./components/signup";
// import SignIn from "./components/signin";
// import ContactForm from "./components/contact_form";
// import Messages from "./components/contact_messages";

function App() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [docId, setDocId] = useState(null);

  const hanldeUpdateItem = (id) => {
    setDocId(id);
    setShowUpdate(true);
  };

  const hanldeDeleteItem = (id) => {
    setDocId(id);
    setShowDelete(true);
  };

  return (
    <>
      {/* <div className="d-flex space-between">
        <div className="card auth-contianers">
          <SignUp />
        </div>
        <div className="card auth-contianers">
          <SignIn />
        </div>
      </div>
      <div className="d-flex space-between">
        <div className="card auth-contianers">
          <ContactForm />
        </div>
        <div className="card auth-contianers">
          <Messages />
        </div>
      </div> */}
      <div className="d-flex justify-center">
        <div className="card auth-contianers">
          <Create />
        </div>
      </div>
      <div className="d-flex justify-center">
        <div className="card auth-contianers">
          <Read
            updateItemHandler={hanldeUpdateItem}
            deleteItemHandler={hanldeDeleteItem}
          />
        </div>
      </div>
      <div className="d-flex justify-center">
        <div className="card auth-contianers">
          <UploadFile />
        </div>
      </div>
      {showUpdate && (
        <div className="d-flex justify-center">
          <div className="card auth-contianers">
            <Update id={docId} refresh={() => setShowUpdate(false)} />
          </div>
        </div>
      )}
      {showDelete && (
        <div className="d-flex justify-center">
          <div className="card auth-contianers">
            <Delete id={docId} refresh={() => setShowDelete(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
