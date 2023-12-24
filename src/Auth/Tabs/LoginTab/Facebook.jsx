import React, { Fragment, useState, useEffect } from "react";
import { Facebook } from "react-feather";
import { Btn } from "../../../AbstractElements";
import { useNavigate } from "react-router-dom";

import man from "../../../assets/images/dashboard/1.png";

const FacebookCus = () => {
  const history = useNavigate();
  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", value);
    localStorage.setItem("Name", name);
  }, [value, name]);

  const facebookAuth = async () => {
    history(`${process.env.PUBLIC_URL}/dashboard/default`);
  };
  return (
    <Fragment>
      <Btn attrBtn={{ color: "light", onClick: facebookAuth }}>
        <Facebook className="txt-fb" />
      </Btn>
    </Fragment>
  );
};

export default FacebookCus;
