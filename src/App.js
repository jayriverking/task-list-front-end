import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {

  const [stacyState, setStacyState] = React.useState(TASKS)

  const deleteTask = (id) => {
    setStacyState(pastState => {
      const updatedState = pastState.filter(task => {
        task.id !== id
      })
      return deleteTask
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={stacyState} deleteTask={deleteTask}/></div>
      </main>
    </div>
  );
};

export default App;
