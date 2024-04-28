import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes";
import { initialize, mswLoader } from 'msw-storybook-addon'
import "../src/index.css"

// Initialize MSW
initialize()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [withThemeByClassName({
    themes: {
      // nameOfTheme: 'classNameForTheme',
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  })],

  loaders: [mswLoader]
}

export default preview
