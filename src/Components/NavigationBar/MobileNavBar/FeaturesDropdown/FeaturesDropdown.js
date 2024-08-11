import React from 'react';
import icons from './icons';
import {motion, useCycle} from 'framer-motion';
import * as styles from './styles.module.css';
import { dropdownVariant, linkVariant } from './Variants';

function FeaturesDropdown() {
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
                Features
                <img className={styles.arrow} style={open ? {transform: 'rotate(180deg)'} : {}}/>
            </a>
            <div className={styles.dropdown}>
                <motion.div variants={linkVariant} className={styles.links}>
                    <img className={styles.icon} src={icons['todo']}/>
                    <a>
                        Todo List
                    </a>                        
                </motion.div>
                <motion.div variants={linkVariant} className={styles.links}> 
                    <img className={styles.icon} src={icons['calendar']}/>
                    <a
                        variants={linkVariant}>
                            Calendar
                    </a>                    
                </motion.div>
                <motion.div variants={linkVariant} className={styles.links}>
                    <img className={styles.icon} src={icons['reminders']}/>
                    <a>
                        Reminders
                    </a>
                </motion.div>
                <motion.div variants={linkVariant} className={styles.links}>
                    <img className={styles.icon} src={icons['planning']}/>
                    <a>
                        Planning
                    </a>
                </motion.div>
            </div>
        </motion.div>
    )
}


export default FeaturesDropdown;