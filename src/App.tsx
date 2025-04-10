import { Toaster } from "react-hot-toast";
import "./App.css";
import Kanban from "./widgets/kanban/kanban";

function App() {
  return (
    <div>
      <Kanban />
      <Toaster />
    </div>
  );
}

export default App;
