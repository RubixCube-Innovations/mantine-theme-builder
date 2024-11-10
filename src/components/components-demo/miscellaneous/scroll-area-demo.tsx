import { Box, ScrollArea, ScrollAreaProps, Text } from '@mantine/core';
import { MantineDemo } from '../../mantine/demo';

function Content() {
    return (
      <>
        <Text size="xl" fw={700}>
          Charizard (Pokémon)
        </Text>
        <Text c="dimmed">Charizard description from Bulbapedia</Text>
        <Text size="sm" mt="md">
          Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from
          the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised
          nostrils, and two horn-like structures protruding from the back of its rectangular head.
          There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with
          blue-green undersides sprout from its back, and a horn-like appendage juts out from the top
          of the third joint of each wing. A single wing-finger is visible through the center of each
          wing membrane. Charizard&apos;s arms are short and skinny compared to its robust belly, and
          each limb has three white claws. It has stocky legs with cream-colored soles on each of its
          plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.
        </Text>
        <Text size="sm" mt="md">
          As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin.
          Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve
          upward from the front and back of each shoulder, while the tips of its horns sharpen, turn
          blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It
          has two small, fin-like spikes under each horn and two more down its lower neck. The finger
          disappears from the wing membrane, and the lower edges are divided into large, rounded
          points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X
          breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue.
          It is said that its new power turns it black and creates more intense flames.
        </Text>
      </>
    );
  }
  

function Wrapper(props: ScrollAreaProps) {
  return (
    <Box maw={400} mx="auto">
      <ScrollArea h={250} {...props}>
        <Content />
      </ScrollArea>
    </Box>
  );
}

const code = `
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250}{{props}}>
      {/* ... content */}
    </ScrollArea>
  );
}
`;

export const scrollAreaDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'type',
      type: 'select',
      data: [
        { value: 'hover', label: 'Hover' },
        { value: 'auto', label: 'Auto' },
        { value: 'always', label: 'Always' },
        { value: 'scroll', label: 'Scroll' },
        { value: 'never', label: 'Never' },
      ],
      initialValue: 'hover',
      libraryValue: 'hover',
    },
    {
      prop: 'offsetScrollbars',
      type: 'boolean',
      libraryValue: false,
      initialValue: false,
    },
    {
      prop: 'scrollbarSize',
      type: 'number',
      min: 2,
      max: 20,
      step: 2,
      libraryValue: 10,
      initialValue: 10,
    },
    {
      prop: 'scrollHideDelay',
      type: 'number',
      min: 0,
      max: 6000,
      step: 500,
      libraryValue: 1000,
      initialValue: 1000,
    },
  ],
};
