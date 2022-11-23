import React, { useEffect, useState } from 'react';
import styles from './root.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmails, getEmailById } from '../Store/Actions/email.action';
import Header from './Header/header';
import Maildetailbox from './MailDetailBox/maildetailbox';
import Maillist from './MailList/maillist';
import ActionsTypes from '../Helpers/constant.helper';

function Root() {
    const [activeItem, setActiveItem] = useState(0);
    const dispatch = useDispatch();
    const emailReducer = useSelector((state) => state.emailReducer);
    useEffect(() => {
        dispatch(getAllEmails());
    }, [dispatch]);

    function changeActiveItem(id) {
        setActiveItem(id);
        dispatch({ type: ActionsTypes.UnSelectEmail, payload: null });
    }
    function getEmailDetail(emailObj) {
        if (emailObj.isSelected) {
            dispatch({ type: ActionsTypes.UnSelectEmail, payload: emailObj });
        } else {
            dispatch(getEmailById(emailObj));
        }
    }

    function makeAsFavorite(emailObj) {
        dispatch({ type: ActionsTypes.MarkAsFavorite, payload: emailObj });
    }

    function filterListPass(list, value) {
        switch (activeItem) {
            case 0:
                return list
            case 1:
                return list.filter((obj) => !obj.isReaded);
            case 2:
                return list.filter((obj) => obj.isReaded);
            case 3:
                return list.filter((obj) => obj.isFav);
            default:
                return list;
        }
    }

    return (
        <div >
            <Header setActiveItem={changeActiveItem} activeItem={activeItem} ></Header>
            <main className={styles.main}>
                <section className={styles.sectionOne}>
                    <Maillist emails={filterListPass(emailReducer.emails)} getEmailDetail={getEmailDetail} ></Maillist>
                </section>
                {emailReducer.emailDetail ? <section style={{ flex: 2 }}>
                    <Maildetailbox emailDetail={emailReducer.emailDetail} makeAsFavorite={makeAsFavorite}></Maildetailbox>
                </section> : null}
            </main>
        </div>

    )
}

export default Root;