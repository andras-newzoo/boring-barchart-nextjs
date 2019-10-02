import React, { useEffect } from "react";
import Router from "next/router";

const Index = () => {
  useEffect(() => {
    Router.push({
      pathname: "/visualisations"
    });
  }, []);

  return <div />;
};

export default Index;
