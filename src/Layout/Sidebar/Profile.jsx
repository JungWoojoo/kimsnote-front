import React, {Fragment, useEffect, useState} from 'react';
import {Settings} from 'react-feather';
import {Link} from 'react-router-dom';
import {H6, Image, P} from '../../AbstractElements';
import man from '../../assets/images/dashboard/1.png';

const Profile = () => {
    const authenticated = JSON.parse(localStorage.getItem('authenticated'));
    const auth0_profile = JSON.parse(localStorage.getItem('auth0_profile'));
    const [profile, setProfile] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setProfile(localStorage.getItem('profileURL') || man);
        setName(localStorage.getItem('Name'));
    }, [setProfile, setName]);

    return (
        <Fragment>
            <div className="sidebar-user text-center">
                <a className="setting-primary" href="#javascript">
                    <Settings />
                </a>
                <Link to={`${process.env.PUBLIC_URL}/profile/userEdit`}>
                    <Image attrImage={{ className: 'img-90 rounded-circle', src: authenticated ? auth0_profile.picture : profile, alt: '' }} />
                    <div className="badge-bottom">
                        <div className="badge badge-success">New
                        </div>
                    </div>
                    <H6 attrH6={{ className: 'mt-3 f-14 f-w-600' }} >{authenticated ? auth0_profile.name : name}</H6>
                </Link>
                <P attrPara={{ className: 'mb-0 font-roboto' }} >lenis0508@naver.com</P>
            </div>
        </Fragment >
    );
};

export default Profile;