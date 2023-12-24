import {Breadcrumbs} from "../../../AbstractElements";
import {Container, Row} from "reactstrap";
import EarningsCard from "./EarningsCard";
import ClockCard from "./ClockCard";
import WeatherCard from "./WeatherCard";
import TestimonialCard from "./TestimonialCard";
import RecentActivityCard from "./RecentActivityCard";
import CustomCard from "./CustomeCard";
import React, {Fragment} from "react";
import DatewidgetCard from "./DateWidgetsCard";

const Dashboard = () => {
  return (
      <Fragment>
        <Breadcrumbs mainTitle="General Widget" parent="Widgets" title="General" />
        <Container fluid={true} className="general-widget">
          <Row>
            <EarningsCard />
            <DatewidgetCard />
            <ClockCard />
            <WeatherCard />
            <TestimonialCard />
            <RecentActivityCard />
            <CustomCard />
          </Row>
        </Container>
      </Fragment>
  );
};

export default Dashboard;
