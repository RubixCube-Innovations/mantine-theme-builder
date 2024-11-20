import { Mark, MarkProps, Text } from '@mantine/core';
import { MantineDemo } from '../../mantine/demo';

function Wrapper(props: MarkProps) {
  return (
    <Text>
      Highlight <Mark {...props}>this chunk</Mark> of the text
    </Text>
  );
}

const code = `
import { Text, Mark } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Highlight <Mark{{props}}>this chunk</Mark> of the text
    </Text>
  );
}
`;

export const markDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: '100%',
  controls: [{ prop: 'color', type: 'color', initialValue: 'yellow', libraryValue: 'yellow' }],
};
