import React from 'react';
import styles from './header.module.css';

function Header(props) {
    let filterBy = [{ id: 0, tag: 'All' },{ id: 1, tag: 'Unread' }, { id: 2, tag: 'Read' }, { id: 3, tag: 'Favorites' }];
    return (
        <header className={styles.header}>
            <ul>
                <li>Filter By: </li>
                {filterBy.map((element) => {
                    return <li key={element.id} className={element.id === props.activeItem ? styles.activeListItem : ''} onClick={() => props.setActiveItem(element.id)}>{element.tag}</li>
                })}
            </ul>
        </header>
    )
}

export default Header;