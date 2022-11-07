
import React from 'react'
import { render } from 'react-dom'

import App from '../react/components/App'
import RedBox from 'redbox-react'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        render(<App />, reactElement)
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      render(<App />, reactElement)
    }
  }
})// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
