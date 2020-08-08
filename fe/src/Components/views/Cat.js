import React from "react"

export function Cat(props) {
    const { name = "", hair = "" } = props

    return (
        <div>
            <h3>Cat Component</h3>
            <p>Hey cool cat!</p>
            {name && <p>You're name is {name}?!</p>}
            {hair && <p>Hey you've got {hair} hair!</p>}
        </div>
    )
}
