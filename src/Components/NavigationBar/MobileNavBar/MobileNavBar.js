import React, {useState} from 'react';
import FeaturesDropdown from './FeaturesDropdown';
import CompanyDropdown from './CompanyDropdown';
import * as styles from './styles.module.css';
import {motion} from 'framer-motion';
import icons from '../icons';

//implement framer-motion here to initiate an animation for the overlay and menu bar

function MobileNavBar() {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <nav className={styles.nav}>
                <img className={styles.nav_logo} src={icons['logo']}/>
                <button className={styles.nav_menu} onClick={handleOpen}></button>
            </nav>     
            {open && <div className={styles.overlay}>
                <menu className={styles.menu}>
                    <button className={styles.menu_close} onClick={handleOpen}></button>
                    <div className={styles.menu_links}>
                        <FeaturesDropdown/>
                        <CompanyDropdown/>
                        <a>
                            Careers
                        </a>
                        <a>
                            About
                        </a>
                    </div>
                    <div className={styles.menu_buttons}>
                        <button>
                            Login
                        </button>
                        <button>
                            Register
                        </button>
                    </div>
                </menu>
            </div> }  
        </>

    )
}

export default MobileNavBar;