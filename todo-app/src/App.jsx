import './styles.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import useLocalStorage from './hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {

  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [searchTasks, setSearchTasks] = useState([])
  const handleCheckboxChange = (taskId) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  useEffect(() => {
    const activeTasks = tasks.filter(task => !task.completed);
    document.title = `ToDo list - ${activeTasks.length} активных задач`;
  }), [tasks]

  const generateTaskId = () => {
    return tasks.length > 0 
      ? Math.max(...tasks.map(task => task.id)) + 1 
      : 1;
  };

  const addTask = (newTask) => {
    const newID = generateTaskId();
    setTasks([...tasks, {id:newID, ...newTask, addedTo: Date.now()}]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const editTask = (id, newText) => {
    setTasks(prevTask => prevTask.map(task => {
      if(task.id === id){
        return {...task, text: newText}
      }
      return task
    }))
  }


  return (
    <div className="app">
      <Header title="My ToDo list" />
      <SearchBar tasks={tasks} setSearchTasks={setSearchTasks}/>
      <AddTaskForm onAdd={addTask}/>
      <TodoList 
        tasks={searchTasks.length > 0 ? searchTasks : tasks} 
        onCheckboxChange={handleCheckboxChange} 
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
};

export default App;