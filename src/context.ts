import { IncomingMessage, ServerResponse } from 'http';
import Response from './response';
import Request from './request';

class Context {
  response: Response
  res: ServerResponse
  request: Request
  req: IncomingMessage
  constructor (request: Request, response: Response) {
    this.request = request
    this.response = response
    this.req = request.req
    this.res = response.res
  }
  get query() {
    return this.request.query
  }
  get body() {
    return this.response.body
  }
  set body(data: any) {
    this.response.body = data
  }
  get status() {
    return this.response.status
  }
  set status(statusCode) {
    this.response.status = statusCode
  }
}

export default Context