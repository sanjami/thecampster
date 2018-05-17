import React, { Component } from 'react';
import MessageComponent from '../../components/MessageComponent';

class Akcija extends Component {

    render() {
        let page=(this.props.location.pathname).slice(1);
        return (
            <div>
                <MessageComponent message={page}/>
            </div>
        )
    }
}

export default Akcija;