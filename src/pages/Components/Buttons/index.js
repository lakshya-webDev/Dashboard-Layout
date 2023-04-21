import React from 'react'


const Buttons = (props) => {
    const { title } = props
    return (
        <div className={`${title}`}>
            <h1>{title}</h1>
        </div>
    )
}

export default Buttons