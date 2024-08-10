import React from 'react';
import * as styles from './styles.module.css';
import icons from '../icons';


//i need to finish the menu element
function MobileNavBar() {
    return(
        <>
            <nav className={styles.nav}>
                <img className={styles.nav_logo} src={icons['logo']}/>
                <button className={styles.nav_menu}></button>
            </nav>     
            <div className={styles.overlay}>
                <menu className={styles.menu}>
                    <button className={styles.menu_close}></button>
                </menu>
            </div>   
        </>

    )
}

export default MobileNavBar;