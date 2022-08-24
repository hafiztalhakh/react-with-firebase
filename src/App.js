import "./App.css";
import { app } from "./utils/firebaseConfig";
import SignUp from "./components/signup";

function App() {
  return (
    <>
      <div className="d-flex">
        <div className="card">
          <SignUp />
        </div>
      </div>
    </>
  );
}

export default App;
