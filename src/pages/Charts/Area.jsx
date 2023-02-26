import React from "react";
import { Section, Header, AreaChart } from "../../components";
const Area = () => {
  return (
    <Section>
      <Header category="Chart" title="Inflation Rate in Percentage" />
      <div className="w-full">
        <AreaChart />
      </div>
    </Section>
  );
};

export default Area;
