import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Inventory from './inventory'
import Icon from './icon'
const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/inventory' component={Inventory} />
      </BrowserRouter>
      <Link to='/inventory'>
        <Icon />
      </Link>

      <p className='shopIn'>Shop Now Pick up Later Or Get it Delivered!</p>
    </div>
  )
}
export default Home
