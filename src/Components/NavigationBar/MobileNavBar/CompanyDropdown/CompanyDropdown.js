import React from 'react';
import {motion, useCycle} from 'framer-motion';
import * as styles from './styles.module.css';
import { dropdownVariant, linkVariant } from './Variants';

function CompanyDropdown() {
    const [open, toggleOpen] = useCycle(false, true);

    const handleOpen = () => {
        toggleOpen();
    }

    return(
        <motion.div 
            className={styles.container}
            initial={false}
            animate={open ? 'show' : 'hide'}
            variants={dropdownVariant}
            transition={{staggerChildren: 0.2}}
            >
            <a className={styles.features} onClick={handleOpen}>
                Company
                <img className={styles.arrow} style={open ? {transform: 'rotate(180deg)'} : {}}/>
            </a>
            <div className={styles.dropdown}>
                <motion.a variants={linkVariant}>
                    History
                </motion.a>                        
                <motion.a variants={linkVariant}>
                    Our Team
                </motion.a>                    
                <motion.a variants={linkVariant}>
                    Blog
                </motion.a>
            </div>
        </motion.div>
    )
}

export default CompanyDropdown;