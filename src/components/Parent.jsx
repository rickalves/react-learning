import React from 'react'

import Child from './Child'

export default props => 
    <div>
        <h1>{props.firstName} {props.lastName}</h1>
        <h2>Children</h2>
        <ul>
            <Child firstName="Peter" lastName={props.lastName} />
            <Child {...props}/>
            <Child {...props} firstName="Louise"/>
            <Child {...props} lastName="Cruze Blade"/>
        </ul>
    </div>
