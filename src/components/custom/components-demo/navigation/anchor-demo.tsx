import { Anchor } from '@mantine/core';
import { MantineDemo } from '../../mantine/demo';

const code = `
import { Anchor } from '@mantine/core';


function Demo() {
  return (
     <Anchor{{props}} href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Anchor {...props} href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}

export const anchorDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: [
    {
        prop: 'underline',
        type: 'segmented',
        data: [
          { value: 'always', label: 'Always' },
          { value: 'hover', label: 'Hover' },
          { value: 'never', label: 'Never' },
        ],
        initialValue: 'always',
        libraryValue: 'always',
      },
  ]
};
