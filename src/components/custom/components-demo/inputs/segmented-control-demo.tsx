import { SegmentedControl } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
`;

function Wrapper(props: any) {
  return <SegmentedControl data={['React', 'Angular', 'Vue']} {...props} />;
}

export const segmentedControlDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'orientation',
      type: 'segmented',
      initialValue: 'horizontal',
      libraryValue: 'horizontal',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
    },
    { prop: 'fullWidth', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'withItemsBorders', type: 'boolean', initialValue: true, libraryValue: true },
    { prop: 'color', type: 'color', initialValue: '', libraryValue: '' },
    { type: 'size', prop: 'size', initialValue: 'sm', libraryValue: 'sm' },
    { type: 'size', prop: 'radius', initialValue: 'sm', libraryValue: 'sm' },
    { prop: 'transitionDuration', type: 'string', initialValue: '150', libraryValue: '150' },
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'readOnly', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
