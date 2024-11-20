import { Accordion, AccordionProps } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';

const code = `
import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion{{props}} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`;

const groceries = [
    {
      emoji: '🍎',
      value: 'Apples',
      description:
        'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    },
    {
      emoji: '🍌',
      value: 'Bananas',
      description:
        'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
    },
    {
      emoji: '🥦',
      value: 'Broccoli',
      description:
        'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
    },
  ];

function Demo(props: AccordionProps) {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion {...props} defaultValue="Apples">
      {items}
    </Accordion>
  );
}

export const accordionDemo: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code,
  controls: [
    {
      prop: 'variant',
      type: 'select',
      initialValue: 'default',
      libraryValue: 'default',
      data: [
        { label: 'Default', value: 'default' },
        { label: 'Contained', value: 'contained' },
        { label: 'Filled', value: 'filled' },
        { label: 'Separated', value: 'separated' },
      ],
    },
    { prop: 'radius', type: 'size', libraryValue: 'sm', initialValue: 'sm' },
    {
      prop: 'chevronPosition',
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      initialValue: 'right',
      libraryValue: 'right',
    },
    { prop: 'disableChevronRotation', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
