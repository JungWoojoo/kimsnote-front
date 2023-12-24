import React, { Fragment } from 'react';

const EmpltyClass = ({ searchIcon, search }) => {
    return (
        <Fragment>
            <div className={`${search ? `Typeahead-menu empty-menu ${searchIcon ? 'is-open' : ''}` : `Typeahead-menu empty-bookmark ${searchIcon ? 'is-open' : ''}`} `}>
                <div className="tt-dataset tt-dataset-0">
                    <div className="EmptyMessage">
                        {'웁쓰!! 검색된 결과가 없습니다'}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EmpltyClass;