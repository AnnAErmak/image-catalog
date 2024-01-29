import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <NavLink  to="." end>Католог</NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink  to="favorites">Избранное</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu