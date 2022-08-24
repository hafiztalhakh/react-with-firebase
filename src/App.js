import "./App.css";
import { app } from "./utils/firebaseConfig";
import SignUp from "./components/signup";
import SignIn from "./components/signin";

function App() {
  return (
    <>
      <div className="d-flex space-between">
        <div className="card auth-contianers">
          <SignUp />
        </div>
        <div className="card auth-contianers">
          <SignIn />
        </div>
      </div>
    </>
  );
}

export default App;
