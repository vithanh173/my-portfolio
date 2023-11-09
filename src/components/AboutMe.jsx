import React from 'react';
import clsx from 'clsx';
import styles from '../scss/styles.module.scss';

function AboutMe() {
    return (
        <section id="AboutMe" className={clsx(styles.about_section)}>
            <div>
                <img src="https://a.pinatafarm.com/1092x612/d47afa3656/coughing-cat-dcbc3e50b235f7aa3793bfa07959fb7a-meme.jpeg" alt="This is me" />
            </div>
            <div className={clsx(styles.container)}>
                <h1>About Me</h1>
                <div className={clsx(styles.infor_container)}>
                    <h3>2022-Current</h3>
                    <p>Do some mini personal project</p>
                </div>
                <div className={clsx(styles.infor_container)}>
                    <h3>2019-2022</h3>
                    <p>Do some mini personal project</p>
                    <p>Learned at Đại học Công Nghiệp Thực Phẩm TPHCM</p>
                </div>
            </div>
        </section >
    )
}

export default AboutMe
