import React, {Fragment} from 'react';
import {H6, P} from '../../../AbstractElements';
import {CreateAccount} from '../../../Constant';
import GoogleCus from './Google';

const SocialAuth = () => {
    return (
        <Fragment>
            <H6 attrH6={{ className: 'text-muted mt-4 or' }} >{'또는 간편 로그인'}</H6>
            <div className="social mt-4">
                <div className="btn-showcase">
                    <GoogleCus />
                </div>
            </div>
            <P attrPara={{ className: 'mt-4 mb-0' }} >{'아직 회원이 아니신가요?'}<a className="ms-2" href="#javascript">{CreateAccount}</a></P>
        </Fragment>
    );
};

export default SocialAuth;