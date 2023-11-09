import React from 'react';
import clsx from 'clsx';
import styles from '/src/scss/styles.module.scss';

function SkillItem({ data }) {
    return (
        <div className={clsx(styles.skill_card)}>
            <div>
                <img src={data.img} alt={data.title} />
            </div>
            <p>{data.title}</p>
        </div>
    )
}

export default SkillItem
