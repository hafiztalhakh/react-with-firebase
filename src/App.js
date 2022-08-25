import "./App.css";
import { app } from "./utils/firebaseConfig";
import Create from "./components/crud_operations/Create";
import Read from "./components/crud_operations/Read";
// import SignUp from "./components/signup";
// import SignIn from "./components/signin";
// import ContactForm from "./components/contact_form";
// import Messages from "./components/contact_messages";

function App() {
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
          <Read />
        </div>
      </div>
    </>
  );
}

export default App;
