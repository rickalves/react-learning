/**
 * Case of use showing how to export multiple components using
 * export default and export
 */
import React from 'react'

export const GoodAfternoon = props => 
    <h1>Good Afternoon {props.name}</h1>

export const GoodEvening = props => 
    <h1>Good Evening {props.name}</h1>

export default { GoodEvening, GoodAfternoon }

