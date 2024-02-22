import { Request, Response } from 'express'
import User from '~/models/schemas/users.schema'
import databaseService from '~/services/database.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'nguyentiendat@gmail.com' && password === '123456') {
    return res.status(200).json({
      message: 'Login successfully'
    })
  }
  return res.status(400).json({
    error: 'Invalid email or password'
  })
}

export const registerController = (req: Request, res: Response) => {
  const { email, password } = req.body
  return res.status(400).json({
    error: 'Invalid email or password'
  })
}
