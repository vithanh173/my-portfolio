import React from 'react';
import clsx from 'clsx';
import styles from '../scss/styles.module.scss';

function HeroSection() {
    return (
        <section id="HeroSection" className={clsx(styles.hero_section)}>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.content)}>
                    <p className={clsx(styles.title)}>Hi, I'm Châu Vĩ Thành</p>
                    <h1 className={clsx(styles.hero_section_title)}>Frontend Developer</h1>
                    <p className={clsx(styles.description)}>
                        I want to become a Fullstack Developer
                    </p>
                </div>
                <button className={clsx(styles.btn, styles.btn_primary)}>Get in touch</button>
            </div>
            <div className={clsx(styles.hero_section_img)}>
                <img src="https://www.newshub.co.nz/home/lifestyle/2019/08/the-top-five-cat-memes-of-all-time-rated/_jcr_content/par/video/image.dynimg.full.q75.jpg" alt="This is me" />
            </div>
        </section>
    )
}

export default HeroSection
