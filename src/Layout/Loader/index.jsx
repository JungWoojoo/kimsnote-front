import React, { Fragment, useState, useEffect } from 'react';


const Loader = ({...props}) => {

    useEffect(() => {
        console.log(props.loading)
    }, [props.loading]);

    return (
        <Fragment>
            <div className={`loader-wrapper ${!props.loading? '' : 'loderhide'}`}>
                <div className="theme-loader">
                    <div className="loader-p"></div>
                </div>
            </div>
        </Fragment>
    );
};

export default Loader;