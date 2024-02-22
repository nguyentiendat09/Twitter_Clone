import userRouter from '~/user.routes'
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api', userRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
