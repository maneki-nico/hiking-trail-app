import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import TrailsIndexContainer from './TrailsIndexContainer'


const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TrailsIndexContainer} />
          <Route exact path="/trails" component={TrailsIndexContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
