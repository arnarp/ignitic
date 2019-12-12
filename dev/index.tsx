import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './app'
import { IgniticSettingsContext } from '../src/context/ignitic-settings-context'
import { ScreenContextProvider } from '../src/context/screen-context-provider'

declare global {
  const enum Env {
    Prod = 'production',
    Dev = 'development'
  }
  interface HTMLElement {
    inert: boolean
  }
  namespace NodeJS {
    interface ProcessEnv {
      env: {
        NODE_ENV: Env
      }
    }
  }
}

const container = document.getElementById('root') as HTMLElement

ReactDOM.render(
  <IgniticSettingsContext.Provider value={{ container }}>
    <ScreenContextProvider>
      <App />
    </ScreenContextProvider>
  </IgniticSettingsContext.Provider>,
  container
)
