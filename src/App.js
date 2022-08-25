import "./App.css";
import Create from "./components/crud_operations/Create";
import { app } from "./utils/firebaseConfig";
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
    </>
  );
}

export default App;
