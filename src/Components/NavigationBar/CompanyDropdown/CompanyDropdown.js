import React, {useState} from 'react';
import { dropdownVariant } from './Variants';
import * as styles from './styles.module.css';
import {motion, AnimatePresence} from 'framer-motion';

function CompanyDropdown() {
    const [open, setOpen] = useState(false);
    

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <div className={styles.container} onClick={handleOpen}>
            <a className={styles.company}>
                Company
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
                        <a>
                            History
                        </a>
                        <a>
                            Our Team
                        </a>
                        <a>
                            Blog
                        </a>
                    </motion.div> 
                }                     
            </AnimatePresence>
        </div> 
    )
}

export default CompanyDropdown;