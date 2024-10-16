import UiLoading from "./UiLoading";

export default {
  title: "Ui-Kit/UiLoading",
  component: UiLoading,
};

const props = {
  isShadow: true,
  classes: "",
};

export const Loading = {
  args: {
    ...props,
  },
};
