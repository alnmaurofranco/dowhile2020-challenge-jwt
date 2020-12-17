export default {
  hashSalt: 12,
  jwt: {
    secret: process.env.JWT_SECRET,
    duration: (process.env.JWT_DURATION as string) || '1h',
    privateKey: process.env.JWT_PRIVATE_KEY,
    publicKey: process.env.JWT_PUBLIC_KEY,
  },
}
// .replace(/\n/gm, '\n')
// .replace(/\n/gm, '\n')
//
