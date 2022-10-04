import { IgniticContextProvider, Normalize } from '../src/core'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <IgniticContextProvider container={document.getElementById('root')}>
      <Normalize />
      <Story />
    </IgniticContextProvider>
  ),
]
