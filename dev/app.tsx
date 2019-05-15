import { Link, Router } from '@reach/router'
import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'

import { version } from '../package.json'
import { linkStyles } from '../src/core/link'
import { H1, H2, H3 } from '../src/core/text'
import { useLocalStorage } from '../src/hooks/use-local-storage'
import { Normalize } from '../src/styles/normalize/normalize'
import * as css from './app.css'
import { Core } from './routes/core'
import { Inputs } from './routes/inputs'
import { Layout } from './routes/layout'
import { Popups } from './routes/popups'
import { Surfaces } from './routes/surfaces'

type Props = {}
type Theme = 'light' | 'dark'

export function App(props: Props) {
  const [theme, setTheme] = useLocalStorage<Theme>({
    key: 'theme',
    defaultValue: 'light'
  })
  React.useEffect(() => {
    if (theme == 'dark') {
      document.body.classList.add(css.dark)
    } else {
      document.body.classList.remove(css.dark)
    }
  })
  return (
    <React.Fragment>
      <Normalize />
      <div className={cn(css.container)}>
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
          <H2 color="primary">{version}</H2>
          <nav>
            <H3 variant="h4">Core</H3>
            <Link className={linkStyles.neutral} to="/core/text">
              Text
            </Link>
            <Link className={linkStyles.neutral} to="/core/button">
              Button
            </Link>
            <Link className={linkStyles.neutral} to="/core/icon-button">
              IconButton
            </Link>
            <H3 variant="h4">Inputs</H3>
            <Link className={linkStyles.neutral} to="/inputs/switch">
              Switch
            </Link>
            <H3 variant="h4">Layout</H3>
            <Link className={linkStyles.neutral} to="/layout/flex">
              Flex
            </Link>
            <H3 variant="h4">Surfaces</H3>
            <Link className={linkStyles.neutral} to="/surfaces/surface">
              Surface
            </Link>
            <Link className={linkStyles.neutral} to="/surfaces/paper">
              Paper
            </Link>
            <H3 variant="h4">Popups</H3>
            <Link className={linkStyles.neutral} to="/popups/tooltip">
              Tooltip
            </Link>
          </nav>
        </div>
        <div className={css.sidebar2} />
        <main className={css.main}>
          <Router>
            <Core path="/core/*" />
            <Surfaces path="/surfaces/*" />
            <Popups path="/popups/*" />
            <Inputs path="/inputs/*" />
            <Layout path="/layout/*" />
          </Router>
        </main>
        <footer className={css.footer} />
      </div>
    </React.Fragment>
  )
}
