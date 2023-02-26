import React from "react";
import {
  HtmlEditor,
  Inject,
  Image,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Section, Header } from "../components";

const Editor = () => {
  return (
    <Section>
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </Section>
  );
};

export default Editor;
