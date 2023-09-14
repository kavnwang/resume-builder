import React from "react";
import {useState} from 'react';
import styles from './styles/Display.module.css';
const Display = ({data}) => {


    return(
        
        <div id="resume" className={styles.displayWrapper}>
            <div className={styles.header}>
            <h1 className={styles.name}>
                {data.name}
            </h1>
            <div className={styles.heroInfo}>
            <p className={styles.email}>
                {data.email}
            </p>
            <p className={styles.phone}>
                {data.phone}
            </p>
            <p className={styles.address}>
                {data.address}
            </p>


            </div>
            </div>
            <div className={styles.body}>
            {data.array && data.array.map((field) => {
                if(field.section) {
                    return <div className={styles.section}><h2 className={styles.sectionTitle}>{field.title}</h2></div>
                } else {
                    return <div className={styles.experience}>
                        <div className={styles.experienceLeft}>
                        <p>{field.date}</p>
                        <p>{field.hours}</p>
                        </div>
                        <div className={styles.experienceRight}>
                        <h3 className={styles.experienceTitle}>{field.title}</h3>
                        <p className={styles.experienceDescription}>{field.description}</p>
                        </div>

                    </div>
                }
            })} 
            </div>

        </div>
    )
}

export default Display;
