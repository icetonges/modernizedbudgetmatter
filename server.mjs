import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { createApp } from './server-app.mjs'

const dist = resolve('dist')
const port = Number(process.env.PORT || 8080)

if (!existsSync(dist)) throw new Error('Missing dist directory. Run npm run build first.')
const app = createApp(dist)
app.listen(port, '0.0.0.0', () => console.log(`Budget Matter listening on ${port}`))
