import React, { useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import FadeInComponent from "./FadeInComponent";
import imageLogos from "../img/imageLogos";

const FullSummary = ({ companies, reviews, people }) => {
  const [currentCompany, setCurrentCompany] = React.useState(companies[0].name);
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [showGraph, setShowGraph] = React.useState(7);
  // setShowGraph(7);

  console.log(currentCompany);

  useEffect(() => setTimeout(() => window.dostuff(), 1000), []);

  setTimeout(() => {
    setShowSidebar(true);
  }, 500);

  // setTimeout(() => {
  //   setShowGraph(showGraph + 1)
  // }, 200);

  return (
    <div className="container">
      <FadeInComponent className="company-selector" showComponent={showSidebar}>
        <ButtonGroup vertical className="company-button-group">
          {companies.map((company) => {
            const companyName = company.name;
            const imageKey = companyName.toLowerCase();
            return (
              <Button
                key={companyName}
                onClick={() => setCurrentCompany(companyName)}
              >
                <img
                  className="selector-logo"
                  src={imageLogos[imageKey]}
                  alt={`${companyName} logo`}
                />
              </Button>
            );
          })}
        </ButtonGroup>
      </FadeInComponent>
      <FadeInComponent className="card-container" showComponent={!!showGraph}>
        <div className="chart-container">
          <div className="chart-row">
            <FadeInComponent showComponent={showGraph > 1}>
              <div id="a" className="chart"></div>
            </FadeInComponent>
            <FadeInComponent showComponent={showGraph > 2}>
              <div id="b" className="chart"></div>
            </FadeInComponent>
            <FadeInComponent showComponent={showGraph > 3}>
              <div id="c" className="chart"></div>
            </FadeInComponent>
          </div>
          <div className="chart-row">
            <FadeInComponent showComponent={showGraph > 4}>
              <div id="d" className="chart"></div>
            </FadeInComponent>
            <FadeInComponent showComponent={showGraph > 5}>
              <div id="e" className="chart"></div>
            </FadeInComponent>
            <FadeInComponent showComponent={showGraph > 6}>
              <div id="f" className="chart"></div>
            </FadeInComponent>
          </div>
        </div>
      </FadeInComponent>
    </div>
  );
};

export default FullSummary;
