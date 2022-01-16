/**
 * Entry file used to render the React components.
 */
import React from 'react'
import ReactDOM from 'react-dom'

//importing single components
// import GoodMorning from './components/GoodMorning'

//importing multiple components
// import { GoodAfternoon, GoodEvening } from './components/Multiple'
import Multiple from './components/Multiple'

ReactDOM.render(
    // <div>
    //     <GoodAfternoon name = "Rick" />
    //     <GoodEvening name = "Marina" />
    // </div>,
    <div>
        <Multiple.GoodAfternoon name = "Rick" />
        <Multiple.GoodEvening name = "Marina" />
    </div>,
     document.getElementById('root')
)
