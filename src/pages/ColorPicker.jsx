import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Section, Header } from "../components";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};
const ColorPicker = () => {
  return (
    <Section>
      <Header category="App" title="Colorpicker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 ">Inline Pallete</p>
            <ColorPickerComponent
              id=" inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 ">Color Picker</p>
            <ColorPickerComponent
              id=" inline-palette"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ColorPicker;
