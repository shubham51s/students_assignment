import { StudentProvider } from "./context/studentsdata";
import HomePage from "./pages";
import "./index.css";

function App() {
  return (
    <StudentProvider>
      <HomePage />
    </StudentProvider>
  );
}

export default App;
