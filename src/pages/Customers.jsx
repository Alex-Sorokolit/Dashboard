import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  // Search,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Section, Header } from "../components";

const Customers = () => {
  return (
    <Section>
      <Header category="Page" title="Customers" />
      <GridComponent
        // id="gridcomp"
        dataSource={customersData}
        allowPaging
        toolbar={["Delete", "Search"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Sort, Filter, Edit, Toolbar]} />
      </GridComponent>
    </Section>
  );
};

export default Customers;
