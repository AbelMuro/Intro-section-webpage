import React, {useState} from 'react';
import FeaturesDropdown from './FeaturesDropdown';
import CompanyDropdown from './CompanyDropdown';
import * as styles from './styles.module.css';
import {motion, AnimatePresence} from 'framer-motion';
import { overlayVariant, menuVariant } from './Variants/Variants';
import icons from '../icons';

function MobileNavBar() {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <nav className={styles.nav}>
                <img className={styles.nav_logo} src={icons['mobileLogo']} alt='mobile logo'/>
                <button className={styles.nav_menu} onClick={handleOpen}></button>
            </nav>   
            <AnimatePresence>
                {open && 
                <motion.div className={styles.overlay} initial='hide' animate='show' exit='exit' variants={overlayVariant}>
                    <motion.menu className={styles.menu} variants={menuVariant}>
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
                    </motion.menu>
                </motion.div> }                  
            </AnimatePresence>  

        </>

    )
}

export default MobileNavBar;