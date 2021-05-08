import { NextFunction, Request, Response } from 'express'
import { tokenVerify } from '../services/AuthSecurity'

interface ITokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new Error('JWT Token is missing')
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded: unknown = tokenVerify(token)

    const { sub } = decoded as ITokenPayload

    req.user = {
      id: sub,
    }

    return next()
  } catch {
    throw new Error('Invalid JWT Token')
  }
}
