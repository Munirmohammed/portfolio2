import * as React from 'react'
import {Outlet} from 'react-router'

function IndexRoute() {
  return (
    <div>
      INDEX
      <Outlet />
    </div>
  )
}

export default IndexRoute
