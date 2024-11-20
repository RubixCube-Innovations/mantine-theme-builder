import { Box, Text, Timeline, TimelineProps } from '@mantine/core';
import { IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons-react';
import { MantineDemo } from '../../../mantine/demo';

function TimelineBase({ noIcon, ...props }: Partial<TimelineProps> & { noIcon?: boolean }) {
    const displayIcon = !noIcon;
    return (
      <Timeline active={1} bulletSize={24} lineWidth={2} {...props}>
        <Timeline.Item
          bullet={displayIcon ? <IconGitBranch size="0.8rem" /> : null}
          title="New branch"
        >
          <Text c="dimmed" size="sm">
            You&apos;ve created new branch{' '}
            <Text variant="link" component="span" inherit>
              fix-notifications
            </Text>{' '}
            from master
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>
  
        <Timeline.Item bullet={displayIcon ? <IconGitCommit size="0.8rem" /> : null} title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to{' '}
            <Text variant="link" component="span" inherit>
              fix-notifications
            </Text>{' '}
            branch
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>
  
        <Timeline.Item
          title="Pull request"
          bullet={displayIcon ? <IconGitPullRequest size="0.8rem" /> : null}
          lineVariant="dashed"
        >
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request{' '}
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>{' '}
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>
  
        <Timeline.Item
          title="Code review"
          bullet={displayIcon ? <IconMessageDots size="0.8rem" /> : null}
        >
          <Text c="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>{' '}
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    );
  }
  

function Wrapper(props: TimelineProps) {
  return (
    <Box maw={320} mx="auto">
      <TimelineBase noIcon {...props} />
    </Box>
  );
}

const code = `
import { Timeline } from '@mantine/core';

function Demo() {
  return (
    <Timeline{{props}}>
      {/* items */}
    </Timeline>
  );
}
`;

export const timelineDemo: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    { prop: 'radius', type: 'size', initialValue: 'xl', libraryValue: 'xl' },
    { prop: 'active', type: 'number', initialValue: 1, libraryValue: null, min: -1, max: 3 },
    { prop: 'reverseActive', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'lineWidth', type: 'number', initialValue: 4, libraryValue: 4, min: 1, max: 6 },
    {
      prop: 'bulletSize',
      type: 'number',
      initialValue: 25,
      libraryValue: 20,
      min: 18,
      max: 40,
      step: 1,
    },
    {
      prop: 'align',
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      initialValue: 'left',
      libraryValue: 'left',
    },
  ],
};
