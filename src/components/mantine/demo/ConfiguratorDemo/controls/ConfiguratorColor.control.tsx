import {
  BoxProps,
  CheckIcon,
  ColorPicker,
  ColorSwatch,
  ElementProps,
  Group,
  Input,
  Popover,
  TextInput,
  UnstyledButton,
  useMantineTheme
} from '@mantine/core';
import { useState } from 'react';
import { getDefaultColors } from '../../../../../utils/functions';
import { ColorWheelIcon } from './ColorWheelIcon';
import classes from './ConfiguratorColor.control.module.css';
import { getControlLabel } from './get-control-label';
import { ConfiguratorControl } from './types';

export type ConfiguratorColorControlOptions = ConfiguratorControl<
  'color',
  { initialValue: string }
>;

export interface ConfiguratorColorControlProps
  extends BoxProps,
    ElementProps<'div', 'onChange' | 'value' | 'size'> {
  value: string;
  onChange: (value: string) => void;
  prop: string;
}

export function ConfiguratorColorControl({
  value,
  onChange,
  prop,
  ...others
}: ConfiguratorColorControlProps) {
  const [colorPickerColor, setColorPickerColor] = useState('#fff');

  const handleColorPickerChange = (color: string) => {
    setColorPickerColor(color);
    onChange(color);
  };

  const theme = useMantineTheme();

  
  const colors = getDefaultColors(theme.other.style)
    .filter((color) => color.id !== 'dark' && color.id !== 'secondary')
    .map((color) => {
      return  <ColorSwatch
      color={`var(--mantine-color-${color.id}-filled)`}
      component="button"
      key={color.id}
      onClick={() => onChange(color.id)}
      radius="sm"
      className={classes.swatch}
      aria-label={color.id}
    >
      {value === color.id && <CheckIcon className={classes.check} />}
    </ColorSwatch>
    }
     
    );

    console.log(colors);
  return (
    <Input.Wrapper labelElement="div" label={getControlLabel(prop)} {...others}>
      <Group gap={2} mt={2} wrap="wrap">
        {colors}
        <Popover radius="md" position="bottom-end" shadow="md">
          <Popover.Target>
            <UnstyledButton className={classes.colorControl} aria-label="Pick color">
              <ColorWheelIcon />
            </UnstyledButton>
          </Popover.Target>

          <Popover.Dropdown p={8}>
            <ColorPicker
              value={colorPickerColor}
              onChange={handleColorPickerChange}
              format="rgba"
            />
            <TextInput
              value={colorPickerColor}
              onChange={(event) => handleColorPickerChange(event.currentTarget.value)}
              placeholder="Enter color"
              radius="md"
              size="xs"
              mt="xs"
            />
          </Popover.Dropdown>
        </Popover>
      </Group>
    </Input.Wrapper>
  );
}
