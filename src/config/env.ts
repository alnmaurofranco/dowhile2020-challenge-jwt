/* eslint-disable node/no-path-concat */
import * as dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config({ path: resolve(__dirname, './.env') })
