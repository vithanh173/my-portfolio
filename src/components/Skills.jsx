import React from 'react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import dataSkill from '../data/dataSkill.json';
import SkillItem from './items/SkillItem';
import styles from '../scss/styles.module.scss';

function Skills() {
    return (
        <section id="Skills" className={clsx(styles.skills_section)}>
            <div className={clsx(styles.container)}>
                <h1 className="">
                    My skills
                </h1>
            </div>
            <div className={clsx(styles.skills_container)}>
                {dataSkill.skills.map((skill, index) => {
                    return (
                        <SkillItem key={uuidv4()}
                            data={{ ...skill }} />
                    )
                })}
            </div>
        </section>
    )
}

export default Skills
