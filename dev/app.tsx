import { Link, Router } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { version } from '../package.json'
import { H1, Text } from '../src/core/text'
import { useLocalStorage } from '../src/hooks/use-local-storage'
import { Normalize } from '../src/styles/normalize/normalize'
import * as css from './app.css'
import { Core } from './routes/core'
import { Popups } from './routes/popups'
import { Surfaces } from './routes/surfaces'

type Props = {}
type Theme = 'light' | 'dark'

export function App(props: Props) {
  const [theme, setTheme] = useLocalStorage<Theme>({
    key: 'theme',
    defaultValue: 'light'
  })
  return (
    <React.Fragment>
      <Normalize />
      <div
        className={cn(css.container, {
          [css.dark]: theme == 'dark'
        })}
      >
        <header role="banner" className={css.header}>
          <H1>Ignitic</H1>
          <form name="switch theme" noValidate autoComplete="off">
            <label>
              Light theme
              <input
                type="radio"
                name="theme"
                checked={theme == 'light'}
                onChange={() => {}}
                onClick={() => setTheme('light')}
              />
            </label>
            <label>
              Dark theme
              <input
                type="radio"
                name="theme"
                checked={theme == 'dark'}
                onChange={() => {}}
                onClick={() => setTheme('dark')}
              />
            </label>
          </form>
        </header>
        <div className={css.sidebar}>
          <Text as="h2">{version}</Text>
          <nav>
            <Text as="h3" variant="h4">
              Core
            </Text>
            <Link to="/core/text">Text</Link>
            <Text as="h3" variant="h4">
              Surfaces
            </Text>
            <Link to="/surfaces/paper">Paper</Link>
            <Text as="h3" variant="h4">
              Popups
            </Text>
            <Link to="/popups/tooltip">Tooltip</Link>
          </nav>
        </div>
        <div className={css.sidebar2} />
        <main className={css.main}>
          <Router>
            <Core path="/core/*" />
            <Surfaces path="/surfaces/*" />
            <Popups path="/popups/*" />
          </Router>
        </main>
        <footer className={css.footer} />
      </div>
    </React.Fragment>
  )
}
