import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import TrailsIndexContainer from './TrailsIndexContainer'
import TrailShowContainer from './TrailShowContainer'
import UserShowContainer from './UserShowContainer'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TrailsIndexContainer} />
          <Route exact path="/trails" component={TrailsIndexContainer} />
          <Route exact path="/trails/:trailId" component={TrailShowContainer} />
          <Route exact path="/users/:userId" component={UserShowContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
