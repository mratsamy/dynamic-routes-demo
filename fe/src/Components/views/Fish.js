import React from "react"

export function Fish(props) {
    const { name = "", type = "" } = props

    return (
        <div>
            <h3>Fish Component</h3>
            <p>(bubbles, bubbles)</p>
            {name && <p>Heeeeelllllooooo {name}!</p>}
            {type && <p>As as {type}, do you speak whhhaaaaaallllleee?</p>}
        </div>
    )
}
