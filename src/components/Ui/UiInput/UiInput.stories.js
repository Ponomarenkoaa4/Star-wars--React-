import { useState } from "react";
import UiInput from "./UiInput";

export default {
  title: "Ui-Kit/UiInput",
  component: UiInput,
};

const Template = (args) => {
  const [value, setValue] = useState("");

  const handleInputChange = (value) => {
    setValue(value);
  };

  return (
    <UiInput {...args} value={value} handleInputChange={handleInputChange} />
  );
};

const props = {
  value: "",
  placeholder: "Placeholder",
  classes: "",
  handleInputChange: () => console.log("Input Change"),
};

export const Default = Template.bind({});
Default.args = {
  ...props,
};
