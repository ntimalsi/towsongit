
import { useEffect, useState } from 'react';

function User(props) {
    return (
        <div className="card mb-2">
            <div className='row' style={{padding: 12}}>
                <div className='col-6'>
                    <span>{props.data.login}</span>
                </div>
                <div className='col-6'>
                    <span>{props.data.id}</span>
                </div>
            </div>
        </div>
    );
}

export default User;