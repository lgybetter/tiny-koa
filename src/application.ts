import * as http from 'http'
import { IncomingMessage, ServerResponse } from 'http'
import Request from './request'
import Response from './response'
import Context from './context'

class Applicaion {
  private callbackFunc: Function
  private context: Context
  private request: Request
  private response: Response
  private middlewares: Function[]
  constructor() {
    this.callbackFunc
    this.middlewares = []
  }

  createContext(req: IncomingMessage, res: ServerResponse) {
    this.request = new Request(req)
    this.response = new Response(res)
    this.context = new Context(this.request, this.response)
    return this.context
  }

  listen(...args: any[]) {
    const server = http.createServer((req, res) => {
      const ctx = this.createContext(req, res)
      return this.compose()(ctx).then(() => this.responseBody(ctx))
    })
    server.listen(...args)
  }

  use(middleware: Function) {
    this.middlewares.push(middleware)
  }

  compose() {
    return async (ctx: Context) => {
      function createNext(middleware: Function, preNext: Function) {
        return async () => {
          await middleware(ctx, preNext)
        }
      }
      const len = this.middlewares.length
      let next = async () => {
        return Promise.resolve()
      }
      for (let i = len - 1; i >= 0; i--) {
        let curMiddleware = this.middlewares[i]
        next = createNext(curMiddleware, next)
      }
      await next()
    }
  }

  responseBody(ctx: Context) {
    const content = ctx.body
    if (typeof content === 'string') {
      ctx.res.end(content)
    }
    else if (typeof content === 'object') {
      ctx.res.end(JSON.stringify(content))
    }
  }
}

export default Applicaion