import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import clsx from 'clsx';
import styles from '../scss/styles.module.scss';

function Navbar() {

    const [navActive, setNavActive] = useState(true);


    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={clsx(styles.navbar, { [styles.active]: navActive })}>
            <div>
                <img src="https://my-awesome-react-project.netlify.app/img/logo.svg" alt="Logo" />
            </div>
            <div className={clsx(styles.nav_mobile)}
                onClick={toggleNav}>
                <span className={clsx(styles.nav_mobile_line, { [styles.active]: navActive })}></span>
            </div>
            <div className={clsx(styles.nav_items, { [styles.open]: navActive })}>
                <ul>
                    <li>
                        <Link
                            className={clsx(styles.nav_item)}
                            activeClass={clsx(styles.nav_item__active)}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="HeroSection"
                            onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link
                            className={clsx(styles.nav_item)}
                            activeClass={clsx(styles.nav_item__active)}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="AboutMe"
                            onClick={closeMenu}>Infor</Link>
                    </li>
                    <li>
                        <Link
                            className={clsx(styles.nav_item)}
                            activeClass={clsx(styles.nav_item__active)}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="Skills"
                            onClick={closeMenu}>Skills</Link>
                    </li>
                    <li>
                        <Link
                            className={clsx(styles.nav_item)}
                            activeClass={clsx(styles.nav_item__active)}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="Projects"
                            onClick={closeMenu}>Projects</Link>
                    </li>
                </ul>
            </div>
            <Link
                className={clsx(styles.btn, styles.btn_primary, styles.btn_contact)}
                activeClass={clsx(styles.nav_item__active)}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                onClick={closeMenu}>Contact</Link>
        </nav>
    )
}

export default Navbar
