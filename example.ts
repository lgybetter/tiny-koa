import { IncomingMessage, ServerResponse } from 'http'
import TinyKoa from './src/application'
import Context from './src/context'

const app = new TinyKoa()
let responseData: any = {}

app.use(async (ctx: Context, next: Function) => {
  responseData.name = 'tom'
  console.log('1')
  await next();
  ctx.body = responseData
  console.log('4')
})

app.use(async (ctx: Context, next: Function) => {
  responseData.age = 16;
  console.log('2')
  await next();
})

app.use(async (ctx: Context) => {
  console.log('3')
  responseData.sex = 'male'
})

app.on('error', (error: Error) => {
  console.log('Error stack:' + error.stack)
  console.log('Error message:' + error.message)
})

app.listen(3000, 'localhost', () => {
  console.log('running at http://localhost:3000')
})