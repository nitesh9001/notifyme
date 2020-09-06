# notifyme

> A notification library for different types

[![NPM](https://img.shields.io/npm/v/notifyme.svg)](https://www.npmjs.com/package/notifyme) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @reactui2020/notification-bar
```

## Usage

```jsx
import React, { Component } from 'react'
//required to import

import Notification from '@reactui2020/notification-bar
import '@reactui2020/notification-bar/dist/index.css'


class Example extends Component {
var object={
  title:"hello nbsu",
  type:"Success",
  time:"8000",
  message: 'This is a notification',
}

  render() {
    return <Notification {...dataObject} />
  }
}
```

## DataType
 ```
/-----------------------------------------------------------------------------------------------------------\
|                     |                                                 |                                   |
|     Prop Name       |                     Use                         |               Type                |
|_____________________|_________________________________________________|___________________________________|
| title               |   Add title to notification bar                 |  string , no , function           |
| message *           |   Define the message info(required)             |  string , no , function           |
| type    *           |   type of notification(required)                |  success, info , error , warning  |         |
| time                |   at which time it automatically disapears      |  hex, rbga , rbg , name           |
| ondismiss           |   Write a function when to dismiss (function)   |  function                         |
| borderRadius        |   Provide border radius to button  (in px)      |  numeric value                    |
\-----------------------------------------------------------------------------------------------------------/
 ```

## License

MIT © [nitesh9001](https://github.com/nitesh9001)
