# Tiny Koa

## How to use

```js
import TinyKoa from 'tiny-koa'

const app = new TinyKoa()

app.use(async (ctx) => {
  ctx.status = 200
  ctx.body = 'hello tiny koa'
})

app.listen(3000, 'localhost', () => {
  console.log('running at http://localhost:3000')
})
```