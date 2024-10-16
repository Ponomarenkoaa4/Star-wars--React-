import UiVideo from "./UiVideo";
import video from "./video/han-solo.mp4";

export default {
  title: "Ui-Kit/UiVideo",
  component: UiVideo,
};

const props = {
  src: video,
  classes: "",
  playbackRate: 1.0,
};

export const Default = {
  args: {
    ...props,
  },
};
