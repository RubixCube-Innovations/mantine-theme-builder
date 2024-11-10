import { actionIconDemo } from "../components/components-demo/buttons/action-icon-demo";
import { buttonDemo } from "../components/components-demo/buttons/button-demo";
import { closeButtonDemo } from "../components/components-demo/buttons/close-button-demo";
import { autocompleteDemo } from "../components/components-demo/combobox/autocomplete-demo";
import { multiSelectDemo } from "../components/components-demo/combobox/multi-select-demo";
import { pillsInputDemo } from "../components/components-demo/combobox/pills-input-demo";
import { selectDemo } from "../components/components-demo/combobox/select-demo";
import { tagsInputDemo } from "../components/components-demo/combobox/tags-input-demo";
import { accordionDemo } from "../components/components-demo/data-display/accordion-demo";
import { avatarDemo } from "../components/components-demo/data-display/avatar-demo";
import { backgroundImageDemo } from "../components/components-demo/data-display/background-image-demo";
import { badgeDemo } from "../components/components-demo/data-display/badge-demo";
import { cardDemo } from "../components/components-demo/data-display/card-demo";
import { imageDemo } from "../components/components-demo/data-display/image-demo";
import { indicatorDemo } from "../components/components-demo/data-display/indicator-demo";
import { spoilerDemo } from "../components/components-demo/data-display/spoiler-demo";
import { themeIconDemo } from "../components/components-demo/data-display/theme-icon-demo";
import { timelineDemo } from "../components/components-demo/data-display/timeline-demo";
import { alertDemo } from "../components/components-demo/feedback/alert-demo";
import { loaderDemo } from "../components/components-demo/feedback/loader-demo";
import { notificationDemo } from "../components/components-demo/feedback/notification-demo";
import { progressDemo } from "../components/components-demo/feedback/progress-demo";
import { ringProgressDemo } from "../components/components-demo/feedback/ring-progress-demo";
import { semiCircleProgressDemo } from "../components/components-demo/feedback/semi-circle-progress-demo";
import { skeletonDemo } from "../components/components-demo/feedback/skeleton-demo";
import { checkboxDemo } from "../components/components-demo/inputs/checkbox-demo";
import { checkboxGroupDemo } from "../components/components-demo/inputs/checkbox-group-demo";
import { chipDemo } from "../components/components-demo/inputs/chip-demo";
import { colorInputDemo } from "../components/components-demo/inputs/color-input-demo";
import { fieldsetDemo } from "../components/components-demo/inputs/fieldset-demo";
import { fileInputDemo } from "../components/components-demo/inputs/file-input";
import { nativeSelectDemo } from "../components/components-demo/inputs/native-select-demo";
import { pinInputDemo } from "../components/components-demo/inputs/pin-input-demo";
import { radioDemo } from "../components/components-demo/inputs/radio-demo";
import { radioGroupDemo } from "../components/components-demo/inputs/radio-group-demo";
import { ratingDemo } from "../components/components-demo/inputs/rating-demo";
import { segmentedControlDemo } from "../components/components-demo/inputs/segmented-control-demo";
import { sliderDemo } from "../components/components-demo/inputs/slider-demo";
import { switchDemo } from "../components/components-demo/inputs/switch-demo";
import { switchGroupDemo } from "../components/components-demo/inputs/switch-group-demo";
import { textInputDemo } from "../components/components-demo/inputs/text-input-demo";
import { textareaDemo } from "../components/components-demo/inputs/textarea-demo";
import { anchorDemo } from "../components/components-demo/navigation/anchor-demo";
import { navLinkDemo } from "../components/components-demo/navigation/nav-link-demo";
import { paginationDemo } from "../components/components-demo/navigation/pagination-demo";
import { stepperDemo } from "../components/components-demo/navigation/stepper-demo";
import { tabsDemo } from "../components/components-demo/navigation/tabs-demo";

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
    initiallyOpened: false,
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
  {
    label: 'Combobox',
    initiallyOpened: false,
    links: [
      { label: 'Autocomplete', value: 'autocomplete', demo: autocompleteDemo },
      { label: 'Multiselect', value: 'multiselect', demo: multiSelectDemo },
      { label: 'Pills Input', value: 'pills-input', demo: pillsInputDemo },
      { label: 'Select', value: 'select', demo: selectDemo },
      { label: 'Tag Input', value: 'tag-input', demo: tagsInputDemo },
    ],
  },
  {
    label: 'Buttons',
    initiallyOpened: false,
    links: [
      { label: 'ActionIcon', value: 'action-icon', demo: actionIconDemo },
      { label: 'Button', value: 'button', demo: buttonDemo },
      { label: 'CloseButton', value: 'close-button', demo: closeButtonDemo },
    ],
  },
  {
    label: 'Navigation',
    initiallyOpened: true,
    links: [
      { label: 'Anchor', value: 'anchor', demo: anchorDemo },
      { label: 'NavLink', value: 'nav-link', demo: navLinkDemo },
      { label: 'Pagination', value: 'pagination', demo: paginationDemo },
      { label: 'Stepper', value: 'stepper', demo: stepperDemo },
      { label: 'Tabs', value: 'tabs', demo: tabsDemo },
    ],
  },
  {
    label: 'Feedback',
    initiallyOpened: true,
    links: [
      { label: 'Alert', value: 'alert', demo: alertDemo },
      { label: 'Loader', value: 'loader', demo: loaderDemo },
      { label: 'Notification', value: 'notification', demo: notificationDemo },
      { label: 'Progress', value: 'progress', demo: progressDemo },
      { label: 'RingProgress', value: 'ring-progress', demo: ringProgressDemo },
      { label: 'SemiCircleProgress', value: 'semi-circle-progress', demo: semiCircleProgressDemo },
      { label: 'Skeleton', value: 'skeleton', demo: skeletonDemo },
    ],
  },
  {
    label: 'Data Display',
    initiallyOpened: true,
    links: [
      { label: 'Accordion', value: 'accordion', demo: accordionDemo },
      { label: 'Avatar', value: 'avatar', demo: avatarDemo },
      { label: 'BackgroundImage', value: 'background-image', demo: backgroundImageDemo },
      { label: 'Badge', value: 'badge', demo: badgeDemo },
      { label: 'Card', value: 'card', demo: cardDemo },
      { label: 'ColorSwatch', value: 'color-swatch', demo: colorInputDemo },
      { label: 'Image', value: 'image', demo: imageDemo },
      { label: 'Indicator', value: 'indicator', demo: indicatorDemo },
      { label: 'Spoiler', value: 'spoiler', demo: spoilerDemo },
      { label: 'ThemeIcon', value: 'theme-icon', demo: themeIconDemo },
      { label: 'Timeline', value: 'timeline', demo: timelineDemo },
    ],
  },
];
