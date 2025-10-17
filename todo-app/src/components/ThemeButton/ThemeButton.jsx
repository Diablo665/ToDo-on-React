import styles from './ThemeButton.module.css';
import { MdSunny } from "react-icons/md";
import useLocalStorage from '../../hooks/useLocalStorage';

const ThemeButton = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'light');
    document.querySelector("HTML").setAttribute("data-theme", theme);
    
    return (
        <div className={styles.themeButton}> 
            <MdSunny onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
        </div>
    )
}

export default ThemeButton