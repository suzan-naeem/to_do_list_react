
// importing components
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";

// importing css
import "./css/style.css";
function App() {
  return (
    <div className="App">
      <TodoHeader />
      <TodoForm />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
