import './styles.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import { useState } from 'react';



const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Изучить React', completed: false },
    { id: 2, text: 'Создать макет ToDo листа', completed: true },
    { id: 3, text: 'Закрепить знания', completed: false },
    { id: 4, text: 'Пьём кофе с печеньками и радуемся выполнению)', completed: false }
  ]);

  const handleCheckboxChange = (taskId) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div className="app">
      <Header title="My ToDo list" />
      <AddTaskForm />
      <TodoList 
        tasks={tasks} 
        onCheckboxChange={handleCheckboxChange} 
      />
    </div>
  );
};

export default App;