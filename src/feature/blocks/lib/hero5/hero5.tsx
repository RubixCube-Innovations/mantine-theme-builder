import { Container, Title, Text, Button, Group, Stack, Box, ThemeIcon, rem } from "@mantine/core";
import { ArrowRightIcon, CopyIcon, StarIcon, Cross2Icon, SunIcon, RocketIcon } from "@radix-ui/react-icons";
import classes from "./hero5.module.css";

export const Hero5 = () => {
  const decorativeElements = [
    { icon: <StarIcon />, top: "15%", right: "25%", delay: "0s" },
    { icon: <SunIcon />, top: "35%", right: "15%", delay: "0.5s" },
    { icon: <RocketIcon />, top: "60%", right: "8%", delay: "1s" },
    { icon: <StarIcon />, top: "75%", right: "20%", delay: "1.5s" },
    { icon: <Cross2Icon />, top: "25%", right: "5%", delay: "2s", isSmall: true },
    { icon: <Cross2Icon />, top: "45%", right: "30%", delay: "2.5s", isSmall: true },
    { icon: <Cross2Icon />, top: "80%", right: "35%", delay: "3s", isSmall: true },
  ];

  return (
    <Box className={classes.wrapper}>
      <Container size="xl" py={60}>
        {/* Header */}
        <Group gap="xs" mb={80} className={classes.header}>
          <ThemeIcon size="sm" radius="md" variant="light" className={classes.headerIcon}>
            <CopyIcon style={{ width: rem(14), height: rem(14) }} />
          </ThemeIcon>
          <Text fw={500} size="sm" className={classes.headerText}>
            Copy Paste Blocks
          </Text>
        </Group>

        <div className={classes.content}>
          {/* Main Content */}
          <Box className={classes.mainContent}>
            <Stack gap="xl" maw={600}>
              <Title className={classes.title} order={1}>
                Let's Create
                <br />
                Something{" "}
                <Text component="span" className={classes.highlight}>
                  Amazing!
                </Text>
              </Title>

              <Group>
                <Button
                  size="xl"
                  className={classes.ctaButton}
                  rightSection={<ArrowRightIcon style={{ width: rem(18), height: rem(18) }} />}
                >
                  Let's Talk
                </Button>
              </Group>
            </Stack>
          </Box>

          {/* Decorative Elements */}
          <Box className={classes.decorativeContainer}>
            {/* Curved dotted lines */}
            <svg className={classes.curveSvg} viewBox="0 0 400 400" fill="none">
              <path
                d="M50 200 Q200 100 350 200 Q200 300 50 200"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 8"
                fill="none"
                className={classes.curve1}
              />
              <path
                d="M80 150 Q250 50 380 180 Q250 320 80 180"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 8"
                fill="none"
                className={classes.curve2}
              />
              <path
                d="M20 250 Q180 150 320 250 Q180 350 20 250"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 8"
                fill="none"
                className={classes.curve3}
              />
            </svg>

            {/* Floating Icons */}
            {decorativeElements.map((element, index) => (
              <Box
                key={index}
                className={`${classes.floatingIcon} ${element.isSmall ? classes.smallIcon : ''}`}
                style={{
                  top: element.top,
                  right: element.right,
                  animationDelay: element.delay,
                }}
              >
                <ThemeIcon
                  size={element.isSmall ? "md" : "xl"}
                  radius="xl"
                  className={classes.iconWrapper}
                >
                  {element.icon}
                </ThemeIcon>
              </Box>
            ))}

            {/* Special smiley face icon */}
            <Box
              className={classes.smileyIcon}
              style={{ top: "45%", right: "12%" }}
            >
              <div className={classes.smiley}>
                <div className={classes.smileyFace}>
                  <div className={classes.eye}></div>
                  <div className={classes.eye}></div>
                  <div className={classes.mouth}></div>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </Container>
    </Box>
  );
}; 