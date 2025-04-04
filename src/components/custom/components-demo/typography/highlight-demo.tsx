import { Highlight, HighlightProps } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';

function Wrapper(props: HighlightProps) {
  return <Highlight maw={400} mx="auto" {...props} />;
}

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight{{props}}>
      {{children}}
    </Highlight>
  );
}
`;

export const highlightDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: '100%',
  controls: [
    { prop: 'color', type: 'color', initialValue: '', libraryValue: '' },
    { prop: 'highlight', type: 'string', initialValue: 'this', libraryValue: null },
    {
      prop: 'children',
      type: 'string',
      initialValue: 'Highlight This, definitely THIS and also this!',
      libraryValue: null,
    },
  ],
};
