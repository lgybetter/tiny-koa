import * as url from 'url'
import { IncomingMessage } from 'http'

class Request {
  req: IncomingMessage
  constructor (req: IncomingMessage) {
    this.req = req
  }
  get query () {
    return url.parse(this.req.url, true).query
  }
}

export default Request