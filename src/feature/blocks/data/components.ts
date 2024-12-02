export const components = [
  {
    "component": "Hero1",
    "slug": "hero1",
    "code": [
      {
        "fileName": "hero1.tsx",
        "language": "tsx",
        "code": "import { Container, Title, Text, Button, Group, Stack, Grid, ThemeIcon, Box, Paper, rgba } from \"@mantine/core\";\r\nimport { GitHubLogoIcon, RocketIcon, LightningBoltIcon, StarIcon, DashboardIcon } from \"@radix-ui/react-icons\";\r\nimport classes from \"./hero1.module.css\";\r\n\r\nexport const Hero1 = () => {\r\n  const features = [\r\n    { icon: <LightningBoltIcon />, label: \"Lightning Fast\" },\r\n    { icon: <StarIcon />, label: \"Production Ready\" },\r\n    { icon: <DashboardIcon />, label: \"Modern Design\" },\r\n  ];\r\n\r\n  return (\r\n    <Box>\r\n      <Container size=\"xl\" py={120}>\r\n        <Grid gutter={40} align=\"center\">\r\n          <Grid.Col span={{ base: 12, md: 7 }}>\r\n            <Stack gap=\"xl\">\r\n              <Group gap={\"xs\"}>\r\n                <ThemeIcon size=\"lg\" radius=\"md\" variant=\"transparent\">\r\n                  <RocketIcon style={{ width: 20, height: 20 }} color=\"var(--mantine-primary-color-filled)\" />\r\n                </ThemeIcon>\r\n                <Text fw={500} size=\"sm\" style={{ letterSpacing: 1 }} tt=\"uppercase\">\r\n                  Launch Your Project Today\r\n                </Text>\r\n              </Group>\r\n\r\n              <Title className={classes?.title} order={1} size=\"h1\">\r\n                Build Faster, Scale Better with Our Platform\r\n              </Title>\r\n\r\n              <Text size=\"xl\" c=\"dimmed\" maw={600}>\r\n                Experience the next generation of web development. Build scalable applications with modern tools and\r\n                frameworks.\r\n              </Text>\r\n\r\n              <Group mt=\"xl\">\r\n                <Button size=\"lg\" leftSection={<RocketIcon />}>\r\n                  Get Started\r\n                </Button>\r\n                <Button size=\"lg\" variant=\"default\" leftSection={<GitHubLogoIcon />}>\r\n                  View on GitHub\r\n                </Button>\r\n              </Group>\r\n\r\n              <Group mt={30} gap=\"xl\">\r\n                {features.map((feature, index) => (\r\n                  <Group key={index} gap=\"xs\">\r\n                    <ThemeIcon\r\n                      size=\"md\"\r\n                      variant=\"light\"\r\n                      color=\"blue\"\r\n                      style={{ background: rgba(\"var(--mantine-primary-color-filled)\", 0.07) }}\r\n                    >\r\n                      {feature.icon}\r\n                    </ThemeIcon>\r\n                    <Text size=\"sm\" c=\"dimmed\">\r\n                      {feature.label}\r\n                    </Text>\r\n                  </Group>\r\n                ))}\r\n              </Group>\r\n            </Stack>\r\n          </Grid.Col>\r\n\r\n          <Grid.Col span={{ base: 12, md: 5 }}>\r\n            <Paper\r\n              mih={320}\r\n              radius=\"md\"\r\n              p=\"xl\"\r\n              bg={\"rgba(255, 255, 255, 0.1)\"}\r\n              bd={\" 1px solid rgba(255, 255, 255, 0.1) \"}\r\n            ></Paper>\r\n          </Grid.Col>\r\n        </Grid>\r\n      </Container>\r\n    </Box>\r\n  );\r\n};\r\n"
      },
      {
        "fileName": "hero1.module.css",
        "language": "scss",
        "code": ".title {\r\n  font-size: clamp(2.5rem, 5vw, 4rem);\r\n  line-height: 1;\r\n  background: linear-gradient(\r\n    45deg,\r\n    var(--mantine-primary-color-filled) 35%,\r\n    var(--mantine-primary-color-contrast) 100%\r\n  );\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.themeIconBackground {\r\n  background: rgba(var(--mantine-primary-color-filled), 0.07);\r\n}\r\n"
      }
    ],
    "attributes": {
      "title": "hero1",
      "category": "hero",
      "canvas": {
        "center": true,
        "maxWidth": 1200
      },
      "order": 1
    }
  },
  {
    "component": "Feature1",
    "slug": "feature1",
    "code": [
      {
        "fileName": "feature1.tsx",
        "language": "tsx",
        "code": "import { Grid, Card, Text, Title, Center, Box, Stack } from \"@mantine/core\";\r\nimport { ZoomInIcon, BarChartIcon, CircleIcon, HandIcon, LayersIcon, BellIcon } from \"@radix-ui/react-icons\";\r\nimport classes from \"./feature1.module.css\";\r\n\r\nconst reasons = [\r\n  {\r\n    title: \"Quality\",\r\n    description: \"We deliver exceptional results that exceed expectations, setting new standards in the industry.\",\r\n    icon: <ZoomInIcon />,\r\n  },\r\n  {\r\n    title: \"Experience\",\r\n    description: \"Decades of combined expertise ensures your project is handled with professional excellence.\",\r\n    icon: <BarChartIcon />,\r\n  },\r\n  {\r\n    title: \"Support\",\r\n    description: \"24/7 dedicated support team ready to assist you with any questions or concerns.\",\r\n    icon: <CircleIcon />,\r\n  },\r\n  {\r\n    title: \"Innovation\",\r\n    description: \"Cutting-edge solutions that keep you ahead of the curve in today's dynamic market.\",\r\n    icon: <HandIcon />,\r\n  },\r\n  {\r\n    title: \"Results\",\r\n    description: \"Proven track record of delivering measurable outcomes and tangible business value.\",\r\n    icon: <LayersIcon />,\r\n  },\r\n  {\r\n    title: \"Efficiency\",\r\n    description: \"Streamlined processes that save time and resources while maximizing productivity.\",\r\n    icon: <BellIcon />,\r\n  },\r\n];\r\n\r\nexport const Feature1 = () => {\r\n  return (\r\n    <Box py={120} className={classes.wrapper}>\r\n      <Box px=\"md\" mx=\"auto\" maw={1200}>\r\n        <Stack gap={60}>\r\n          <Box>\r\n            <Title className={classes.title} order={2} ta=\"center\" size={40} fw={800}>\r\n              Why Work With Us?\r\n            </Title>\r\n            <Text c=\"dimmed\" ta=\"center\" size=\"lg\" maw={600} mx=\"auto\" mt=\"md\">\r\n              Discover the unique advantages that set us apart and make us your ideal partner for success\r\n            </Text>\r\n          </Box>\r\n\r\n          <Grid gutter={40}>\r\n            {reasons.map((reason, i) => (\r\n              <Grid.Col key={i} span={{ base: 12, md: 6, lg: 4 }}>\r\n                <Card className={classes.card} p={30} radius=\"md\" withBorder>\r\n                  <Stack gap=\"lg\">\r\n                    <Center>\r\n                      <Box className={classes.iconWrapper}>{reason.icon}</Box>\r\n                    </Center>\r\n                    <Stack gap=\"sm\">\r\n                      <Text className={classes.cardTitle}>{reason.title}</Text>\r\n                      <Text size=\"md\" c=\"dimmed\" lh={1.6}>\r\n                        {reason.description}\r\n                      </Text>\r\n                    </Stack>\r\n                  </Stack>\r\n                </Card>\r\n              </Grid.Col>\r\n            ))}\r\n          </Grid>\r\n        </Stack>\r\n      </Box>\r\n    </Box>\r\n  );\r\n};\r\n"
      },
      {
        "fileName": "feature1.module.css",
        "language": "scss",
        "code": ".wrapper {\r\n  position: relative;\r\n}\r\n\r\n.title {\r\n  position: relative;\r\n}\r\n\r\n.title::after {\r\n  content: \"\";\r\n  display: block;\r\n  width: 60px;\r\n  height: 4px;\r\n  background: linear-gradient(45deg, var(--mantine-primary-color-5), var(--mantine-primary-color-2));\r\n  margin: 20px auto;\r\n  border-radius: var(--mantine-radius-xl);\r\n}\r\n\r\n.card {\r\n  transition: all 0.1s ease;\r\n}\r\n\r\n.card:hover {\r\n  transform: translateY(-5px);\r\n  box-shadow: var(--mantine-shadow-lg);\r\n  background: var(--mantine-color-secondary-filled);\r\n}\r\n\r\n.iconWrapper {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: var(--mantine-radius-md);\r\n  /* background: linear-gradient(45deg, var(--mantine-primary-color-6), var(--mantine-primary-color-5)); */\r\n  background: var(--mantine-primary-color-filled-hover);\r\n  color: var(--mantine-primary-color-contrast);\r\n  animation: float 3s ease-in-out infinite;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.iconWrapper svg {\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.cardTitle {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n@keyframes float {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  50% {\r\n    transform: translateY(-10px);\r\n  }\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n"
      }
    ],
    "attributes": {
      "title": "feature1",
      "category": "feature",
      "canvas": {
        "center": true,
        "maxWidth": 1200
      },
      "order": 2
    }
  },
  {
    "component": "Pricing1",
    "slug": "pricing1",
    "code": [
      {
        "fileName": "pricing1.tsx",
        "language": "tsx",
        "code": "import { useState } from \"react\";\r\nimport { Box, Card, Grid, Title, Text, Button, Switch, Divider, Group, Stack, Container } from \"@mantine/core\";\r\nimport { CheckCircledIcon, ArrowRightIcon } from \"@radix-ui/react-icons\";\r\nimport classes from \"./pricing1.module.css\";\r\n\r\nexport const Pricing1 = () => {\r\n  const [isYearly, setIsYearly] = useState(false);\r\n\r\n  const plans = [\r\n    {\r\n      name: \"Plus\",\r\n      subtitle: \"For personal use\",\r\n      monthlyPrice: 19,\r\n      yearlyPrice: 15,\r\n      annualBilling: {\r\n        monthly: 228,\r\n        yearly: 180,\r\n      },\r\n      badgeColor: \"blue\",\r\n      features: [\r\n        \"Unlimited basic features\",\r\n        \"Standard support\",\r\n        \"Basic analytics\",\r\n        \"Single user account\",\r\n        \"Lorem ipsum dolor sit.\",\r\n      ],\r\n    },\r\n    {\r\n      name: \"Pro\",\r\n      subtitle: \"For professionals\",\r\n      monthlyPrice: 49,\r\n      yearlyPrice: 35,\r\n      annualBilling: {\r\n        monthly: 588,\r\n        yearly: 420,\r\n      },\r\n      badgeColor: \"grape\",\r\n      features: [\r\n        \"Everything in Plus\",\r\n        \"Priority support\",\r\n        \"Advanced analytics\",\r\n        \"Team collaboration\",\r\n        \"Custom integrations\",\r\n        \"Lorem ipsum dolor sit.\",\r\n      ],\r\n      recommended: true,\r\n    },\r\n  ];\r\n\r\n  return (\r\n    <Box className={classes.pricingWrapper}>\r\n      <Container size=\"xl\">\r\n        <Stack align=\"center\" gap=\"xl\">\r\n          <Stack align=\"center\" gap=\"xs\">\r\n            <Title order={1} fz={\"2.6rem\"} className={classes.mainTitle}>\r\n              Pricing Plans\r\n            </Title>\r\n            <Text className={classes.mainSubtitle} c=\"dimmed\">\r\n              Choose the perfect plan for your needs\r\n            </Text>\r\n          </Stack>\r\n\r\n          <Group align=\"center\" gap=\"md\">\r\n            <Text>Monthly</Text>\r\n            <Switch\r\n              size=\"lg\"\r\n              color=\"var(--mantine-primary-color-filled)\"\r\n              checked={isYearly}\r\n              onChange={() => setIsYearly(!isYearly)}\r\n              className={classes.billingSwitch}\r\n            />\r\n            <Text>Yearly</Text>\r\n          </Group>\r\n\r\n          <Grid gutter=\"xl\" w=\"90%\">\r\n            {plans.map((plan) => (\r\n              <Grid.Col key={plan.name} span={{ base: 12, lg: 6 }}>\r\n                <Card\r\n                  withBorder\r\n                  radius=\"lg\"\r\n                  className={`${classes.pricingCard} ${plan.recommended ? classes.recommendedCard : \"\"}`}\r\n                  style={{ overflow: \"visible\" }}\r\n                >\r\n                  <Stack gap=\"xl\" h={\"100%\"}>\r\n                    <Group justify=\"space-between\" align=\"start\">\r\n                      <Stack gap=\"xs\">\r\n                        <Title order={1} fw={600} className={classes.planTitle}>\r\n                          {plan.name}\r\n\r\n                          {plan.recommended && <Box className={classes.recommendedBadge}>Most Popular</Box>}\r\n                        </Title>\r\n                        <Text c=\"dimmed\" size=\"md\">\r\n                          {plan.subtitle}\r\n                        </Text>\r\n                      </Stack>\r\n                      <Stack align=\"end\" gap={4}>\r\n                        <Text fz={\"h1\"} fw={600} className={classes.price} lh={\"lg\"}>\r\n                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}\r\n                        </Text>\r\n                        <Text c=\"dimmed\" size=\"sm\">\r\n                          Billed {isYearly ? \"yearly\" : \"monthly\"}\r\n                        </Text>\r\n                      </Stack>\r\n                    </Group>\r\n\r\n                    <Divider />\r\n\r\n                    <Stack gap=\"md\" mb={\"xs\"}>\r\n                      {plan.features.map((feature) => (\r\n                        <Group key={feature} gap=\"md\" align=\"center\">\r\n                          <CheckCircledIcon color=\"var(--mantine-primary-color-6)\" />\r\n                          <Text>{feature}</Text>\r\n                        </Group>\r\n                      ))}\r\n                    </Stack>\r\n\r\n                    <Button\r\n                      className=\"mt-auto\"\r\n                      size=\"lg\"\r\n                      variant=\"filled\"\r\n                      color={plan.badgeColor}\r\n                      rightSection={<ArrowRightIcon />}\r\n                      fullWidth\r\n                    >\r\n                      Get Started\r\n                    </Button>\r\n                  </Stack>\r\n                </Card>\r\n              </Grid.Col>\r\n            ))}\r\n          </Grid>\r\n        </Stack>\r\n      </Container>\r\n    </Box>\r\n  );\r\n};\r\n"
      },
      {
        "fileName": "pricing1.module.css",
        "language": "scss",
        "code": ".pricingWrapper {\r\n  background-color: var(--mantine-body-color);\r\n  padding: 4rem 0;\r\n}\r\n\r\n.mainTitle {\r\n  font-size: 3rem;\r\n  font-weight: 900;\r\n  background: linear-gradient(45deg, var(--mantine-primary-color-filled), var(--mantine-primary-color-0));\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.mainSubtitle {\r\n  font-size: 1.2rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.billingSwitch {\r\n  transform: scale(1.2);\r\n  margin: 0 1rem;\r\n}\r\n\r\n.pricingCard {\r\n  background-color: var(--mantine-body-color);\r\n  border: 2px solid var(--mantine-color-gray-2);\r\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);\r\n  transition: all 0.3s ease;\r\n  padding: 2rem;\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.pricingCard:hover {\r\n  transform: translateY(-10px);\r\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.recommendedCard {\r\n  border-color: var(--mantine-color-default-border);\r\n}\r\n\r\n.recommendedBadge {\r\n  position: absolute;\r\n  top: -12px;\r\n  right: 4px;\r\n  background-color: var(--mantine-primary-color-light);\r\n  color: var(--mantine-color-text);\r\n  padding: 0rem 0.6rem;\r\n  border-radius: 99px;\r\n  font-size: 0.6rem;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  z-index: 10;\r\n  letter-spacing: 2px;\r\n  line-height: rem(24px);\r\n\r\n  background: linear-gradient(45deg, var(--mantine-primary-color-filled), var(--mantine-primary-color-0));\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.planTitle {\r\n  color: var(--mantine-primary-color-4);\r\n}\r\n\r\n.price {\r\n  background: linear-gradient(45deg, var(--mantine-primary-color-8), var(--mantine-primary-color-4));\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n"
      }
    ],
    "attributes": {
      "title": "pricing1",
      "category": "pricing",
      "canvas": {
        "center": true,
        "maxWidth": 1200
      },
      "order": 3
    }
  },
  {
    "component": "MeetOurTeam1",
    "slug": "meet-our-team1",
    "code": [
      {
        "fileName": "meet-our-team-1.tsx",
        "language": "tsx",
        "code": "import { Card, Avatar, Text, Group, Stack, Container, Title, SimpleGrid } from \"@mantine/core\";\r\nimport { LinkedInLogoIcon, TwitterLogoIcon, GitHubLogoIcon } from \"@radix-ui/react-icons\";\r\nimport classes from \"./meet-our-team-1.module.css\";\r\n\r\nconst teamMembers = [\r\n  {\r\n    name: \"Elena Rodriguez\",\r\n    role: \"Chief Executive Officer\",\r\n    bio: \"Visionary leader with 15 years of tech innovation experience.\",\r\n    image: \"https://www.shadcnblocks.com/images/block/avatar-1.webp\",\r\n    socials: {\r\n      linkedin: \"#\",\r\n      twitter: \"#\",\r\n      github: \"#\",\r\n    },\r\n  },\r\n  {\r\n    name: \"Marcus Chen\",\r\n    role: \"Chief Technology Officer\",\r\n    bio: \"Engineering maestro driving cutting-edge technological solutions.\",\r\n    image: \"https://www.shadcnblocks.com/images/block/avatar-2.webp\",\r\n    socials: {\r\n      linkedin: \"#\",\r\n      twitter: \"#\",\r\n      github: \"#\",\r\n    },\r\n  },\r\n  {\r\n    name: \"Aria Patel\",\r\n    role: \"Design Director\",\r\n    bio: \"Creative genius transforming complex ideas into elegant designs.\",\r\n    image: \"https://www.shadcnblocks.com/images/block/avatar-3.webp\",\r\n    socials: {\r\n      linkedin: \"#\",\r\n      twitter: \"#\",\r\n      github: \"#\",\r\n    },\r\n  },\r\n  {\r\n    name: \"Jackson Wright\",\r\n    role: \"Product Strategy Lead\",\r\n    bio: \"Strategic mastermind connecting user needs with business goals.\",\r\n    image: \"https://www.shadcnblocks.com/images/block/avatar-4.webp\",\r\n    socials: {\r\n      linkedin: \"#\",\r\n      twitter: \"#\",\r\n      github: \"#\",\r\n    },\r\n  },\r\n];\r\n\r\ninterface IMember {\r\n  name: string;\r\n  role: string;\r\n  bio: string;\r\n  image: string;\r\n  socials: {\r\n    linkedin: string;\r\n    twitter: string;\r\n    github: string;\r\n  };\r\n}\r\n\r\nconst TeamMemberCard = ({ member }: { member: IMember }) => {\r\n  return (\r\n    <Card shadow=\"lg\" radius=\"md\" className={classes.teamMemberCard} padding=\"xl\">\r\n      <Stack align=\"center\" gap=\"md\">\r\n        <Avatar src={member.image} size={120} radius=\"50%\" className={classes.memberAvatar} />\r\n\r\n        <Stack align=\"center\" gap=\"xs\">\r\n          <Title order={3} className={classes.memberName}>\r\n            {member.name}\r\n          </Title>\r\n          <Text c=\"dimmed\" ta={\"center\"} className={classes.memberRole}>\r\n            {member.role}\r\n          </Text>\r\n        </Stack>\r\n\r\n        <Text\r\n          ta=\"center\"\r\n          c={\"light-dark(var(--mantine-color-dark-6), var(--mantine-color-dark-4)\"}\r\n          className={classes.memberBio}\r\n        >\r\n          {member.bio}\r\n        </Text>\r\n\r\n        <Group gap=\"md\" className={classes.socialIcons}>\r\n          <a href={member.socials.linkedin} target=\"_blank\" rel=\"noopener noreferrer\">\r\n            <LinkedInLogoIcon width={24} height={24} />\r\n          </a>\r\n          <a href={member.socials.twitter} target=\"_blank\" rel=\"noopener noreferrer\">\r\n            <TwitterLogoIcon width={24} height={24} />\r\n          </a>\r\n          <a href={member.socials.github} target=\"_blank\" rel=\"noopener noreferrer\">\r\n            <GitHubLogoIcon width={24} height={24} />\r\n          </a>\r\n        </Group>\r\n      </Stack>\r\n    </Card>\r\n  );\r\n};\r\n\r\nexport const MeetOurTeam1 = () => {\r\n  return (\r\n    <Container size=\"xl\" py=\"xl\">\r\n      <Stack align=\"center\" mb=\"xl\">\r\n        <Title order={1} className={classes.sectionTitle}>\r\n          Meet Our Extraordinary Team\r\n        </Title>\r\n        <Text c=\"dimmed\" ta=\"center\" maw={600}>\r\n          Behind every breakthrough is a passionate team of innovators, dedicated to pushing the boundaries of what's\r\n          possible.\r\n        </Text>\r\n      </Stack>\r\n\r\n      <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing=\"xl\">\r\n        {teamMembers.map((member, index) => (\r\n          <TeamMemberCard key={index} member={member} />\r\n        ))}\r\n      </SimpleGrid>\r\n    </Container>\r\n  );\r\n};\r\n"
      },
      {
        "fileName": "meet-our-team-1.module.css",
        "language": "scss",
        "code": ".teamMemberCard {\r\n  transition: all 0.3s ease;\r\n  background: linear-gradient(145deg, var(--mantine-body-color), var(--mantine-color-gray-2));\r\n  border: 1px solid var(--mantine-color-default-border);\r\n}\r\n\r\n.teamMemberCard:hover {\r\n  transform: translateY(-10px);\r\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.memberAvatar {\r\n  border: 4px solid #fff;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.memberName {\r\n  color: var(--mantine-primary-color-5);\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n.memberRole {\r\n  text-transform: uppercase;\r\n  font-size: 0.8rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.memberBio {\r\n  font-style: italic;\r\n  text-align: center;\r\n}\r\n\r\n.socialIcons svg {\r\n  color: light-dark(var(--mantine-primary-color-7), var(--mantine-primary-color-5));\r\n  opacity: 0.7;\r\n}\r\n\r\n.socialIcons a {\r\n  transition: color 0.3s ease;\r\n}\r\n\r\n.socialIcons a:hover svg {\r\n  opacity: 1;\r\n}\r\n\r\n.sectionTitle {\r\n  background: linear-gradient(45deg, var(--mantine-primary-color-filled), #2c3e50);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  font-weight: 900;\r\n  text-align: center;\r\n}\r\n"
      }
    ],
    "attributes": {
      "title": "meet-our-team-1",
      "category": "team",
      "canvas": {
        "center": true,
        "maxWidth": 1200
      },
      "order": 4
    }
  },
  {
    "component": "ComingSoon",
    "slug": "coming-soon",
    "code": [
      {
        "fileName": "coming-soon.tsx",
        "language": "tsx",
        "code": "import { Box, Container, Text, Group, Stack } from \"@mantine/core\";\r\nimport styles from \"./coming-soon.module.css\";\r\n\r\nexport const ComingSoon = () => {\r\n  return (\r\n    <Box>\r\n      <Container size=\"md\" className={styles.container}>\r\n        <Stack gap=\"xl\" align=\"center\">\r\n          <Group ta={\"center\"} justify=\"center\" gap={\"xl\"}>\r\n            <Text fz={\"4rem\"} fw={600} lh={\"4rem\"} className={styles.title} ta={\"center\"}>\r\n              Coming Soon..\r\n            </Text>\r\n            <Text c={\"dimmed\"} maw={\"380\"}>\r\n              We're working hard to bring you more awesome block. Stay tuned for updates!\r\n            </Text>\r\n          </Group>\r\n        </Stack>\r\n      </Container>\r\n    </Box>\r\n  );\r\n};\r\n"
      },
      {
        "fileName": "coming-soon.module.css",
        "language": "scss",
        "code": ".container {\r\n  padding: 4rem 1rem;\r\n}\r\n\r\n.title {\r\n  background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n"
      }
    ],
    "attributes": {
      "title": "coming-soon",
      "category": "coming-soon",
      "canvas": {
        "center": true,
        "maxWidth": 1200
      },
      "order": 5
    }
  }
];