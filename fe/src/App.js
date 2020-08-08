import React, { Suspense } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Button } from "./Components/Button"
import { Person as PersonComponent } from "./Components/views/Person"
import { DynamicLoader as DynamicComponent } from "./Components/DynamicLoader"

function App() {
    return (
        <Router>
            <div className="App">
                <div style={{ border: "5px solid HotPink", width: "95vw", margin: "1vh auto" }}>
                    <h1>Welcome to the dynamic component demo app!</h1>
                    <p>This section is going to stay the same regardless of what the current route is.</p>
                    <p>
                        Clicking on the button below is going to hit the backend server and request a component via the
                        'random' route. We'll display the json coming back below the button, update the route and then
                        display the component below in the green box.
                    </p>
                    <Button>Get new route!</Button>
                    <div style={{ border: "4px solid DarkSeaGreen", margin: "1vh" }}>
                        <Suspense fallback="Loading...">
                            <Switch>
                                <Route exact path="/">
                                    <div style={{ margin: "3vh 3vw" }}>Welcome Home!</div>
                                </Route>
                                <Route path="/person">
                                    <PersonComponent />
                                </Route>
                                <Route path="*">
                                    <DynamicComponent />
                                </Route>
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App
