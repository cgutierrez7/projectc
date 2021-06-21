import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'

class Navbar extends React.Component {
  render() {
    return(
      <nav>
        <ul className={styles.listStyle}>
          <li className={styles.listLinkStyle}>
            <Link to={'/'}>Home</Link>  
          </li>
          <li className={styles.listLinkStyle}>
            <Link to={'/pages/friends'}>Friends</Link>
          </li>
        </ul>
    </nav>
    )
  }
}

export default Navbar;