import React from "react"

export default function (props) {
    return (
        <div>
            <h2>404: Unable to find a route</h2>
            <p>Unable to find a matching component {props.component ? `${props.component}` : ""}</p>
        </div>
    )
}
