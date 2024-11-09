import { buttonDemoConfigurator } from "../components/demos/buttons/button-demo";
import { checkboxDemo } from "../components/demos/inputs/checkbox-demo";
import { checkboxGroupDemo } from "../components/demos/inputs/checkbox-group-demo";
import { chipDemo } from "../components/demos/inputs/chip-demo";
import { colorInputDemo } from "../components/demos/inputs/color-input-demo";
import { fieldsetDemo } from "../components/demos/inputs/fieldset-demo";
import { fileInputDemo } from "../components/demos/inputs/file-input";
import { nativeSelectDemo } from "../components/demos/inputs/native-select-demo";
import { pinInputDemo } from "../components/demos/inputs/pin-input-demo";
import { radioDemo } from "../components/demos/inputs/radio-demo";
import { radioGroupDemo } from "../components/demos/inputs/radio-group-demo";
import { ratingDemo } from "../components/demos/inputs/rating-demo";
import { segmentedControlDemo } from "../components/demos/inputs/segmented-control-demo";
import { sliderDemo } from "../components/demos/inputs/slider-demo";
import { switchDemo } from "../components/demos/inputs/switch-demo";
import { switchGroupDemo } from "../components/demos/inputs/switch-group-demo";
import { textInputDemo } from "../components/demos/inputs/text-input-demo";
import { textareaDemo } from "../components/demos/inputs/textarea-demo";

export const UserProfileData = {
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=996&t=st=1728098576~exp=1728099176~hmac=df28e3a938f97c400d3747f5e9845c98314ba949932d2e786a10d0876feebc75",
  name: "Mantine Dev",
  email: "mantine.dev99@gmail.com",
  job: "Struggling Software Engineer | Tech stack: Javascript, Typescript, React, Nextjs, Nodejs | UI/UX Designer",
};

export const skills = ["React", "Mantine", "Figma", "Bootstrap", "Typescript", "Sass/SCSS"];

export const ICON_SIZE = 16;

export const lineChartData = [
  {
    date: "Mar 22",
    Likability: 3,
  },
  {
    date: "Mar 23",
    Likability: 6,
  },
  {
    date: "Mar 24",
    Likability: 7,
  },
  {
    date: "Mar 25",
    Likability: 4,
  },
  {
    date: "Mar 26",
    Likability: 9,
  },
];

export const barChartData = [
  { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: "February", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
  { month: "April", Smartphones: 1000, Laptops: 200, Tablets: 800 },
  { month: "May", Smartphones: 800, Laptops: 1400, Tablets: 1200 },
  { month: "June", Smartphones: 750, Laptops: 600, Tablets: 1000 },
];

export const metricData = [
  { average: 400, today: 240 },
  { average: 300, today: 139 },
  { average: 200, today: 980 },
  { average: 278, today: 390 },
  { average: 189, today: 480 },
  { average: 239, today: 380 },
  { average: 349, today: 430 },
];

export const radiusMapping: { [key: string]: string } = {
  "0": "none",
  "0.375": "xs",
  "0.5": "sm",
  "0.75": "md",
  "1.0": "lg",
};

export const themeModalTabs = {
  createTheme: "createTheme",
  cssResolver: "cssResolver",
  // createStyle: "createStyle",
};

export const demoComponentsNavbarData = [
  {
    label: 'Inputs',
    initiallyOpened: true,
    links: [
      { label: 'Checkbox', value: 'checkbox', demo: checkboxDemo },
      { label: 'Checkbox Group', value: 'checkbox-group', demo: checkboxGroupDemo },
      { label: 'Chip', value: 'chip', demo: chipDemo },
      { label: 'ColorInput', value: 'color-input', demo: colorInputDemo },
      { label: 'Fieldset', value: 'fieldset', demo: fieldsetDemo },
      { label: 'FileInput', value: 'file-input', demo: fileInputDemo },
      { label: 'Native Select', value: 'native-select', demo: nativeSelectDemo },
      { label: 'PinInput', value: 'pin-input', demo: pinInputDemo },
      { label: 'Radio', value: 'radio', demo: radioDemo },
      { label: 'Radio Group', value: 'radio-group', demo: radioGroupDemo },
      { label: 'Rating', value: 'rating', demo: ratingDemo },
      { label: 'Segmented Control', value: 'segmented-control', demo: segmentedControlDemo },
      { label: 'Slider', value: 'slider', demo: sliderDemo },
      { label: 'Switch', value: 'switch', demo: switchDemo },
      { label: 'Switch Group', value: 'switch-group', demo: switchGroupDemo },
      { label: 'Textarea', value: 'textarea', demo: textareaDemo },
      { label: 'Text Input', value: 'text-input', demo: textInputDemo },
    ],
  },
  // {
  //   label: 'Combobox',
  //   initiallyOpened: true,
  //   links: [
  //     { label: 'Autocomplete', value: 'autocomplete', demo: null },
  //     { label: 'Multiselect', value: 'multiselect', demo: null },
  //     { label: 'Pills Input', value: 'pills-input', demo: null },
  //     { label: 'Select', value: 'select', demo: null },
  //     { label: 'Tag Input', value: 'tag-input', demo: null },
  //   ],
  // },
  {
    label: 'Buttons',
    initiallyOpened: true,
    links: [
      // { label: 'ActionIcon', value: 'action-icon' },
      { label: 'Button', value: 'button', demo: buttonDemoConfigurator },
      // { label: 'CloseButton', value: 'close-button' },
    ],
  },
];
