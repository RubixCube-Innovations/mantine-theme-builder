import { ConfiguratorControlOptions } from "../components/mantine/demo";

export const STATIC_VARIANTS = ['filled', 'light', 'outline', 'transparent', 'white', 'default'];

export const INTERACTIVE_VARIANTS = [
  'default',
  'filled',
  'light',
  'outline',
  'subtle',
  'transparent',
  'white',
];

export const interactiveVariantsControl: ConfiguratorControlOptions = {
  type: 'select',
  prop: 'variant',
  data: INTERACTIVE_VARIANTS,
  initialValue: 'filled',
  libraryValue: 'filled',
};

export const staticVariantsControl: ConfiguratorControlOptions = {
  type: 'select',
  prop: 'variant',
  data: STATIC_VARIANTS,
  initialValue: '',
  libraryValue: '',
};
