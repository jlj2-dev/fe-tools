import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { Route, Switch } from 'wouter'
import { Jlj2DevTheme } from './constants/enums/jlj2-dev-theme.ts'
import { AboutPage } from './routes/about/about.tsx'
import { Base64EncoderPage } from './routes/base-64-encoder.tsx'
import { ViteDemoPage } from './routes/vite-demo-page.tsx'
import { themeState } from './state/theme.ts'
import { adjustTheme } from './utils/adjust-theme.ts'

import './App.css'

function App() {
  const [theme, setTheme] = useAtom(themeState)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      setTheme(Jlj2DevTheme.DARK)
    } else {
      setTheme(Jlj2DevTheme.LIGHT)
    }
  }, [setTheme])

  useEffect(() => {
    console.log(`Setting theme to ${theme}`)
    adjustTheme(theme)
  }, [theme])

  return (
    <Switch>
      <Route path="/vite-demo">
        <ViteDemoPage />
      </Route>
      <Route path="/base-64">
        <Base64EncoderPage />
      </Route>
      <Route>
        <AboutPage />
      </Route>
    </Switch>
  )
}

export default App
