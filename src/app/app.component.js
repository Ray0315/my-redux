import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function AppComponent({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
        {' '}
        <Link to="/menu">Menu</Link>
        {' '}
        <Link to="/test">Test</Link>
        {' '}
        <Link to="/ajax">Ajax</Link>
        {' '}
        <Link to="/userInfo">UserInfo</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}
