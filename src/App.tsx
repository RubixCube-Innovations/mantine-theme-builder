import { Container, Text, Title, Box, Stack } from '@mantine/core'
import MantineCards from './components/cards/mantine-cards'

export default function ThemesPage() {
  return (
    <Container size="xl" px="md" py={"xl"} h={"100%"}>
      <Stack align="flex-start" h={"100%"}>
        <Box>
          <Title order={1}>
            Mantine Theme Builder
          </Title>
          <Text>
            Hand-picked shadcn inspired themes that you can copy and paste into your apps build with Mantine.
          </Text>
          <Box>
            {/* ThemeCustomizer can be ignored */}
          </Box>
        </Box>
       <MantineCards/>

      </Stack>
    </Container>
  )
}