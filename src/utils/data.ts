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
      { label: 'Checkbox', value: 'checkbox', isActive: false },
      { label: 'Chip', value: 'chip', isActive: false },
      { label: 'ColorInput', value: 'color-input', isActive: false },
      { label: 'ColorPicker', value: 'color-picker', isActive: false },
    ],
  },
  {
    label: 'Combobox',
    initiallyOpened: false,
    links: [
      { label: 'Autocomplete', value: 'autocomplete', isActive: false },
      { label: 'Combobox', value: 'combobox', isActive: false },
      { label: 'Multiselect', value: 'multiselect', isActive: false },
    ],
  },
  {
    label: 'Buttons',
    initiallyOpened: false,
    links: [
      { label: 'ActionIcon', value: 'action-icon', isActive: false },
      { label: 'Button', value: 'button', isActive: false },
      { label: 'CloseButton', value: 'close-button', isActive: false },
    ],
  },
];
