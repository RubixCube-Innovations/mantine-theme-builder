import { Container, Title, Text, Button, Group, Stack, Box, ThemeIcon, rem, SimpleGrid, Paper } from "@mantine/core";
import { ArrowRightIcon, Pencil1Icon, StarIcon, SunIcon, RocketIcon, PersonIcon, ChatBubbleIcon, LightningBoltIcon, CursorArrowIcon, Pencil2Icon, CircleIcon, SquareIcon, TargetIcon } from "@radix-ui/react-icons";
import classes from "./hero3.module.css";

export const Hero3 = () => {
  const designElements = [
    { type: 'cursor', id: 'cursor1', x: '20%', y: '25%', delay: '0s' },
    { type: 'cursor', id: 'cursor2', x: '70%', y: '40%', delay: '1s' },
    { type: 'cursor', id: 'cursor3', x: '40%', y: '60%', delay: '2s' },
  ];

  const drawnElements = [
    { icon: <CircleIcon />, x: '25%', y: '30%', delay: '0.5s', color: 'primary' },
    { icon: <SquareIcon />, x: '75%', y: '45%', delay: '1.5s', color: 'secondary' },
    { icon: <TargetIcon />, x: '45%', y: '65%', delay: '2.5s', color: 'accent' },
    { icon: <StarIcon />, x: '60%', y: '25%', delay: '3s', color: 'primary' },
    { icon: <SunIcon />, x: '30%', y: '55%', delay: '3.5s', color: 'secondary' },
    { icon: <RocketIcon />, x: '80%', y: '70%', delay: '4s', color: 'accent' },
  ];

  const collaborationIndicators = [
    { x: '22%', y: '22%', delay: '0.8s', user: 'A' },
    { x: '72%', y: '37%', delay: '1.8s', user: 'B' },
    { x: '42%', y: '57%', delay: '2.8s', user: 'C' },
  ];

  const features = [
    {
      icon: <PersonIcon />,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time collaboration tools"
    },
    {
      icon: <ChatBubbleIcon />,
      title: "Smart Communication",
      description: "Integrated messaging and feedback systems"
    },
    {
      icon: <LightningBoltIcon />,
      title: "Rapid Iteration",
      description: "Quickly prototype and iterate on your designs"
    }
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" py={60}>
        {/* Header */}
        <Group gap="xs" mb={60} className={classes.header}>
          <ThemeIcon size="sm" radius="md" variant="light" className={classes.headerIcon}>
            <Pencil1Icon style={{ width: rem(14), height: rem(14) }} />
          </ThemeIcon>
          <Text fw={500} size="sm" className={classes.headerText}>
            Design & Collaboration
          </Text>
        </Group>

        <div className={classes.content}>
          {/* Main Content */}
          <Box className={classes.mainContent}>
            <Stack gap="xl" maw={800}>
              <Title className={classes.title} order={1}>
                Design Better
                <br />
                Products with
                <br />
                <span className={classes.highlight}>Creative Tools</span>
              </Title>

              <Text size="lg" lh={1.6} className={classes.subtitle}>
                Empower your team with intuitive design tools and collaboration features.
                From concept to launch, create exceptional user experiences that drive results.
              </Text>

              <Group gap="md">
                <Button
                  size="xl"
                  className={classes.ctaButton}
                  rightSection={<ArrowRightIcon style={{ width: rem(18), height: rem(18) }} />}
                >
                  Start Designing
                </Button>
                <Button size="xl" variant="outline" className={classes.secondaryButton}>
                  View Gallery
                </Button>
              </Group>
            </Stack>
          </Box>

          {/* Design Canvas Animation */}
          <Box className={classes.designCanvas}>
            {/* Canvas Background */}
            <div className={classes.canvasBackground}>
              <div className={classes.canvasGrid}></div>
            </div>

            {/* Design Process Animation */}
            <svg className={classes.designProcess} viewBox="0 0 400 400" fill="none">
              {/* Drawing paths that appear progressively */}
              <path
                d="M50 100 Q150 50 250 100 Q350 150 250 200 Q150 250 50 200 Q50 150 50 100"
                stroke="var(--mantine-primary-color-6)"
                strokeWidth="3"
                fill="none"
                className={classes.drawingPath}
                style={{ animationDelay: '0.5s' }}
              />
              <path
                d="M100 150 L200 150 L200 250 L100 250 Z"
                stroke="var(--mantine-primary-color-4)"
                strokeWidth="2"
                fill="none"
                className={classes.drawingPath}
                style={{ animationDelay: '1.5s' }}
              />
              <circle
                cx="300"
                cy="180"
                r="40"
                stroke="var(--mantine-primary-color-8)"
                strokeWidth="2"
                fill="none"
                className={classes.drawingPath}
                style={{ animationDelay: '2.5s' }}
              />
            </svg>

            {/* Design Cursors */}
            {designElements.map((element, index) => (
              <Box
                key={index}
                className={classes.designCursor}
                style={{
                  left: element.x,
                  top: element.y,
                  animationDelay: element.delay,
                }}
              >
                <CursorArrowIcon className={classes.cursorIcon} />
                <div className={classes.cursorTrail}></div>
              </Box>
            ))}

            {/* Collaboration Indicators */}
            {collaborationIndicators.map((indicator, index) => (
              <Box
                key={index}
                className={classes.collaborationIndicator}
                style={{
                  left: indicator.x,
                  top: indicator.y,
                  animationDelay: indicator.delay,
                }}
              >
                <div className={classes.userIndicator}>
                  {indicator.user}
                </div>
                <div className={classes.presenceRing}></div>
              </Box>
            ))}

            {/* Design Elements Being Created */}
            {drawnElements.map((element, index) => (
              <Box
                key={index}
                className={`${classes.designElement} ${classes[element.color]}`}
                style={{
                  left: element.x,
                  top: element.y,
                  animationDelay: element.delay,
                }}
              >
                <ThemeIcon
                  size="lg"
                  radius="md"
                  className={classes.elementIcon}
                >
                  {element.icon}
                </ThemeIcon>
                <div className={classes.selectionBox}></div>
              </Box>
            ))}

            {/* Design Tools Floating */}
            <Box className={classes.designTools}>
              <div className={classes.toolPalette}>
                <div className={classes.tool}>
                  <Pencil2Icon />
                </div>
                <div className={classes.tool}>
                  <CircleIcon />
                </div>
                <div className={classes.tool}>
                  <SquareIcon />
                </div>
                <div className={classes.tool}>
                  <TargetIcon />
                </div>
              </div>
            </Box>

            {/* Collaboration Chat Bubble */}
            <Box className={classes.collaborationChat}>
              <div className={classes.chatBubble}>
                <Text size="xs">Great design! 👍</Text>
              </div>
              <div className={classes.chatBubble} style={{ animationDelay: '2s' }}>
                <Text size="xs">Let's iterate on this</Text>
              </div>
            </Box>
          </Box>
        </div>

      </Container>
    </Box>
  );
}; 