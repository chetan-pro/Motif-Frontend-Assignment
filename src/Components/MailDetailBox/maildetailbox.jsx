import React from 'react';
import styles from './maildetailbox.module.css'

function Maildetailbox(props) {
    return (
        <div className={styles.detailBox} >
            <section className={styles.leftCol}>
                <div className={styles.avatar}>{props.emailDetail.from_name.charAt(0)}</div>
            </section>
            <section className={styles.rightCol}>
                <h1>{props.emailDetail.subject} {props.emailDetail.isFav ? '' : <button className={styles.favBtn} onClick={() => props.makeAsFavorite(props.emailDetail)}>Mark as favorite</button>}</h1>
                <h4>26/02/2022 10:30pm</h4>
                <span dangerouslySetInnerHTML={{ __html: `${props.emailDetail.body}` }}></span>
            </section>

        </div>
    )
}

export default Maildetailbox;