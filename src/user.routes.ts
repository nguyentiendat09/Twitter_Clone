import express from 'express'
const userRouter = express.Router()

//middleware là một hàm có thể truy cập vào các đối tượng request và response cũng như vào hàm tiếp theo trong chuỗi middleware.
userRouter.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

userRouter.get('/tweets', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        text: 'Hello World'
      }
    ]
  })
})

export default userRouter
