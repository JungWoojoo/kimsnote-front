import React from "react";
import { Col, Container, Row, Card, CardHeader, CardBody } from "reactstrap";
import { Breadcrumbs, H5, P } from "../../../AbstractElements";

const SamplePage = () => {
  return (
    <>
      <Breadcrumbs mainTitle="Sample Page" parent="General" title="Sample Page" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <H5>Sample Card</H5>
                <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
              </CardHeader>
              <CardBody>
                <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</P>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SamplePage;
