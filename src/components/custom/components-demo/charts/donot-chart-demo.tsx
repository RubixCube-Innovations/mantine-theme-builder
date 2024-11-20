import { DonutChart } from '@mantine/charts';
import { MantineDemo } from '../../../mantine/demo';
import { data, dataCode } from './data/_donut-data';

const code = `
import { DonutChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <DonutChart{{props}} data={data} />;
}
`;

function Wrapper(props: any) {
  return <DonutChart {...props} data={data} mih={300} />;
}

export const donutChartDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  centered: true,
  controls: [
      { type: 'color', prop: 'color', initialValue: 'blue', libraryValue: '__' },
    {
      type: 'number',
      prop: 'size',
      initialValue: 160,
      min: 80,
      max: 300,
      step: 1,
      libraryValue: '__',
    },
    {
      type: 'number',
      prop: 'thickness',
      initialValue: 20,
      min: 2,
      max: 30,
      step: 1,
      libraryValue: '__',
    },
    {
        type: 'number',
        prop: 'paddingAngle',
        initialValue: 10,
        min: 0,
        max: 30,
        step: 1,
        libraryValue: '__',
      },
      {
        type: 'number',
        prop: 'strokeWidth',
        initialValue: 1,
        min: 0,
        max: 5,
        step: 0.1,
        libraryValue: '__',
      },
      { type: 'boolean', prop: 'withLabels', initialValue: true, libraryValue: '__' },
      { type: 'boolean', prop: 'withLabelsLine', initialValue: true, libraryValue: '__' }
  ],
};
