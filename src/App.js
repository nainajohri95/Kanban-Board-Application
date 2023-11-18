import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Boarder/Board";
import Header from "./components/Header/Header";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //fetching the data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        setTasks(data.tasks || []); // Make sure data.tasks is defined, or default to an empty array
      } catch (error) {
        console.log("error while fetching the data", error);
      }
    };
    fetchData();
  }, []); //[] indicates that effect runs once after the initial render

  return (
    <div className="app">
      <div className="navbar">
        <Header />
      </div>
      <div className="outer">
        <div className="boards">
          {tasks.map((task) => (
            <Board key={task.id} task={task} />
          ))}
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
