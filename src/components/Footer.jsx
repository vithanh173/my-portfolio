import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';
import clsx from 'clsx';
import styles from '../scss/styles.module.scss';

function Footer() {
    return (
        <section id="Contact" className={clsx(styles.contact_section)}>
            <h1>Contact</h1>
            <div className={clsx(styles.contact_container)}>
                <div>
                    <span>
                        <AiOutlineMail />
                        <h3>Email</h3>
                    </span>
                    <p>email@email.com</p>
                </div>
                <div>
                    <span>
                        <FiPhoneCall />
                        <h3>Phone</h3>
                    </span>
                    <p>(+84)123456789</p>
                </div>
                <div>
                    <span>
                        <CiLocationOn />
                        <h3>Address</h3>
                    </span>
                    <p>Viet Nam</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
