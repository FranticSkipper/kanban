import { Toaster } from "react-hot-toast";
import "./App.css";
import Kanban from "./components/Kanban/Kanban";

function App() {
  return (
    <div>
      <Kanban />
      <Toaster />
    </div>
  );
}

export default App;
