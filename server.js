const express = require("express")
const app = express()
const path = require("path")

// Serve up the FE code
app.use(express.static("./fe/build"))

app.get("/random", (request, response) => {
    // We're going to randomly select a component w/ data back to the FE
    const PersonComponent = {
        component: "Person",
        data: {
            id: "123",
            firstName: "John",
            lastName: "Doe",
            age: 30,
        },
    }

    const DogComponent = {
        component: "Dog",
        data: {
            id: "321",
            name: "rover",
            breed: "golden retriever",
        },
    }

    const CatComponent = {
        component: "Cat",
        data: {
            id: "456",
            name: "fluffy",
            hair: "long",
        },
    }

    const FishComponent = {
        component: "Fish",
        data: {
            id: "654",
            name: "bubbles",
            type: "goldfish",
        },
    }

    const FailureComponent = {
        component: "IDontMatchAnything",
    }

    const options = [PersonComponent, DogComponent, CatComponent, FishComponent, FailureComponent]

    // Super basic demo randomizer
    const randomNumber = Math.floor(Math.random() * options.length)

    // If we wanted to we could also send down a different status code for the failure component
    response.status(200).json(options[randomNumber])
})

app.use("*", (request, response) => {
    response.sendFile(__dirname + "/fe/build/index.html")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`🚀 starting server: http://localhost:${PORT}`)
})
