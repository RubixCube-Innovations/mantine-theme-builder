export const components = [
  {
    component: "Feature1",
    slug: "feature1",
    code: [
      {
        fileName: "feature1.tsx",
        language: "tsx",
        code: 'import { Grid, Card, Text, Title, Center, Box } from "@mantine/core";\r\nimport { ZoomInIcon, BarChartIcon, CircleIcon, HandIcon, LayersIcon, BellIcon } from "@radix-ui/react-icons";\r\n\r\nconst reasons = [\r\n  {\r\n    title: "Quality",\r\n    description:\r\n      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",\r\n    icon: <ZoomInIcon />,\r\n  },\r\n  {\r\n    title: "Experience",\r\n    description:\r\n      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",\r\n    icon: <BarChartIcon />,\r\n  },\r\n  {\r\n    title: "Support",\r\n    description:\r\n      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",\r\n    icon: <CircleIcon />,\r\n  },\r\n  {\r\n    title: "Innovation",\r\n    description:\r\n      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",\r\n    icon: <HandIcon />,\r\n  },\r\n  {\r\n    title: "Results",\r\n    description:\r\n      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",\r\n    icon: <LayersIcon />,\r\n  },\r\n  {\r\n    title: "Efficiency",\r\n    description:\r\n      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",\r\n    icon: <BellIcon />,\r\n  },\r\n];\r\n\r\nexport const Feature1 = () => {\r\n  return (\r\n    <Box py={96}>\r\n      <Box className="container mx-auto">\r\n        <Box mb={40}>\r\n          <Title order={2} ta="center" fz={{ base: 24, lg: 40 }} fw={600}>\r\n            Why Work With Us?\r\n          </Title>\r\n        </Box>\r\n        <Grid gutter={40}>\r\n          {reasons.map((reason, i) => (\r\n            <Grid.Col key={i} span={{ base: 12, md: 6, lg: 3 }}>\r\n              <Card p="lg" shadow="sm" radius="md" withBorder>\r\n                <Center mb={20}>{reason.icon}</Center>\r\n                <Title order={3} mb={10}>\r\n                  {reason.title}\r\n                </Title>\r\n                <Text color="dimmed">{reason.description}</Text>\r\n              </Card>\r\n            </Grid.Col>\r\n          ))}\r\n        </Grid>\r\n      </Box>\r\n    </Box>\r\n  );\r\n};\r\n',
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
  {
    component: "Hero1",
    slug: "hero1",
    code: [
      {
        fileName: "hero1.tsx",
        language: "tsx",
        code: 'import { Badge, Box, Container, Flex, Grid, Image } from "@mantine/core";\r\nimport { Button } from "@mantine/core";\r\n\r\nexport const Hero1 = () => {\r\n  return (\r\n    <Container mx="auto" maw={1200}>\r\n      <Grid>\r\n        <Grid.Col span={{ base: 12, lg: 6 }}>\r\n          <Flex direction="column" align="center" justify="center" ta="center">\r\n            <Badge variant="outline" display="flex" ta="center">\r\n              New Release\r\n              <Image src="" ml={8} fz={16} />\r\n            </Badge>\r\n            <Box mt={24} fz={40} fw="bold">\r\n              Welcome to Our Website\r\n            </Box>\r\n            <Box mb={32} maw={600} fz={18} color="#6b7280">\r\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro\r\n              facilis quo animi consequatur. Explicabo.\r\n            </Box>\r\n            <Flex direction="column" align="center" gap={8} w="100%">\r\n              <Button w="100%">Primary Button</Button>\r\n              <Button variant="outline" w="100%">\r\n                Secondary Button\r\n                <Image src="" ml={8} fz={16} />\r\n              </Button>\r\n            </Flex>\r\n          </Flex>\r\n        </Grid.Col>\r\n        <Grid.Col span={{ base: 12, lg: 6 }}>\r\n          <Image src="/api/placeholder/400/320" alt="placeholder hero" mih={384} w="100%" radius={8} fit="cover" />\r\n        </Grid.Col>\r\n      </Grid>\r\n    </Container>\r\n  );\r\n};\r\n',
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
    component: "Pricing1",
    slug: "pricing1",
    code: [
      {
        fileName: "pricing1.tsx",
        language: "tsx",
        code: 'import { useState } from "react";\r\nimport { ArrowRightIcon, CheckCircledIcon } from "@radix-ui/react-icons";\r\nimport { Box, Button } from "@mantine/core";\r\nimport { Card, CardSection, Text, Title, Divider, Switch, Grid } from "@mantine/core";\r\n\r\nexport const Pricing1 = () => {\r\n  const [isYearly, setIsYearly] = useState(false);\r\n\r\n  return (\r\n    <Box py={96}>\r\n      <Box className="container mx-auto flex flex-col items-center gap-24 text-center">\r\n        <Box>\r\n          <Title order={2} mb={8} fz={{ base: 24, lg: 40 }} fw={700}>\r\n            Pricing\r\n          </Title>\r\n          <Text color="dimmed" fz={{ base: 16, lg: 20 }}>\r\n            Check out our affordable pricing plans\r\n          </Text>\r\n        </Box>\r\n        <Box className="flex items-center gap-3 text-lg">\r\n          Monthly\r\n          <Switch checked={isYearly} onChange={() => setIsYearly(!isYearly)} />\r\n          Yearly\r\n        </Box>\r\n        <Grid gutter={24} justify="center">\r\n          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>\r\n            <Card shadow="sm" radius="md" withBorder>\r\n              <CardSection>\r\n                <Box p="lg">\r\n                  <Title order={3} mb={4}>\r\n                    Plus\r\n                  </Title>\r\n                  <Text color="dimmed" fz="sm">\r\n                    For personal use\r\n                  </Text>\r\n                  <Text fz={32} fw={700} mt={8}>\r\n                    {isYearly ? "$15" : "$19"}\r\n                  </Text>\r\n                  <Text color="dimmed">Billed {isYearly ? "$180" : "$228"} annually</Text>\r\n                </Box>\r\n              </CardSection>\r\n              <CardSection p="lg">\r\n                <Divider mb={24} />\r\n                <ul className="space-y-16">\r\n                  <li className="flex items-center gap-8">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className="flex items-center gap-8">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className="flex items-center gap-8">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className="flex items-center gap-8">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                </ul>\r\n              </CardSection>\r\n              <CardSection p="lg" mt="auto">\r\n                <Button fullWidth leftSection={<ArrowRightIcon />}>\r\n                  Get Started\r\n                </Button>\r\n              </CardSection>\r\n            </Card>\r\n          </Grid.Col>\r\n          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>\r\n            <Card shadow="sm" radius="md" withBorder>\r\n              <CardSection>\r\n                <Box p="lg">\r\n                  <Title order={3} mb={4}>\r\n                    Pro\r\n                  </Title>\r\n                  <Text color="dimmed" fz="sm">\r\n                    For professionals\r\n                  </Text>\r\n                  <Text fz={32} fw={700} mt={8}>\r\n                    {isYearly ? "$35" : "$49"}\r\n                  </Text>\r\n                  <Text color="dimmed">Billed {isYearly ? "$420" : "$588"} annually</Text>\r\n                </Box>\r\n              </CardSection>\r\n              <CardSection p="lg">\r\n                <Divider mb={24} />\r\n                <Text mb={12} fz="lg" fw={600}>\r\n                  Everything in Plus, and:\r\n                </Text>\r\n                <ul className="space-y-16">\r\n                  <li className="flex items-center gap-8">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className="flex items-center gap-8">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className="flex items-center gap-8">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                  <li className="flex items-center gap-8">\r\n                    <CheckCircledIcon />\r\n                    <Text>Lorem ipsum dolor sit.</Text>\r\n                  </li>\r\n                </ul>\r\n              </CardSection>\r\n              <CardSection p="lg" mt="auto">\r\n                <Button fullWidth leftSection={<ArrowRightIcon />}>\r\n                  Get Started\r\n                </Button>\r\n              </CardSection>\r\n            </Card>\r\n          </Grid.Col>\r\n        </Grid>\r\n      </Box>\r\n    </Box>\r\n  );\r\n};\r\n',
      },
    ],
    attributes: {
      title: "pricing1",
      category: "pricing",
      canvas: {
        center: true,
        maxWidth: 1200,
      },
    },
  },
  {
    component: "ComingSoon",
    slug: "coming-soon",
    code: [
      {
        fileName: "coming-soon.tsx",
        language: "tsx",
        code: 'import { useState, useEffect } from "react";\r\nimport { Box, Container, Title, Text, TextInput, Button, Group, Stack } from "@mantine/core";\r\nimport { MagnifyingGlassIcon, TwitterLogoIcon, InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";\r\n\r\nexport const ComingSoon = () => {\r\n  const [timeLeft, setTimeLeft] = useState({\r\n    days: 0,\r\n    hours: 0,\r\n    minutes: 0,\r\n    seconds: 0,\r\n  });\r\n\r\n  // Set your launch date here\r\n  const launchDate = new Date("2024-12-31T00:00:00");\r\n\r\n  useEffect(() => {\r\n    const timer = setInterval(() => {\r\n      const now = new Date().getTime();\r\n      const distance = launchDate.getTime() - now;\r\n\r\n      setTimeLeft({\r\n        days: Math.floor(distance / (1000 * 60 * 60 * 24)),\r\n        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),\r\n        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),\r\n        seconds: Math.floor((distance % (1000 * 60)) / 1000),\r\n      });\r\n    }, 1000);\r\n\r\n    return () => clearInterval(timer);\r\n  }, []);\r\n\r\n  const TimeBox = ({ value, label }: { value: any; label: string }) => (\r\n    <Box className="text-center p-4 bg-gray-100 rounded-lg min-w-[100px]">\r\n      <Text className="text-4xl font-bold">{value}</Text>\r\n      <Text className="text-sm text-gray-600">{label}</Text>\r\n    </Box>\r\n  );\r\n\r\n  return (\r\n    <Box className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center">\r\n      <Container size="md" className="py-16">\r\n        <Stack gap="xl" align="center">\r\n          {/* Header */}\r\n          <Title order={1} className="text-center text-4xl md:text-5xl font-bold mb-4">\r\n            Something Amazing Is Coming Soon\r\n          </Title>\r\n          <Text className="text-center text-gray-600 text-lg mb-8 max-w-xl">\r\n            We\'re working hard to bring you something awesome. Stay tuned for updates!\r\n          </Text>\r\n\r\n          {/* Countdown Timer */}\r\n          <Group gap="lg" className="mb-12">\r\n            <TimeBox value={timeLeft.days} label="Days" />\r\n            <TimeBox value={timeLeft.hours} label="Hours" />\r\n            <TimeBox value={timeLeft.minutes} label="Minutes" />\r\n            <TimeBox value={timeLeft.seconds} label="Seconds" />\r\n          </Group>\r\n\r\n          {/* Email Signup */}\r\n          <Box className="w-full max-w-md">\r\n            <Group gap={8}>\r\n              <TextInput\r\n                placeholder="Enter your email"\r\n                leftSection={<MagnifyingGlassIcon />}\r\n                className="flex-grow"\r\n                radius="md"\r\n                size="lg"\r\n              />\r\n              <Button size="lg" radius="md">\r\n                Notify Me\r\n              </Button>\r\n            </Group>\r\n          </Box>\r\n\r\n          {/* Social Links */}\r\n          <Group gap="lg" mt="xl">\r\n            <Button\r\n              variant="subtle"\r\n              color="gray"\r\n              radius="xl"\r\n              className="hover:bg-gray-200 transition-colors"\r\n              onClick={() => window.open("https://twitter.com", "_blank")}\r\n            >\r\n              <TwitterLogoIcon />\r\n            </Button>\r\n            <Button\r\n              variant="subtle"\r\n              color="gray"\r\n              radius="xl"\r\n              className="hover:bg-gray-200 transition-colors"\r\n              onClick={() => window.open("https://instagram.com", "_blank")}\r\n            >\r\n              <InstagramLogoIcon />\r\n            </Button>\r\n            <Button\r\n              variant="subtle"\r\n              color="gray"\r\n              radius="xl"\r\n              className="hover:bg-gray-200 transition-colors"\r\n              onClick={() => window.open("https://github.com", "_blank")}\r\n            >\r\n              <GitHubLogoIcon />\r\n            </Button>\r\n          </Group>\r\n        </Stack>\r\n      </Container>\r\n    </Box>\r\n  );\r\n};\r\n',
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
