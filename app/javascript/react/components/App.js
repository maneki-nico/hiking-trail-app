import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import TrailsIndexContainer from './TrailsIndexContainer'
import NewTrailForm from './NewTrailForm'
import TrailShowContainer from './TrailShowContainer'
import UserShow from './UserShow'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TrailsIndexContainer} />
          <Route exact path="/trails" component={TrailsIndexContainer} />
          <Route exact path="/trails/new" component={NewTrailForm} />
          <Route exact path="/trails/:trailId" component={TrailShowContainer} />
          <Route exact path="/users/:userId" component={UserShow} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
