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
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItem, ordersGrid } from "../data/dummy";
import { Section, Header } from "../components";
import { pagingActions } from "@syncfusion/ej2/treegrid";

const Orders = () => {
  return (
    <Section>
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Resize,
            Sort,
            ContextMenu,
            Filter,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </Section>
  );
};

export default Orders;
