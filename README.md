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

## Use middlewares

```js
import TinyKoa from 'tiny-koa'

const app = new TinyKoa()
let responseData = {}

app.use(async (ctx, next) => {
  responseData.name = 'tom'
  console.log('1')
  await next();
  ctx.body = responseData;
  console.log('4')
})

app.use(async (ctx, next) => {
  responseData.age = 16
  console.log('2')
  await next()
})

app.use(async (ctx) => {
  console.log('3')
  responseData.sex = 'male'
})

app.listen(3000, 'localhost', () => {
  console.log('running at http://localhost:3000')
})
```