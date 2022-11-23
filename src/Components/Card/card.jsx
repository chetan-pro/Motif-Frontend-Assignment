import React from 'react';
import styles from './card.module.css';

function Card(props) {

    return (
        <div className={styles.card} id={props.emailElement.isSelected ? styles.activeCard : ''} style={{ backgroundColor: props.emailElement.isReaded ? '#ffffff' : '#f2f2f2' }} onClick={() => props.getEmailDetail(props.emailElement)}>
            <section className={styles.leftCol}>
                <div className={styles.avatar}>{props.emailElement.from_name.charAt(0)}</div>
            </section>
            <section className={styles.rightCol}>
                <h4>From : <span>{props.emailElement.from_name} {`<${props.emailElement.from_email}>`}</span></h4>
                <h4>Subject : <span> {props.emailElement.subject}</span></h4>
                <h4>{props.emailElement.short_description}</h4>
                <h4>26/02/2020 10:30pm  {props.emailElement.isFav ? <span className={styles.fav}>Favorite</span > : ''}</h4>
            </section>

        </div>
    )
}

export default Card;