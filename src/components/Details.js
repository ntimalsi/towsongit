

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Details(props) {

    const [views, setViews] = useState(0);
    const [data, setData] = useState(null);

    useEffect(() => {
        let username = window.location.href.split("/").pop();
        if (!username) return;


        axios.get(`https://api.github.com/users/${username}`)
            .then(response => {
                setData(response.data);
            });


        let arr = JSON.parse(localStorage.getItem('views')) || [];
        let views = arr.find(k => k.id === username);
        if (!views) {
            setViews(1);
            arr.push({
                id: username,
                count: 1
            });
        }
        else {
            let count;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id === username) {
                    let t = arr[i].count;
                    arr[i].count = t + 1;
                    count = t + 1;
                }
            }

            setViews(count);
        }

        localStorage.setItem('views', JSON.stringify(arr));
    }, []);

    const renderUrl = url => {
        return <a href='{url}' target="_blank">{url}</a>
    }

    if (!data)
        return (<div className='row mt-30'><div>Loading...</div></div>);

    return (
        <>
            <div className='row mt-30'>
                <div className='col-4 text-start'>
                    <span className='display-6'>{data.login}</span>
                </div>
                <div className='col-4 text-center' style={{ paddingTop: 20 }}>
                    <span>{views} Views</span>
                </div>
                <div className='col-4 text-end' style={{ paddingTop: 20 }}>
                    <Link to="/">Go back</Link>
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3'>
                    Login
                </div>
                <div className='col-9'>
                    {data.login}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3'>
                    ID
                </div>
                <div className='col-9'>
                    {data.id}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3'>
                    Node ID
                </div>
                <div className='col-9'>
                    {data.node_id}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Avatar URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.avatar_url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Gravatar ID
                </div>
                <div className='col-9 text-start'>
                    {data.gravatar_id || "N/A"}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    HTML URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.html_url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Followers URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.followers_url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Following URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.following_url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Gists URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.gists_url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Starred URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.starred_url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Subscriptions URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.subscriptions_url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Organizations URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.organizations_url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Repo URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.repos_url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Events URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.events_url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Received Events URL
                </div>
                <div className='col-9 text-start'>
                    {renderUrl(data.received_events_url)}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Type
                </div>
                <div className='col-9 text-start'>
                    {data.type}
                </div>
            </div>
            <div className='row mt-10'>
                <div className='col-3 text-start'>
                    Admin
                </div>
                <div className='col-9 text-start'>
                    {data.site_admin ? "Yes" : "No"}
                </div>
            </div>
        </>
    );
}

export default Details;