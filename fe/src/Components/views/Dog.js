import React from "react"

export function Dog(props) {
    const { name = "", breed = "" } = props

    return (
        <div>
            <h3>Dog Component</h3>
            <p>Hiyah Pup!</p>
            {name && <p>Aren't you a good boy {name}</p>}
            {breed && <p>I see you're a {breed}</p>}
        </div>
    )
}
