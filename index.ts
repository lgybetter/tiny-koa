import { IncomingMessage, ServerResponse } from 'http'
import TinyKoa from './src/application'
import Context from './src/context'

const app = new TinyKoa()

app.use(async (ctx: Context) => {
  ctx.status = 200
  ctx.body = 'hello tiny koa'
})

app.listen(3000, 'localhost', () => {
  console.log('running at http://localhost:3000')
})