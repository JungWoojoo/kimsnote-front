import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import EditMyProfile from './EditmyProfile';
import MyProfileEdit from './MyProfile';

const UsersEditContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="프로필" parent="유저" title="프로필" />
            <Container fluid={true}>
                <div className="edit-profile">
                    <Row>
                        <Col xl="4">
                            <MyProfileEdit />
                        </Col>
                        <Col xl="8">
                            <EditMyProfile />
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
};
export default UsersEditContain;