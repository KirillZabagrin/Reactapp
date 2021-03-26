import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/messages' activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/musik' activeClassName={s.activeLink}>Musik</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='settings' activeClassName={s.activeLink}>Settings</NavLink> <i class="fi-rr-align-right"></i>
        </div>
      </nav>
    )
}
export default Navbar;