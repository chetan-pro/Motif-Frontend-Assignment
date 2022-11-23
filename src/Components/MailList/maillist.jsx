import React from 'react';
import Card from '../Card/card';

function Maillist(props) {
    return (<>
        {props.emails.map((emailElement) => {
            return <Card emailElement={emailElement} key={emailElement.id} getEmailDetail={props.getEmailDetail} />
        })}
    </>
    )
}

export default Maillist;