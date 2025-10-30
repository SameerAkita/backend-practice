const express = require('express')
const app = express()
const PORT = 8383

app.get('/', (req, res) => {
    res.send('<h1>This is a website</h1><input />')
})

app.get('/dashboard', (req, res) => {
    console.log('hit the /dashboard endpoint')
    res.send('hi')
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))