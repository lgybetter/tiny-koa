import { ServerResponse } from 'http';
class Response {
  private _body: any
  res: ServerResponse
  constructor (res: ServerResponse) {
    this.res = res
  }
  get body () {
    return this._body
  }
  set body (data: any) {
    this._body = data
  }
  get status () {
    return this.res.statusCode
  }
  set status (statusCode) {
    if (typeof statusCode !== 'number') {
      throw new Error('statusCode must be a number!');
    }
    this.res.statusCode = statusCode
  }
}

export default Response