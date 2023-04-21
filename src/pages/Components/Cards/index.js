import React from 'react'

const Cards = (props) => {
    const { title } = props
    return (
        <div className={`${title}`}>
            <h1>{title}</h1>
        </div>
    )
}

export default Cards