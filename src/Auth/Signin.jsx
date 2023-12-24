import React, { Fragment, useState, useEffect } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, P } from "../AbstractElements";
import { EmailAddress, ForgotPassword, Password, RememberPassword } from "../Constant";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import man from "../assets/images/dashboard/1.png";
import SocialAuth from "./Tabs/LoginTab/SocialAuth";

const Login = ({ selected }) => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const [loading, setLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", value);
    localStorage.setItem("Name", name);
  }, [value, name]);

  const loginAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setValue(man);
    setName("Emay Walter");
    setEmail("test@gmail.com");
    setPassword("test123");
    if (email === "test@gmail.com" && password === "test123") {
      localStorage.setItem("login", true);
      window.location.href = `${process.env.PUBLIC_URL}/general/sample_page`;
      setLoading(false);
    } else {
      toast.error("Incorrect Password or Username!");
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="p-0 container-fluid">
        <Row>
          <Col className="col-12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form">
                  <H4>Sign </H4>
                  <P>{"Enter your email & password to login"}</P>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input className="form-control" type="email" required="" onChange={(e) => setEmail(e.target.value)} defaultValue={email} />
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label className="col-form-label">{Password}</Label>
                    <Input className="form-control" type={togglePassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} defaultValue={password} required="" />
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
                    <Btn attrBtn={{ color: "primary", className: "btn-block", disabled: loading ? loading : loading, onClick: (e) => loginAuth(e) }}>Login</Btn>
                  </div>
                  <SocialAuth />
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Login;
