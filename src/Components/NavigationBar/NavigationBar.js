import React from 'react';
import FeaturesDropdown from './FeaturesDropdown';
import * as styles from './styles.module.css';
import icons from './icons';

function NavigationBar() {
    return(
        <nav className={styles.nav}>
            <div className={styles.nav_links}>
                <img className={styles.nav_logo} src={icons['logo']}/>
                <ul>
                    <li>
                        <FeaturesDropdown/>
                    </li>
                    <li>
                        <a>Company</a>
                    </li>
                    <li>
                        <a>Careers</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                </ul>
            </div>
            <div className={styles.nav_buttons}>
                <button>
                    Login
                </button>
                <button>
                    Register
                </button>
            </div>  
        </nav>
    )
}

export default NavigationBar;