import { Fieldset, TextInput } from '@mantine/core';
import { MantineDemo } from '../../../mantine/demo';

const code = `
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Fieldset legend="Personal information" {...props}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}

export const fieldsetDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  maxWidth: 500,
  centered: true,
  controls: [
    {
      type: 'segmented',
      prop: 'variant',
      initialValue: '',
      libraryValue: '',
      data: ['default', 'filled', 'unstyled'],
    },

    { type: 'size', prop: 'radius', initialValue: 'sm', libraryValue: 'sm' },
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
