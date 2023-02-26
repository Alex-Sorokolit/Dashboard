import React from "react";
import { Section, Header, PieChart } from "../../components";
const Pie = () => {
  return (
    <Section>
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full">
        <PieChart />
      </div>
    </Section>
  );
};

export default Pie;
