import React, { useState } from "react";
import styles from './EditForm.module.css';


const EditForm = ({editId, onEdit}) => {

    const [newText, setNewText] = useState('')

    return (
        <form className={styles.editForm}> 
            <label htmlFor="editText">Текст задачи: </label>
            <input placeholder="Новый текст задачи" id='editText' onChange={(elem) => setNewText(elem.target.value)}></input>
            <button onClick={() => newText.trim() && onEdit(editId, newText)}> Сохранить изменения </button>
        </form>

    )
}

export default EditForm;