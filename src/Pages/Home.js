import React, { Fragment } from "react";
import Hero from "../Components/Home/Hero";
import Card from "../Components/Home/Card";
import Location from "../Components/Home/Location";
import SecurityServices from "../Components/Home/SecurityServices";
import WhyChoose from "../Components/WhyChoose";
import EmailComponent from "../Components/EmailComponent";
import OfferComponent from "../Components/OfferComponenet";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <WhyChoose />
      <EmailComponent />
      <OfferComponent />
      <Testimonials />
      <Card />
      <Location />
      <SecurityServices />
    </Fragment>
  );
};

export default Home;
