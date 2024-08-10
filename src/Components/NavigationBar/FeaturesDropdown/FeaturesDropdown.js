import React, {useState} from 'react';
import icons from './icons';
import * as styles from './styles.module.css';
import {motion, AnimatePresence} from 'framer-motion';
import { dropdownVariant } from './Variants';

//i need to implement framer-motion to add initial animation and exit animation to the dropdown

function FeaturesDropdown() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
            <div className={styles.container} onClick={handleOpen}>
                <a className={styles.features}>
                    Features 
                </a>     
                <div className={styles.arrow} style={open ? {transform: 'rotate(180deg)'} : {}}/>    
                <AnimatePresence>
                    {open && 
                        <motion.div 
                            className={styles.dropdown}
                            initial='hidden'
                            animate='show'
                            exit='exit'
                            variants={dropdownVariant}
                            >
                            <img className={styles.icon} src={icons['todo']}/>
                            <a>
                                Todo List
                            </a>
                            <img className={styles.icon} src={icons['calendar']}/>
                            <a>
                                Calendar
                            </a>
                            <img className={styles.icon} src={icons['reminders']}/>
                            <a>
                                Reminders
                            </a>
                            <img className={styles.icon} src={icons['planning']}/>
                            <a>
                                Planning
                            </a>
                        </motion.div> 
                    }                     
                </AnimatePresence>
            </div>     
    )
} 

export default FeaturesDropdown;