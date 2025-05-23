
# Mantine Hub - Modern Themes, UI Blocks, Templates and much more

**Mantine Hub(previously Theme Builder)** is a complimentary tool for developers to make UI development with Mantine much more faster and easier. Initially created as an experimental project to simplify the process of modernizing Mantine's styling, MantineHub offers pre-configured themes inspired by Shadcn. With MantineHub, developers can quickly integrate modern styling into their projects by copying and pasting the theme configuration.

Due to the overwhelming positive feedback and community endorsment we’ve received, MantineHub has evolved into a comprehensive toolkit. It now supports all Mantine components and introduces exciting new features like Blocks—pre-built UI components designed to seamlessly work with the generated themes.

![image](https://github.com/user-attachments/assets/0b673eec-ed49-4928-a021-5bee7d0ec8e3)

## Deep Wiki

[Visit Documentation](https://deepwiki.com/RubixCube-Innovations/mantine-theme-builder)

## Features

- **Customizable Styles**: Choose from a selection of predefined styles to quickly update the look of your UI.
- **Color Palette**: Pick from a wide range of color themes like Zinc, Slate, Gray, and more.
- **Radius Control**: Adjust the border radius to match your desired look, from sharp corners to fully rounded elements.
- **Light/Dark Mode**: Toggle between light and dark themes for quick previews and real-time visualizations.
- **Export Theme**: Copy the generated Mantine theme object and integrate it directly into your project.

## Getting Started

To use **Mantine Theme Builder** in your project, follow these steps:

1. Set up a new project with Mantine by following the [official Mantine documentation](https://mantine.dev/getting-started/):

2. Once your project is set up, open the `MantineProvider` (usually in `src/App.js` or `src/App.tsx`).

3. Copy the generated theme object from the **Mantine Theme Builder** website.

4. Replace or extend the theme object in your `MantineProvider` as follows:

   ```javascript
   import { MantineProvider } from '@mantine/core';
   import { yourCustomTheme } from './your-custom-theme';

   function App() {
     return (
       <MantineProvider theme={yourCustomTheme}>
         <YourAppComponents />
       </MantineProvider>
     );
   }

   export default App;
   ```

5. That's it! Your project will now use the customized theme.

## How to Use

1. Open **Mantine Theme Builder** and select from the available style presets or color themes to start building your Mantine theme.
2. Customize the border radius values for rounded corners.
3. Toggle between light and dark modes for your UI components.
4. Once you're satisfied, copy the theme object code and use it in your project.

## Contribution

We welcome contributions from the community! Feel free to submit issues or pull requests to improve this project. See our [Contribution Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=rubixcube-innovations/mantine-theme-builder&type=Date)](https://star-history.com/#rubixcube-innovations/mantine-theme-builder&Date)

## Keywords

- Mantine Theme Builder
- Mantine Custom Theme
- Mantine UI Components
- Mantine Light/Dark Mode
- Mantine Customizable Themes
- Mantine Modern UI Themes
- Mantine Style Presets
- shadcn-like Mantine Themes
- Mantine Theme Exporter
- Mantine Theme Generator
- Mantine Shadcn Themes
- Shadcn Themes for Mantine
