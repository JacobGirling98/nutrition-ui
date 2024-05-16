import { withThemeByClassName } from "@storybook/addon-themes"
import { initialize, mswLoader } from "msw-storybook-addon"
import "../src/index.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Initialize MSW
initialize()

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [
    withThemeByClassName({
      themes: {
        // nameOfTheme: 'classNameForTheme',
        light: "light",
        dark: "dark"
      },
      defaultTheme: "light"
    }),
    (story) => (
      <QueryClientProvider queryClient={new QueryClient()}>
        {story()}
      </QueryClientProvider>
    )
  ],

  loaders: [mswLoader]
}

export default preview
