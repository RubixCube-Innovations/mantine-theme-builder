export const components = [
  {
    component: "Hero1",
    slug: "hero1",
    code: [
      {
        fileName: "hero1.tsx",
        language: "tsx",
        code: 'import { Container, Title, Text, Button, Group, Stack, Grid, ThemeIcon, Box, Paper, rgba } from "@mantine/core";\r\nimport { GitHubLogoIcon, RocketIcon, LightningBoltIcon, StarIcon, DashboardIcon } from "@radix-ui/react-icons";\r\nimport classes from "./hero1.module.css";\r\n\r\nexport const Hero1 = () => {\r\n  const features = [\r\n    { icon: <LightningBoltIcon />, label: "Lightning Fast" },\r\n    { icon: <StarIcon />, label: "Production Ready" },\r\n    { icon: <DashboardIcon />, label: "Modern Design" },\r\n  ];\r\n\r\n  return (\r\n    <Box>\r\n      <Container size="xl" py={120}>\r\n        <Grid gutter={40} align="center">\r\n          <Grid.Col span={{ base: 12, md: 7 }}>\r\n            <Stack gap="xl">\r\n              <Group gap={"xs"}>\r\n                <ThemeIcon size="lg" radius="md" variant="transparent">\r\n                  <RocketIcon style={{ width: 20, height: 20 }} color="var(--mantine-primary-color-filled)" />\r\n                </ThemeIcon>\r\n                <Text fw={500} size="sm" style={{ letterSpacing: 1 }} tt="uppercase">\r\n                  Launch Your Project Today\r\n                </Text>\r\n              </Group>\r\n\r\n              <Title className={classes?.title} order={1} size="h1">\r\n                Build Faster, Scale Better with Our Platform\r\n              </Title>\r\n\r\n              <Text size="xl" c="dimmed" maw={600}>\r\n                Experience the next generation of web development. Build scalable applications with modern tools and\r\n                frameworks.\r\n              </Text>\r\n\r\n              <Group mt="xl">\r\n                <Button size="lg" leftSection={<RocketIcon />}>\r\n                  Get Started\r\n                </Button>\r\n                <Button size="lg" variant="default" leftSection={<GitHubLogoIcon />}>\r\n                  View on GitHub\r\n                </Button>\r\n              </Group>\r\n\r\n              <Group mt={30} gap="xl">\r\n                {features.map((feature, index) => (\r\n                  <Group key={index} gap="xs">\r\n                    <ThemeIcon\r\n                      size="md"\r\n                      variant="light"\r\n                      color="blue"\r\n                      style={{ background: rgba("var(--mantine-primary-color-filled)", 0.07) }}\r\n                    >\r\n                      {feature.icon}\r\n                    </ThemeIcon>\r\n                    <Text size="sm" c="dimmed">\r\n                      {feature.label}\r\n                    </Text>\r\n                  </Group>\r\n                ))}\r\n              </Group>\r\n            </Stack>\r\n          </Grid.Col>\r\n\r\n          <Grid.Col span={{ base: 12, md: 5 }}>\r\n            <Paper className={classes?.paper} radius="md" p="xl"></Paper>\r\n          </Grid.Col>\r\n        </Grid>\r\n      </Container>\r\n    </Box>\r\n  );\r\n};\r\n',
      },
      {
        fileName: "hero1.module.css",
        language: "scss",
        code: ".title {\r\n  font-size: clamp(2.5rem, 5vw, 4rem);\r\n  line-height: 1;\r\n  background: linear-gradient(\r\n    45deg,\r\n    var(--mantine-primary-color-filled) 35%,\r\n    var(--mantine-primary-color-contrast) 100%\r\n  );\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.themeIconBackground {\r\n  background: rgba(var(--mantine-primary-color-filled), 0.07);\r\n}\r\n\r\n.paper {\r\n  background: rgba(255, 255, 255, 0.1);\r\n  backdrop-filter: blur(20px);\r\n  border: 1px solid rgba(255, 255, 255, 0.1);\r\n  height: rem(320px);\r\n}\r\n",
      },
    ],
    attributes: {
      title: "hero1",
      category: "hero",
      canvas: {
        center: true,
        maxWidth: 1200,
      },
    },
  },

  {
    component: "Feature1",
    slug: "feature1",
    code: [
      {
        fileName: "feature1.tsx",
        language: "tsx",
        code: 'import { Grid, Card, Text, Title, Center, Box, Stack } from "@mantine/core";\r\nimport { ZoomInIcon, BarChartIcon, CircleIcon, HandIcon, LayersIcon, BellIcon } from "@radix-ui/react-icons";\r\nimport classes from "./feature1.module.css";\r\n\r\nconst reasons = [\r\n  {\r\n    title: "Quality",\r\n    description: "We deliver exceptional results that exceed expectations, setting new standards in the industry.",\r\n    icon: <ZoomInIcon />,\r\n  },\r\n  {\r\n    title: "Experience",\r\n    description: "Decades of combined expertise ensures your project is handled with professional excellence.",\r\n    icon: <BarChartIcon />,\r\n  },\r\n  {\r\n    title: "Support",\r\n    description: "24/7 dedicated support team ready to assist you with any questions or concerns.",\r\n    icon: <CircleIcon />,\r\n  },\r\n  {\r\n    title: "Innovation",\r\n    description: "Cutting-edge solutions that keep you ahead of the curve in today\'s dynamic market.",\r\n    icon: <HandIcon />,\r\n  },\r\n  {\r\n    title: "Results",\r\n    description: "Proven track record of delivering measurable outcomes and tangible business value.",\r\n    icon: <LayersIcon />,\r\n  },\r\n  {\r\n    title: "Efficiency",\r\n    description: "Streamlined processes that save time and resources while maximizing productivity.",\r\n    icon: <BellIcon />,\r\n  },\r\n];\r\n\r\nexport const Feature1 = () => {\r\n  return (\r\n    <Box py={120} className={classes.wrapper}>\r\n      <Box px="md" mx="auto" maw={1200}>\r\n        <Stack gap={60}>\r\n          <Box>\r\n            <Title className={classes.title} order={2} ta="center" size={40} fw={800}>\r\n              Why Work With Us?\r\n            </Title>\r\n            <Text c="dimmed" ta="center" size="lg" maw={600} mx="auto" mt="md">\r\n              Discover the unique advantages that set us apart and make us your ideal partner for success\r\n            </Text>\r\n          </Box>\r\n\r\n          <Grid gutter={40}>\r\n            {reasons.map((reason, i) => (\r\n              <Grid.Col key={i} span={{ base: 12, md: 6, lg: 4 }}>\r\n                <Card className={classes.card} p={30} radius="md" withBorder>\r\n                  <Stack gap="lg">\r\n                    <Center>\r\n                      <Box className={classes.iconWrapper}>{reason.icon}</Box>\r\n                    </Center>\r\n                    <Stack gap="sm">\r\n                      <Text className={classes.cardTitle}>{reason.title}</Text>\r\n                      <Text size="md" c="dimmed" lh={1.6}>\r\n                        {reason.description}\r\n                      </Text>\r\n                    </Stack>\r\n                  </Stack>\r\n                </Card>\r\n              </Grid.Col>\r\n            ))}\r\n          </Grid>\r\n        </Stack>\r\n      </Box>\r\n    </Box>\r\n  );\r\n};\r\n',
      },
      {
        fileName: "feature1.module.css",
        language: "scss",
        code: '.wrapper {\r\n  position: relative;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n}\r\n\r\n.title::after {\r\n  content: "";\r\n  display: block;\r\n  width: 60px;\r\n  height: 4px;\r\n  background: linear-gradient(45deg, var(--mantine-primary-color-5), var(--mantine-primary-color-2));\r\n  margin: 20px auto;\r\n  border-radius: var(--mantine-radius-xl);\r\n}\r\n\r\n.card {\r\n  transition: all 0.1s ease;\r\n}\r\n\r\n.card:hover {\r\n  transform: translateY(-5px);\r\n  box-shadow: var(--mantine-shadow-lg);\r\n  background: var(--mantine-color-secondary-filled);\r\n}\r\n\r\n.iconWrapper {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: var(--mantine-radius-md);\r\n  /* background: linear-gradient(45deg, var(--mantine-primary-color-6), var(--mantine-primary-color-5)); */\r\n  background: var(--mantine-primary-color-filled-hover);\r\n  color: var(--mantine-primary-color-contrast);\r\n  animation: float 3s ease-in-out infinite;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.iconWrapper svg {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.cardTitle {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n@keyframes float {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  50% {\r\n    transform: translateY(-10px);\r\n  }\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n',
      },
    ],
    attributes: {
      title: "feature1",
      category: "feature",
      canvas: {
        center: true,
        maxWidth: 1200,
      },
    },
  },

  // {
  //   "component": "Pricing1",
  //   "slug": "pricing1",
  //   "code": [
  //     {
  //       "fileName": "pricing1.tsx",
  //       "language": "tsx",
  //       "code": "import { useState } from \"react\";\r\nimport { ArrowRightIcon, CheckCircledIcon } from \"@radix-ui/react-icons\";\r\nimport { Box, Button } from \"@mantine/core\";\r\nimport { Card, CardSection, Text, Title, Divider, Switch, Grid } from \"@mantine/core\";\r\n\r\nexport const Pricing1 = () => {\r\n  const [isYearly, setIsYearly] = useState(false);\r\n\r\n  return (\r\n    <Box py={96}>\r\n      <Box className=\"container mx-auto flex flex-col items-center gap-24 text-center\">\r\n        <Box>\r\n          <Title order={2} mb={8} fz={{ base: 24, lg: 40 }} fw={700}>\r\n            Pricing\r\n          </Title>\r\n          <Text color=\"dimmed\" fz={{ base: 16, lg: 20 }}>\r\n            Check out our affordable pricing plans\r\n          </Text>\r\n        </Box>\r\n        <Box className=\"flex items-center gap-3 text-lg\">\r\n          Monthly\r\n          <Switch checked={isYearly} onChange={() => setIsYearly(!isYearly)} />\r\n          Yearly\r\n        </Box>\r\n        <Grid gutter={24} justify=\"center\">\r\n          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>\r\n            <Card shadow=\"sm\" radius=\"md\" withBorder>\r\n              <CardSection>\r\n                <Box p=\"lg\">\r\n                  <Title order={3} mb={4}>\r\n                    Plus\r\n                  </Title>\r\n                  <Text color=\"dimmed\" fz=\"sm\">\r\n                    For personal use\r\n                  </Text>\r\n                  <Text fz={32} fw={700} mt={8}>\r\n                    {isYearly ? \"$15\" : \"$19\"}\r\n                  </Text>\r\n                  <Text color=\"dimmed\">Billed {isYearly ? \"$180\" : \"$228\"} annually</Text>\r\n                </Box>\r\n              </CardSection>\r\n              <CardSection p=\"lg\">\r\n                <Divider mb={24} />\r\n                <ul className=\"space-y-16\">\r\n                  <li className=\"flex items-center gap-8\">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className=\"flex items-center gap-8\">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className=\"flex items-center gap-8\">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className=\"flex items-center gap-8\">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                </ul>\r\n              </CardSection>\r\n              <CardSection p=\"lg\" mt=\"auto\">\r\n                <Button fullWidth leftSection={<ArrowRightIcon />}>\r\n                  Get Started\r\n                </Button>\r\n              </CardSection>\r\n            </Card>\r\n          </Grid.Col>\r\n          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>\r\n            <Card shadow=\"sm\" radius=\"md\" withBorder>\r\n              <CardSection>\r\n                <Box p=\"lg\">\r\n                  <Title order={3} mb={4}>\r\n                    Pro\r\n                  </Title>\r\n                  <Text color=\"dimmed\" fz=\"sm\">\r\n                    For professionals\r\n                  </Text>\r\n                  <Text fz={32} fw={700} mt={8}>\r\n                    {isYearly ? \"$35\" : \"$49\"}\r\n                  </Text>\r\n                  <Text color=\"dimmed\">Billed {isYearly ? \"$420\" : \"$588\"} annually</Text>\r\n                </Box>\r\n              </CardSection>\r\n              <CardSection p=\"lg\">\r\n                <Divider mb={24} />\r\n                <Text mb={12} fz=\"lg\" fw={600}>\r\n                  Everything in Plus, and:\r\n                </Text>\r\n                <ul className=\"space-y-16\">\r\n                  <li className=\"flex items-center gap-8\">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className=\"flex items-center gap-8\">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className=\"flex items-center gap-8\">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className=\"flex items-center gap-8\">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                </ul>\r\n              </CardSection>\r\n              <CardSection p=\"lg\" mt=\"auto\">\r\n                <Button fullWidth leftSection={<ArrowRightIcon />}>\r\n                  Get Started\r\n                </Button>\r\n              </CardSection>\r\n            </Card>\r\n          </Grid.Col>\r\n        </Grid>\r\n      </Box>\r\n    </Box>\r\n  );\r\n};\r\n"
  //     }
  //   ],
  //   "attributes": {
  //     "title": "pricing1",
  //     "category": "pricing",
  //     "canvas": {
  //       "center": true,
  //       "maxWidth": 1200
  //     }
  //   }
  // },
  {
    component: "ComingSoon",
    slug: "coming-soon",
    code: [
      {
        fileName: "coming-soon.tsx",
        language: "tsx",
        code: 'import { Box, Container, Text, Group, Stack } from "@mantine/core";\r\nimport styles from "./coming-soon.module.css";\r\n\r\nexport const ComingSoon = () => {\r\n  return (\r\n    <Box>\r\n      <Container size="md" className={styles.container}>\r\n        <Stack gap="xl" align="center">\r\n          <Group ta={"center"} justify="center" gap={"xl"}>\r\n            <Text fz={"4rem"} fw={600} lh={"4rem"} className={styles.title} ta={"center"}>\r\n              Coming Soon..\r\n            </Text>\r\n            <Text c={"dimmed"} maw={"380"}>\r\n              We\'re working hard to bring you more awesome block. Stay tuned for updates!\r\n            </Text>\r\n          </Group>\r\n        </Stack>\r\n      </Container>\r\n    </Box>\r\n  );\r\n};\r\n',
      },
      {
        fileName: "coming-soon.module.css",
        language: "scss",
        code: ".container {\r\n  padding: 4rem 1rem;\r\n}\r\n\r\n.title {\r\n  background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n",
      },
    ],
    attributes: {
      title: "coming-soon",
      category: "coming-soon",
      canvas: {
        center: true,
        maxWidth: 1200,
      },
    },
  },
];
