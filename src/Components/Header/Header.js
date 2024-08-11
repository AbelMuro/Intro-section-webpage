import React from 'react';
import icons from './icons'
import * as styles from './styles.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <section className={styles.header_content}>
                <h1>
                    Make remote work
                </h1>
                <p>
                    Get your team in sync, no matter your location. 
                    Streamline processes, create team rituals, 
                    and watch productivity soar.
                </p>
                <button>
                    Learn more
                </button>
            </section>
            <img className={styles.header_image}/>
            <ul className={styles.header_partners}>
                    <li>
                        <img className={styles.header_partner} src={icons['databiz']} alt='client data biz'/>
                    </li>
                    <li>
                        <img className={styles.header_partner} src={icons['audiophile']} alt='client audiophile'/>
                    </li>
                    <li>
                        <img className={styles.header_partner} src={icons['meet']} alt='client meet'/>
                    </li>
                    <li>
                        <img className={styles.header_partner} src={icons['maker']} alt='client maker'/>
                    </li>
                </ul>
        </header>
    )
}

export default Header;