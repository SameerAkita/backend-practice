const express = require('express')
const app = express()
const PORT = 8383

let data = ['james']

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`
        <body style="background: pink; color: blue;">
            <h1>Data: </h1>
            <p>${JSON.stringify(data)}</p>
        </body>
    `)
})

app.get('/dashboard', (req, res) => {
    res.send('<h1>Dashboard</h1>')
})

app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.send(data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('We deleted the element off the end of the array')
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))