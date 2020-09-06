import React from 'react'
import { Notification } from 'notifyme'
import 'notifyme/dist/index.css'

 

var props = {
  title:"hello nbsu",
  type:"Success",
  time:"8000",
  message: 'This is a notification',
}
const App = () => {
  return( <div>
   <Notification {...props} />
  hdfvvdu
  </div>
  )
}

export default App
