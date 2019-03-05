import * as React from 'react'
import * as css from './app.css'

import { Normalize } from '../src/styles/normalize/normalize'
import { Paper } from '../src/surfaces/paper'

type Props = {}

export function App(props: Props) {
  return (
    <React.Fragment>
      <Normalize />
      <main className={css.main}>
        <h1>Ignitic</h1>
        <h2>Paper</h2>
        <Paper>
          <div style={{ minWidth: 300, minHeight: 300, padding: 24 }}>
            <p>This is a paper</p>
          </div>
        </Paper>
      </main>
    </React.Fragment>
  )
}
