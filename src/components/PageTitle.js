import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Rémi dubar -  Portfolio </title>
    </Helmet>
  );
};

export default PageTitle;
