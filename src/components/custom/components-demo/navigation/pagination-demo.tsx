import { Pagination } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';

function Wrapper(props: any) {
  return <Pagination total={10} {...props} />;
}

const code = `
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`;

export const paginationDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { prop: 'color', type: 'color', initialValue: '', libraryValue: '' },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
    { prop: 'withControls', type: 'boolean', initialValue: true, libraryValue: true },
    { prop: 'withEdges', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
