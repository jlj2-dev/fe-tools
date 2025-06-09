import { Route, Switch } from 'wouter'
import './App.css'
import { ViteDemoPage } from './routes/vite-demo-page.tsx'
import { AboutPage } from './routes/about/about.tsx'

function App() {

  return (
    <Switch>
      <Route path="/vite-demo">
        <ViteDemoPage />
      </Route>
      <Route>
        <AboutPage />
      </Route>
    </Switch>
  )
}

export default App
