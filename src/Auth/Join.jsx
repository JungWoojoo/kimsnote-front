import React, {Fragment, useState} from 'react';
import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {Btn, H4, P} from "../AbstractElements";
import {ConfirmPassword, EmailAddress, ForgotPassword, Password, RememberPassword} from "../Constant";
import SocialAuth from "./Tabs/LoginTab/SocialAuth";

const Join = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <Fragment>
            <div className="p-0 container-fluid">
                <Row>
                    <Col className="col-12">
                        <div className="login-card">
                            <div className="login-main login-tab">
                                <Form className="theme-form">
                                    <H4> {"회원가입"} </H4>
                                    <P> {"CEPO에 가입해 보세요"} </P>
                                    <FormGroup>
                                        <Label className="col-form-label">{EmailAddress}</Label>
                                        <Input className="form-control" type="email" required=""
                                               onChange={(e) => setEmail(e.target.value)} defaultValue={email} />
                                    </FormGroup>
                                    <FormGroup className="position-relative">
                                        <Label className="col-form-label">{Password}</Label>
                                        <Input className="form-control" type={togglePassword ? "text" : "password"}
                                               onChange={(e) => setPassword(e.target.value)} defaultValue={password} required="" />
                                        <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}>
                                            <span className={togglePassword ? "" : "show"}></span>
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="position-relative">
                                        <Label className="col-form-label">{ConfirmPassword}</Label>
                                        <Input className="form-control" type={togglePassword ? "text" : "password"}
                                               onChange={(e) => setConfirmPassword(e.target.value)} defaultValue={password} required="" />
                                        <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}>
                                            <span className={togglePassword ? "" : "show"}></span>
                                        </div>
                                    </FormGroup>


                                    <div className="form-group mb-0">
                                        <div className="checkbox ms-3">
                                            <Input id="checkbox1" type="checkbox" />
                                            <Label className="text-muted" for="checkbox1">
                                                {RememberPassword}
                                            </Label>
                                        </div>
                                        <a className="link" href="#javascript">
                                            {ForgotPassword}
                                        </a>
                                        <Btn attrBtn={{ color: "primary", className: "btn-block", disabled: loading ? loading : loading, onClick: (e) => loginAuth(e) }}> {"로그인"} </Btn>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Join;