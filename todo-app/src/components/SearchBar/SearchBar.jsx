import styles from './SearchBar.module.css'
import { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';

const SearchBar = ({tasks, setSearchTasks}) => {
    
    const [searchValue, setSearchValue] = useState('');
    const debouncedValue = useDebounce(searchValue, 300)

    const search = (value) => {
        const searchTasks = tasks.filter((task) => task['text'].toLowerCase().includes(value.toLowerCase()))
        if(searchTasks.length === 0){
            setSearchTasks([])
        }else{
            setSearchTasks(searchTasks)
        }
       
    }

    useEffect(() => {
        if (debouncedValue.trim()) {
            search(debouncedValue);
        }else{
            setSearchTasks([])
        }
    }, [debouncedValue]);

    return (
        <div className={styles.searchForm}> 
            <input className={styles.searchInput} type='text' placeholder="Поиск" onChange={(e) => setSearchValue(e.target.value)}/> 
        </div>
    )
}

export default SearchBar