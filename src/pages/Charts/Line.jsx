import React from "react";
import { Section, Header, LineChart } from "../../components";
const Line = () => {
  return (
    <Section>
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </Section>
  );
};

export default Line;
