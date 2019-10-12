import React, { Component } from 'react'
import CountryRegion from '../components/CountryRegion'
import UserForm from './UserForm'
import floatcss from './float.css'
import stylecss from './style.css'
import maincss from './main.css'

export class App extends Component {
  render() {
    return (
      
      <div>
          <h1> RAIN GL</h1>
         <UserForm/>
   
          <maincss/>
          <floatcss/>
          <stylecss/>


      </div>
    )
  }
}

export default App

