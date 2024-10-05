
# Mantine Theme Builder

**Mantine Theme Builder** is an open-source project that lets developers easily create and customize modern themes for Mantine components. Inspired by the shadcn themes, this tool is perfect for developers who want a fast and intuitive way to style their Mantine-based UI.

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
