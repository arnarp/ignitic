import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './app'

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

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
