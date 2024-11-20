import { BubbleChart } from '@mantine/charts';
import { MantineDemo } from '../../mantine/demo';
import { data, dataCode } from './data/_bubble-data';

const code = `
import { BubbleChart } from '@mantine/charts';
import { data } from './data';


function Demo() {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <BubbleChart
      h={60}
      data={data}
      range={[16, 225]}
      dataKey={{ x: 'hour', y: 'index', z: 'value' }}
      {...props}
    />
  );
}

export const bubbleChartDemo: MantineDemo = {
  type: 'configurator',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  controls: [{ type: 'color', prop: 'color', initialValue: 'blue', libraryValue: null }],
};
