import React from "react";

import { Section, Header, BarChart } from "../../components";
const Bar = () => {
  return (
    <Section>
      <Header category="Chart" title="Inflation Rate in Percentage" />
      <div className="w-full">
        <BarChart />
      </div>
    </Section>
  );
};

export default Bar;
