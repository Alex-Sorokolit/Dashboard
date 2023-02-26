import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import {
  employeesData,
  employeesGrid,
  contextMenuItem,
  ordersGrid,
} from "../data/dummy";
import { Section, Header } from "../components";
import { pagingActions } from "@syncfusion/ej2/treegrid";

const Employees = () => {
  return (
    <Section>
      <Header category="Page" title="Employees" />
      <GridComponent
        // id="gridcomp"
        dataSource={employeesData}
        allowPaging
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Search,
            Resize,
            Sort,
            ContextMenu,
            Filter,
            ExcelExport,
            Edit,
            PdfExport,
            // Toolbar,
          ]}
        />
      </GridComponent>
    </Section>
  );
};

export default Employees;
