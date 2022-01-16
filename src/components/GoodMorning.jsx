/**
 * Ways of send params to JSX Components
 * Most common way is using the variable props
 */

import React from 'react'
// import React, { Fragment } from "react"

export default props =>
    <div>
        <h1>Good Morning {props.nome}!</h1>
        <h2>Welcome!</h2>
    </div>
    
    // <Fragment>
    //     <h1>Good Morning {props.nome}!</h1>
    //     <h2>Welcome!</h2>
    // </Fragment>

{/* <React.Fragment>
    <h1>Good Morning {props.nome}!</h1>
    <h2>Welcome!</h2>
</React.Fragment> */}

