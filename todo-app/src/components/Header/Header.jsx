import styles from './Header.module.css';
import ThemeButton from '../ThemeButton/ThemeButton';

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <ThemeButton />
    </header>
  );
};

export default Header;