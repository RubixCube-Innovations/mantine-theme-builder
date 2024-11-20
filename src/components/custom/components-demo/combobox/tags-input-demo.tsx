import { TagsInput } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';
import { inputControls } from '../../../../utils/input-controls';

const code = `
import { TagsInput } from '@mantine/core';


function Demo() {
  return (
    <TagsInput
      {{props}}
      placeholder="TagsInput placeholder"
      value={['First', 'Second']}
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <TagsInput
      {...props}
      placeholder="TagsInput placeholder"
      value={['First', 'Second']}
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}

export const tagsInputDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
