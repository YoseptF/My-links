import { FC } from "react";
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.Header}>
      <img
        src="/me.jpeg"
        alt=""
        height={100}
        width={100}
        style={{ borderRadius: '50%' }}
      />
      <h1>Hi, I'm <span>Joseph Flores</span></h1>
    </header>
  );
}

export default Header;