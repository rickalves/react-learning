import React from 'react'

export default props =>

    <div>
        <h1>{props.firstName} {props.lastName}</h1>
        <h2>Children</h2>
        <ul>
            {/*Imput childs via component*/}
            {/* {props.children} */}
            {/* This function create a inheritance passing the lastName to every
                child of a parent*/}
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, { 
                        ...props, ...child.props 
                    })
                })  
            }
           
        </ul>
    </div>
