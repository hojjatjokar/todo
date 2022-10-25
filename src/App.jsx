import { useGetTodos } from "./http";
import './App.css';

function App() {
  const { data, error, isLoading } = useGetTodos();

  return (
    <div className="app">
      Header

      <div className="grid">
        sortedTodos
      </div>
      
    </div>
  );
}

export default App;
