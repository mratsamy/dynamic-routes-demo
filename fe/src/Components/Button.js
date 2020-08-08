import React from "react"
import { useHistory } from "react-router-dom"

export function Button(props) {
    const history = useHistory()

    const onClick = () => {
        // hit the server for a random value, if that fails throw the catch all
        fetch("/random")
            .then((response) => response.json())
            .then((data) => {
                // Update the browser API history & convert the data section of the payload
                // to a query string because I haven't bothered to set up redux or some
                // other state management lib
                const params = new URLSearchParams(data.data)
                history.push(`/${data.component}?${params.toString()}`)
            })
            .catch((e) => {
                history.push("/ServerError")
            })
    }

    return (
        <div>
            <button onClick={onClick} style={{ padding: "10px" }}>
                {props.children || "Click Me!"}
            </button>
        </div>
    )
}
