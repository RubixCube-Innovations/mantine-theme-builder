export function generateColorPalette(baseName: string, colors: string[]) {
    return colors.reduce((palette, color, index) => {
      const key = index === 0 ? `${baseName}50` : `${baseName}${index * 100}`;
      palette[key] = color;
      return palette;
    }, {} as Record<string, string>);
  }
  
export function generateColorArray(colorObject: Record<string, string>, baseName: string): [string, string, string, string, string, string, string, string, string, string] {
    return [
      colorObject[`${baseName}50`],
      colorObject[`${baseName}100`],
      colorObject[`${baseName}200`],
      colorObject[`${baseName}300`],
      colorObject[`${baseName}400`],
      colorObject[`${baseName}500`],
      colorObject[`${baseName}600`],
      colorObject[`${baseName}700`],
      colorObject[`${baseName}800`],
      colorObject[`${baseName}900`],
    ];
  }