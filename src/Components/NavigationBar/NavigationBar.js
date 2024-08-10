import React from 'react';
import FeaturesDropdown from './FeaturesDropdown';
import CompanyDropdown from './CompanyDropdown';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import MobileNavBar from './MobileNavBar';
import * as styles from './styles.module.css';
import icons from './icons';

function NavigationBar() {
    const [mobile] = useMediaQuery('(max-width: 650px)');

    return mobile ? <MobileNavBar/> : 
        <nav className={styles.nav}>
            <div className={styles.nav_links}>
                <img className={styles.nav_logo} src={icons['logo']}/>
                <ul>
                    <li>
                        <FeaturesDropdown/>
                    </li>
                    <li>
                        <CompanyDropdown/>
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
}

export default NavigationBar;