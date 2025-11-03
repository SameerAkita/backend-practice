import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'

const app = express()
const PORT = process.env.PORT || 1234

// Get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url)
// Get the directory name from the file path
const __dirname = dirname(__filename)

// Middleware
app.use(express.json())
// Serves the HTML file from the /public category
// Tells express to serve all files from the public folder as static assets / files.
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))

})

// Routes
app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})