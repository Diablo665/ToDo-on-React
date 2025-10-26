import { useState } from 'react';
import styles from './TodoItem.module.css';
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaInfoCircle } from "react-icons/fa";
import EditForm from '../EditForm/EditForm';
import InfoForm from '../InfoForm/InfoForm';


const TodoItem = ({ task, onCheckboxChange, onDelete, onEdit}) => {

  const itemClass = task.completed ? styles.completed : styles.item;

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isInfoFormOpen, setisInfoFormOpen] = useState(false)

  return (
    <> 
    <div className={itemClass}>
      <input 
        type="checkbox" 
        className={styles.checkbox} 
        checked={task.completed}
        onChange={() => onCheckboxChange(task.id)}
      />
      <p className={styles.text}>{task.text}</p>

      <MdDeleteForever className={styles.deleteButton}onClick={() => onDelete(task.id)} />
      <CiEdit className={styles.editButton} onClick={() => setIsEditFormOpen(!isEditFormOpen)} />
      <FaInfoCircle className={styles.infoButton} onClick={() => setisInfoFormOpen(!isInfoFormOpen)}/>

    </div>

      {isInfoFormOpen && <InfoForm text={task.text} addedTo={task.addedTo} status={task.completed} />}
      {isEditFormOpen && <EditForm editId={task.id} onEdit={onEdit} />}
      
    </>
    
  );
};

export default TodoItem;