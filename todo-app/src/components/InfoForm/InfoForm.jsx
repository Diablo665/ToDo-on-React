import styles from './InfoForm.module.css';
import getAdDate, { formatTime } from '../../utils/helper';
import { useState, useEffect } from 'react';

const InfoForm = ({text, addedTo, status}) => {
    
    const initialDate = new Date(addedTo);
    
    const [timeSinceAdded, setTimeSinceAdded] = useState(0);

    const calculateTime = () => {
        const now = Date.now();
        const diff = now - addedTo;
        setTimeSinceAdded(diff);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            calculateTime();
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const timer = formatTime(timeSinceAdded);
    return(
        <table className={styles.infoForm}>
            <tbody>
                <tr> 
                    <th>Текст:</th>
                    <td>{text}</td>
                </tr>
                <tr> 
                    <th>Добавлена:</th>
                    <td>{getAdDate(initialDate)}</td>
                </tr>
                <tr> 
                    <th>Время после добавления:</th>
                    <td>{timer}</td>
                </tr>
                <tr> 
                    <th>Статус:</th>
                    <td>{status ? 'Решена' : 'Не решена'}</td>
                </tr>
            </tbody>
        </table>
    )

}

export default InfoForm