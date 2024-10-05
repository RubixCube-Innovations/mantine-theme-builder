import { SimpleGrid, Button } from "@mantine/core";
import { useState } from "react";

const colors = [
  "red",
  "pink",
  "grape",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "green",
  "lime",
];

function ColorSwitcher() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    console.log(`Color ${color} selected`);
    // Here you can add logic to apply the selected color to your app's theme
  };

  return (
    <SimpleGrid cols={5} spacing="xs">
      {colors.map((color) => (
        <Button
          key={color}
          style={(theme) => ({
            backgroundColor: theme.colors[color][6],
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: theme.colors[color][7],
            },
          })}
          onClick={() => handleColorSelect(color)}
        />
      ))}
    </SimpleGrid>
  );
}

export default ColorSwitcher;