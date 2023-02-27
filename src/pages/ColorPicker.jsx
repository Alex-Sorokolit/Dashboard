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
        <div className=" p-5 bg-white  drop-shadow-md rounded-lg w-max  inline-block">
          <div id="preview" />
        </div>
        <div className="flex justify-center items-center gap-20 flex-wrap overflow-hidden">
          <div className="flex flex-col justify-center align-baseline">
            <p className=" text-2xl font-semibold mt-2 mb-4 ">Inline Pallete</p>
            <div>
              <ColorPickerComponent
                id=" inline-palette"
                mode="Palette"
                modeSwitcher={false}
                inline
                showButtons={false}
                change={change}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center align-baseline">
              <p className="text-center text-2xl font-semibold mt-2 mb-4 ">
                Color Picker
              </p>
              <div>
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
        </div>
      </div>
    </Section>
  );
};

export default ColorPicker;
