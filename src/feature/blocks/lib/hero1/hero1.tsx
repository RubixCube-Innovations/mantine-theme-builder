import { Badge, Box, Container, Flex, Grid, Image } from "@mantine/core";
import { Button } from "@mantine/core";

export const Hero1 = () => {
  return (
    <Container mx="auto" maw={1200}>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Flex direction="column" align="center" justify="center" ta="center">
            <Badge variant="outline" display="flex" ta="center">
              New Release
              <Image src="" ml={8} fz={16} />
            </Badge>
            <Box mt={24} fz={40} fw="bold">
              Welcome to Our Website
            </Box>
            <Box mb={32} maw={600} fz={18} color="#6b7280">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro
              facilis quo animi consequatur. Explicabo.
            </Box>
            <Flex direction="column" align="center" gap={8} w="100%">
              <Button w="100%">Primary Button</Button>
              <Button variant="outline" w="100%">
                Secondary Button
                <Image src="" ml={8} fz={16} />
              </Button>
            </Flex>
          </Flex>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Image
           src="https://www.shadcnblocks.com/images/block/placeholder-1.svg" alt="placeholder hero" mih={384} w="100%" radius={8} fit="cover" />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
