import { PieChart } from '@mantine/charts';
import { MantineDemo } from '../../mantine/demo';
import { data, dataCode } from './data/_pie-data';

const code = `
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`;

function Wrapper(props: any) {
  return <PieChart {...props} data={data} miw={300} />;
}

export const pieChartDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  centered: true,
  controls: [
      {
          type: 'segmented',
          prop: 'labelsPosition',
          initialValue: 'outside',
          libraryValue: '__',
          data: ['inside', 'outside'],
        },
        {
            type: 'segmented',
            prop: 'labelsType',
            initialValue: 'value',
            libraryValue: '__',
            data: ['value', 'percent'],
        },
        {
            type: 'number',
            prop: 'strokeWidth',
            initialValue: 1,
            min: 0,
            max: 2,
            step: 0.1,
            libraryValue: '__',
        },
        {
            type: 'number',
            prop: 'size',
            initialValue: 160,
            min: 80,
            max: 300,
            step: 1,
            libraryValue: '__',
        },
        { type: 'boolean', prop: 'withLabels', initialValue: true, libraryValue: '__' },
        { type: 'boolean', prop: 'withLabelsLine', initialValue: true, libraryValue: '__' },
  ],
};
