import React from "react"

const fullname = (firstName) => (lastName) => {
    return " " + `${firstName} ${lastName}`.trim()
}

export function Person(props) {
    const { firstName = "", lastName = "", age = false } = props

    return (
        <div>
            <h3>Person Component</h3>
            <p>Hi{fullname(firstName)(lastName)}!</p>
            {age !== false && (
                <p>
                    I see you're {age} {age === 1 ? "year" : "years"} old.
                </p>
            )}
        </div>
    )
}
