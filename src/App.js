import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Header />
      </div>
      <div className="outer">
        <div className="board"></div>
      </div>
    </div>
  );
}

export default App;
