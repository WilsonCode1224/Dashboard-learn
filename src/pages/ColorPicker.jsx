// '@syncfusion/ej2-react-inputs'
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
// Header
import { Header } from "../components";

const ColorPicker = () => {
  const change = (args) => {
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="ColorPicker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              inline
              mode="Palette"
              modeSwitcher={false}
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              inline
              mode="Picker"
              modeSwitcher={false}
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
