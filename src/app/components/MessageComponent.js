import T from 'i18n-react';
import React from 'react';;

const MessageComponent = (props) => {
    return (
                <div id="msg">
                    <T.p text='You are on page:'/>
                    <p>{props.message}</p>  
                </div>
    )
}

export default MessageComponent;