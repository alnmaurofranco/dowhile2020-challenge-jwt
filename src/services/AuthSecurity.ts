import { sign, verify, SignOptions } from 'jsonwebtoken'
import { crypto } from '@config/index'

type signJWT = SignOptions

const signOptions = {
  algorithm: 'RS256',
  expiresIn: crypto.jwt.duration,
} as signJWT

const generateToken = (payload: string) =>
  sign({}, crypto.jwt.privateKey, {
    ...signOptions,
    subject: payload,
  })

const tokenVerify = (token: string) => verify(token, crypto.jwt.publicKey)

export { generateToken, tokenVerify }
