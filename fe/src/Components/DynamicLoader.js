import React, { lazy, useEffect, useState, Suspense } from "react"
import { useLocation } from "react-router-dom"
import queryString from "query-string"

// Helper function to dynamically load the component
const loadedComponents = new Map()

const importComponent = async (componentName) => {
    if (loadedComponents.has(componentName)) {
        return loadedComponents.get(componentName)
    } else {
        const component = await getComponent(componentName)
        loadedComponents.set(componentName, component)
        return component
    }
}

const getComponent = (componentName) =>
    lazy(() =>
        // first attempt to load the component, otherwise fallback to 404
        import(`./views/${componentName || ""}`)
            // lazy load doesn't support named exports so this `then` makes it the default
            .then((module) => ({ default: module[componentName] }))
            .catch((e) => import(`./views/404.js`))
    )

export function DynamicLoader() {
    const [view, setView] = useState(false)
    const [dataProps, setDataProps] = useState(false)
    const location = useLocation()

    const data = queryString.parse(location.search) || {}
    const componentName = location.pathname.split("/").pop()
    const id = data?.id || `random-key-${Math.floor(Math.random() * 10000)}`

    // We need to update this, currently the data is an object so we need to deep compare data
    useEffect(() => {
        importComponent(componentName).then((component) => setView(component))
    }, [componentName])

    useEffect(() => {
        if (!dataProps) return setDataProps(data)

        if (Object.keys(dataProps).length !== Object.keys(data).length) return setDataProps(data)

        const sameObject = Object.keys(dataProps).every((key) => dataProps[key] === data[key])

        if (!sameObject) setDataProps(data)
    }, [data])

    const Component = view

    return <div className="container">{Component && <Component id={id} {...dataProps} />}</div>
}
