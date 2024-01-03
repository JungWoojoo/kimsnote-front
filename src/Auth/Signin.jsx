import React, {Fragment, useEffect, useState} from "react";
import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {Btn, H4, P} from "../AbstractElements";
import {EmailAddress, ForgotPassword, Password, RememberPassword} from "../Constant";
import man from "../assets/images/dashboard/1.png";
import SocialAuth from "./Tabs/LoginTab/SocialAuth";
import {signIn} from "../api/login/signin";
import {toast} from "react-toastify";

const Login = ({ selected }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  // const history = useNavigate();

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
    const param = {
      email: email,
      password: password
    }
    console.log(param)

    let response = await signIn(param);
    console.log(response)
    if(response.data.status === "success"){
        localStorage.setItem("member", true);
        window.location.href = `${process.env.PUBLIC_URL}/dashboard/default`;
        setLoading(false);
    } else {
      console.log(response.data.exception.errorMessage)
      toast.error(response.data.exception.errorMessage);
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
                  <H4> {"로그인"} </H4>
                  <P> {"이메일과 비밀번호를 입력해 주세요"} </P>
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
