import { RingProgress, RingProgressProps, Text } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';

function Wrapper(props: RingProgressProps) {
  return (
    <RingProgress
      {...props}
      label={
        <Text size="xs" ta="center" px="xs" style={{ pointerEvents: 'none' }}>
          Hover sections to see tooltips
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan', tooltip: 'Documents – 40 Gb' },
        { value: 25, color: 'orange', tooltip: 'Apps – 25 Gb' },
        { value: 15, color: 'grape', tooltip: 'Other – 15 Gb' },
      ]}
    />
  );
}

const code = `
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      {{props}}
      label={
        <Text size="xs" ta="center" px="xs" style={{ pointerEvents: 'none' }}>
          Hover sections to see tooltips
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan', tooltip: 'Documents – 40 Gb' },
        { value: 25, color: 'orange', tooltip: 'Apps – 25 Gb' },
        { value: 15, color: 'grape', tooltip: 'Other – 15 Gb' },
      ]}
    />
  )
}
`;

export const ringProgressDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  centered: true,
  code,
  controls: [
    {
      prop: 'size',
      type: 'number',
      initialValue: 180,
      step: 10,
      min: 60,
      max: 400,
      libraryValue: '__',
    },
    {
      prop: 'thickness',
      type: 'number',
      initialValue: 12,
      step: 1,
      min: 1,
      max: 40,
      libraryValue: '__',
    },
    { prop: 'roundCaps', type: 'boolean', initialValue: true, libraryValue: false },
  ],
};
