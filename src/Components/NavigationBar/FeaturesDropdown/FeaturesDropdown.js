import React, {useState} from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

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
                {open && <div className={styles.dropdown}>
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
                </div> }                 
            </div>     
    )
} 

export default FeaturesDropdown;