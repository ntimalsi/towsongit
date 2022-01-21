
import { useEffect, useState } from 'react';
import User from './User';
import { Navigate } from 'react-router-dom'

function Users({ users }) {

    const [redirectTo, setRedirectTo] = useState(null);

    const renderUsers = () => {
        if (users.length === 0) {
            return <div>No data found.</div>
        }

        return users.map(k => <div onClick={() => onShowDetails(k)} key={k.diameter}><User data={k} /></div>);
    }

    const onShowDetails = data => {
        setRedirectTo(`/details/${data.login}`)
    }

    return (
        <>
            {redirectTo && <Navigate push to={redirectTo} />}
            <div className='row mt-30'>
                <div className='col'>
                    <span className='display-4'>Github Users</span>
                </div>
            </div>
            <div className='row mt-30'>
                <div className='col'>
                    {renderUsers()}
                </div>
            </div>
        </>
    );
}

export default Users;