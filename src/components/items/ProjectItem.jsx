import React from 'react'
import { BsGithub, BsFillEyeFill } from 'react-icons/bs';
import { clsx } from 'clsx'
import { v4 as uuidv4 } from 'uuid';
import styles from '/src/scss/styles.module.scss';

function ProjectItem({ data }) {
    return (
        <div className={clsx(styles.project_card)}
            key={data.id + uuidv4()}>
            <div className={clsx(styles.project_img)}>
                <img src={data.img} alt={data.name} />
                <div className={clsx(styles.project_btns)}>
                    <a href={data.github} className={clsx(styles.project_btn)}><BsGithub /></a>
                    <a href={data.preview} className={clsx(styles.project_btn)}><BsFillEyeFill /></a>
                </div>
            </div>
            <div className={clsx(styles.project_infor)}>
                <h3 className={clsx(styles.project_name)}>{data.name}</h3>
                <p className={clsx(styles.project_description)}>{data.description}</p>
                <div className={clsx(styles.project_tech)}>
                    {data.technologies.map(tech => {
                        return (
                            <span key={tech}>{tech}</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
