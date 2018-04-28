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

  constructor() {
    this.callbackFunc
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
      this.callbackFunc(ctx).then(() => this.responseBody(ctx))
    })
    server.listen(...args)
  }

  use(func: Function) {
    this.callbackFunc = func
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