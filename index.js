const express = require('express')
const port = process.env.PORT || 3000 //creating a variable and grabbing the port from the environment

const app = express()

app.get('/', (req, res) => { //this is all we need to create an express App
    res.send('Do you even 🐳? This is how we do it like its 1999')
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})

//creating an API, but not connecting...