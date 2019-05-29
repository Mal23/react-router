import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <nav>
        <Link to="/red">Red</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/yellow">Yellow</Link>
      </nav>
    </header>
  );
}
